import { BaseButton } from "../components/button-base";
import btnIco from "../assets/images/ico-arrow-right-white-16.svg";

export function Cta() {
	return (
		<section className="bg-neutral-silver py-8 mt-17.75">
			<div className="container">
				<div className="mx-auto text-center max-w-120 lg:max-w-220">
					<h2 className="text-headline-2 text-neutral-black mb-8 lg:text-headline-1">
						Pellentesque suscipit fringilla libero eu.
					</h2>
					<BaseButton icon={btnIco}>Get a Demo</BaseButton>
				</div>
			</div>
		</section>
	);
}
