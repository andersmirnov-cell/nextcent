import { BaseButton } from "../components/button-base";

interface UnlockProps {
	imageUrl: string;
	imageAlt: string;
	titleText: string;
	text: string;
	btnText?: string;
	btnHref?: string;
	className?: string;
}

export function Unlock({ ...props }: UnlockProps) {
	const classes = ["my-10.5"];
	if (props.className) {
		classes.push(props.className);
	}
	return (
		<section className={classes.join(" ")}>
			<div className="container flex flex-col items-center gap-12 lg:flex-row lg:gap-12.5">
				<img
					src={props.imageUrl}
					alt={props.imageAlt}
					loading="lazy"
					className="w-full max-w-110.5 h-auto shrink-0 aspect-442/433 object-contain lg:w-110.5"
				/>
				<div className="text-body-3 flex flex-col items-start gap-4 text-neutral-grey lg:max-w-150.25">
					<h2 className="text-headline-2 text-neutral-dark-grey">{props.titleText}</h2>
					<p>{props.text}</p>
					<BaseButton href={props.btnHref ?? "#"} className="mt-4">
						{props.btnText ?? "Learn More"}
					</BaseButton>
				</div>
			</div>
		</section>
	);
}
