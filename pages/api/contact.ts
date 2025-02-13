import formidable from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export const config = {
	api: {
		bodyParser: false,
	},
};

const saveFile = async (file: formidable.File): Promise<string> => {
	const data = fs.readFileSync(file.filepath);
	const uploadDir = path.join(process.cwd(), "uploads");
	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir, { recursive: true });
	}
	const fileName = `${Date.now()}-${file.originalFilename}`;
	const filePath = path.join(uploadDir, fileName);
	fs.writeFileSync(filePath, data);
	fs.unlinkSync(file.filepath);
	return fileName;
};

const saveFormData = async (
	fields: formidable.Fields,
	filePath: string | null
) => {
	const data = {
		name: fields.name?.[0],
		email: fields.email?.[0],
		message: fields.message?.[0],
		resumePath: filePath,
		timestamp: new Date().toISOString(),
	};
	const dataDir = path.join(process.cwd(), "data");
	if (!fs.existsSync(dataDir)) {
		fs.mkdirSync(dataDir, { recursive: true });
	}
	const dataFilePath = path.join(dataDir, `${Date.now()}.json`);
	fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method Not Allowed" });
	}

	try {
		const form = formidable();
		const [fields, files] = await form.parse(req);

		let filePath: string | null = null;
		if (files.resume && files.resume[0]) {
			filePath = await saveFile(files.resume[0]);
		}

		await saveFormData(fields, filePath);

		res.status(200).json({ message: "Form submitted successfully" });
	} catch (error) {
		console.error("Error processing form:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
