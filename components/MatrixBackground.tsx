"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
	x: number;
	y: number;
	speed: number;
	value: string;
	size: number;
	opacity: number;
}

const MatrixBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [mousePosition, setMousePosition] = useState<{
		x: number;
		y: number;
	} | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const particles: Particle[] = [];
		const particleCount = 20;
		const textColor = "rgba(0, 255, 0, 0.7)";

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const createParticle = (): Particle => ({
			x: Math.random() * canvas.width,
			y: 0,
			speed: 0.5 + Math.random() * 1.5,
			value: Math.random() < 0.5 ? "0" : "1",
			size: 10 + Math.random() * 20,
			opacity: 0.9 + Math.random() * 0.9,
		});

		const initParticles = () => {
			for (let i = 0; i < particleCount; i++) {
				particles.push(createParticle());
			}
		};

		const drawParticle = (particle: Particle) => {
			if (!ctx) return;

			ctx.font = `${particle.size}px monospace`;
			ctx.fillStyle = textColor;
			ctx.globalAlpha = particle.opacity;
			ctx.fillText(particle.value, particle.x, particle.y);
		};

		const updateParticle = (particle: Particle) => {
			particle.y += particle.speed;

			if (mousePosition) {
				const dx = particle.x - mousePosition.x;
				const dy = particle.y - mousePosition.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 100) {
					const angle = Math.atan2(dy, dx);
					const force = (100 - distance) / 100;
					particle.x += Math.cos(angle) * force * 5;
					particle.y += Math.sin(angle) * force * 5;
				}
			}

			if (particle.y > canvas.height) {
				particle.y = 0;
				particle.x = Math.random() * canvas.width;
			}
			if (particle.x < 0) particle.x = 0;
			if (particle.x > canvas.width) particle.x = canvas.width;
		};

		const animate = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				updateParticle(particle);
				drawParticle(particle);
			});

			requestAnimationFrame(animate);
		};

		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		resizeCanvas();
		initParticles();
		animate();

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", resizeCanvas);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />;
};

export default MatrixBackground;
