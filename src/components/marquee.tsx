import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

interface MarqueeProps {
	children: ReactNode;
	/** Scroll speed in px per second */
	speed?: number;
	className?: string;
	groupClassName?: string;
}

export function Marquee({
	children,
	speed = 50,
	className = "",
	groupClassName = "",
}: MarqueeProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const groupRef = useRef<HTMLUListElement>(null);
	const [copies, setCopies] = useState(1);
	const [groupWidth, setGroupWidth] = useState(0);

	useLayoutEffect(() => {
		const root = rootRef.current;
		const group = groupRef.current;
		if (!root || !group) return;

		function measure() {
			if (!root || !group) return;
			const width = group.offsetWidth;
			if (!width) return;
			// One half of the track must be at least as wide as the viewport
			setCopies(Math.max(1, Math.ceil(root.offsetWidth / width)));
			setGroupWidth(width);
		}

		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(root);
		observer.observe(group);

		return () => observer.disconnect();
	}, []);

	// The track holds two identical halves, so moving it by -50% loops seamlessly
	const groups = copies * 2;
	const duration = groupWidth ? (groupWidth * copies) / speed : 0;

	return (
		<div ref={rootRef} className={`overflow-hidden ${className}`}>
			<div
				className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
				style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
			>
				{Array.from({ length: groups }, (_, index) => (
					<ul
						key={index}
						ref={index === 0 ? groupRef : undefined}
						aria-hidden={index > 0 || undefined}
						inert={index > 0}
						className={`flex shrink-0 items-center ${groupClassName}`}
					>
						{children}
					</ul>
				))}
			</div>
		</div>
	);
}
