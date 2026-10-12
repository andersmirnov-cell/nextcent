interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	iconType: "mobile-menu" | "search";
	size: "normal" | "medium" | "small";
	color?: string;
	srText?: string;
	isOpen?: boolean;
}

const btnSize = {
	small: "size-8",
	medium: "size-12",
	normal: "size-16",
} as const;

const btnDefClasses =
	"rounded bg-brand-primary cursor-pointer inline-flex items-center justify-center transition-colors";
const mobileMenuLineClasses = {
	default:
		"h-px w-[70%] bg-current absolute top-1/2 inset-s-1/2 -translate-x-1/2 transition-[rotate,width,margin] duration-300",
	opened: "nth-[1]:rotate-45 nth-[2]:w-0 nth-[3]:-rotate-45",
	closed: "nth-[1]:-mt-1.5 nth-[3]:mt-1.5",
};

export function ButtonIcon({
	type = "button",
	iconType,
	srText,
	className = "",
	size,
	color = "text-white",
	isOpen,
	...rest
}: ButtonIconProps) {
	const icoSize = size === "small" ? "size-4" : "size-6";

	if (iconType === "mobile-menu") {
		return (
			<button
				{...rest}
				type={type}
				className={`${btnDefClasses} ${color} ${btnSize[size]} ${className} relative`}
			>
				<span
					className={`${mobileMenuLineClasses.default} ${isOpen ? mobileMenuLineClasses.opened : mobileMenuLineClasses.closed}`}
				></span>
				<span
					className={`${mobileMenuLineClasses.default} ${isOpen ? mobileMenuLineClasses.opened : mobileMenuLineClasses.closed}`}
				></span>
				<span
					className={`${mobileMenuLineClasses.default} ${isOpen ? mobileMenuLineClasses.opened : mobileMenuLineClasses.closed}`}
				></span>
				<span className="sr-only">{srText ?? "Open Mobile Nav"}</span>
			</button>
		);
	}
	if (iconType === "search") {
		return (
			<button
				{...rest}
				type={type}
				className={`${btnDefClasses} ${color} ${btnSize[size]} ${className}`}
			>
				<span className={icoSize}>
					<svg
						className="w-full"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							className="stroke-current"
							cx="11"
							cy="11"
							r="8"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							className="stroke-current"
							d="M16.5 16.958L21.5 21.958"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>

				<span className="sr-only">{srText ? srText : "Search"}</span>
			</button>
		);
	}
}
