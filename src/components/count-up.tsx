import { useEffect, useState } from "react";
import { isReducedMotion } from "./constants";

interface CountUpProps {
	end: number;
	start: boolean;
	/** Duration in ms */
	duration?: number;
	className?: string;
}

const formatter = new Intl.NumberFormat("en-US");

function easeOutCubic(t: number) {
	return 1 - (1 - t) ** 3;
}

export function CountUp({ end, start, duration = 2000, className = "" }: CountUpProps) {
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (!start || isReducedMotion) return;

		let frame = 0;
		let startTime: number | null = null;

		function tick(time: number) {
			startTime ??= time;
			const progress = Math.min((time - startTime) / duration, 1);
			setValue(Math.round(end * easeOutCubic(progress)));
			if (progress < 1) frame = requestAnimationFrame(tick);
		}

		frame = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(frame);
	}, [start, end, duration]);

	const shown = start && isReducedMotion ? end : value;

	return (
		<span className={`tabular-nums ${className}`}>
			{/* Screen readers get the final number only, not every frame */}
			<span aria-hidden="true">{formatter.format(shown)}</span>
			<span className="sr-only">{formatter.format(end)}</span>
		</span>
	);
}
