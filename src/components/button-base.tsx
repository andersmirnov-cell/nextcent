interface BaseProps {
	btnSize?: "small" | "normal";
	variant?: "primary" | "tertiary";
	disabled?: boolean;
	loading?: boolean;
}

type ButtonAsButton = BaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		href?: never;
	};

type ButtonAsLink = BaseProps &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		href: string;
	};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function BaseButton({
	btnSize = "normal",
	variant = "primary",
	disabled,
	loading = false,
	className = "",
	children,
	href,
	...rest
}: ButtonProps) {
	const btnStyleClass = {
		normal: "px-7.5 text-body-2 min-h-13 rounded",
		small: "px-4.5 text-body-3 min-h-10 rounded-md",
		primary:
			"bg-brand-primary text-neutral-white border-brand-primary focus-visible:border-neutral-dark-grey active:bg-shade-2 active:border-shade-2",
		primaryLoading: "bg-shade-2 text-neutral-white border-shade-2 pointer-events-none",
		disabled:
			"bg-neutral-silver border-neutral-silver text-neutral-grey-blue pointer-events-none",
		tertiary:
			"bg-transparent text-brand-primary border-transparent hover:bg-neutral-silver hover:border-neutral-silver focus-visible:border-neutral-dark-grey active:bg-tint-5 active:border-tint-5",
		tertiaryLoading: "bg-tint-5 text-brand-primary border-tint-5 pointer-events-none",
	};

	const state = disabled ? "disabled" : loading ? "loading" : "default";

	const classes = `inline-flex items-center justify-center gap-2 text-center font-medium border-2 cursor-pointer p-1 transition-colors duration-300 focus:outline-0 ${[
		btnSize === "normal" ? btnStyleClass.normal : "",
		btnSize === "small" ? btnStyleClass.small : "",
		state === "disabled" ? btnStyleClass.disabled : "",
		variant === "primary" && state === "default" ? btnStyleClass.primary : "",
		variant === "primary" && state === "loading" ? btnStyleClass.primaryLoading : "",
		variant === "tertiary" && state === "default" ? btnStyleClass.tertiary : "",
		variant === "tertiary" && state === "loading" ? btnStyleClass.tertiaryLoading : "",
		className,
	].join(" ")}`;

	const content = (
		<>
			{children}
			{state === "loading" && (
				<Spinner className={btnSize === "small" ? "size-4" : "size-6"} />
			)}
		</>
	);

	if (href !== undefined) {
		const linkProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

		return (
			<a
				{...linkProps}
				href={disabled ? undefined : href}
				aria-disabled={disabled || undefined}
				aria-busy={state === "loading" || undefined}
				tabIndex={disabled ? -1 : linkProps.tabIndex}
				className={classes}
			>
				{content}
			</a>
		);
	}

	const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

	return (
		<button
			{...buttonProps}
			disabled={disabled}
			aria-busy={state === "loading" || undefined}
			className={classes}
		>
			{content}
		</button>
	);
}

function Spinner({ className }: { className: string }) {
	return (
		<svg
			className={`${className} shrink-0 animate-spin`}
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			{Array.from({ length: 8 }, (_, i) => (
				<line
					key={i}
					x1="12"
					y1="2"
					x2="12"
					y2="6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					opacity={(i + 1) / 8}
					transform={`rotate(${i * 45} 12 12)`}
				/>
			))}
		</svg>
	);
}
