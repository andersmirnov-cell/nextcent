export const responsive = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1440,
} as const;

export const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
