"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
	x: number;
	y: number;
	speed: number;
	value: string;
	size: number;
	opacity: number;
	depth: number; // 0 to 1, where 1 is closest
}

const MatrixBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	// Use useRef for mouse position to avoid re-renders
	const mousePosition = useRef<{ x: number; y: number } | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;

		let particles: Particle[] = [];
		const particleCount = 150;
		const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const createParticle = (resetY = false): Particle => {
			const depth = Math.random();
			const size = 10 + depth * 15;
			return {
				x: Math.random() * canvas.width,
				// Initialize above the screen (negative y) so they fall in
				y: resetY ? -size : Math.random() * -canvas.height, 
				speed: (0.5 + Math.random() * 1.5) * (0.5 + depth),
				value: characters[Math.floor(Math.random() * characters.length)],
				size: size,
				opacity: 0.1 + depth * 0.8,
				depth: depth,
			};
		};

		const initParticles = () => {
			particles = [];
			for (let i = 0; i < particleCount; i++) {
				// Pass false to spread them out initially, but we changed the logic above
				// to make them start above screen. 
				// Actually, to make them "start from top" on load, we want them ALL above screen.
				particles.push(createParticle(false)); 
			}
		};

		const drawParticle = (particle: Particle) => {
			if (!ctx) return;

			ctx.font = `${particle.size}px monospace`;
			
			if (particle.depth > 0.7) {
				ctx.shadowBlur = 10;
				ctx.shadowColor = "rgba(34, 197, 94, 0.8)";
				ctx.fillStyle = `rgba(100, 255, 100, ${particle.opacity})`;
			} else {
				ctx.shadowBlur = 0;
				ctx.fillStyle = `rgba(0, 255, 70, ${particle.opacity})`;
			}

			ctx.fillText(particle.value, particle.x, particle.y);
			ctx.shadowBlur = 0;
		};

		const updateParticle = (particle: Particle) => {
			particle.y += particle.speed;

			// Randomly change character (independent of mouse)
			if (Math.random() < 0.02) {
				particle.value = characters[Math.floor(Math.random() * characters.length)];
			}

			if (mousePosition.current) {
				const dx = particle.x - mousePosition.current.x;
				const dy = particle.y - mousePosition.current.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const interactionRadius = 80;

				if (distance < interactionRadius) {
					const angle = Math.atan2(dy, dx);
					const force = (interactionRadius - distance) / interactionRadius;
					const pushFactor = 1 * particle.depth;
					
					particle.x += Math.cos(angle) * force * pushFactor;
				}
			}

			if (particle.y > canvas.height + 50) {
				// Reset to top when it goes off screen
				Object.assign(particle, createParticle(true));
			}
		};

		let animationFrameId: number;

		const animate = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				updateParticle(particle);
				drawParticle(particle);
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		const handleMouseMove = (event: MouseEvent) => {
			// Update ref instead of state
			mousePosition.current = { x: event.clientX, y: event.clientY };
		};

		const handleResize = () => {
			resizeCanvas();
			initParticles();
		};

		resizeCanvas();
		initParticles();
		animate();

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []); // Empty dependency array ensures this only runs once

	return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full bg-black pointer-events-none" />;
};

export default MatrixBackground;
