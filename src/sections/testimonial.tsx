import image from "../assets/images/img-content-3.png";

import ico1 from "../assets/images/clients/client-1-1.svg";
import ico2 from "../assets/images/clients/client-2.svg";
import ico3 from "../assets/images/clients/client-3.svg";
import ico4 from "../assets/images/clients/client-4.svg";
import ico5 from "../assets/images/clients/client-5.svg";
import ico6 from "../assets/images/clients/client-6.svg";

import arrowIcon from "../assets/images/ico-arrow-right.svg";

const icons = [ico1, ico2, ico3, ico4, ico5, ico6];

export function Testimonial() {
	return (
		<section className="my-12 bg-neutral-silver py-8">
			<div className="container flex flex-col gap-y-5 md:flex-row md:items-start md:gap-x-10 lg:gap-x-19.5">
				<img
					src={image}
					alt="Tesla logo on a rounded dark blue 3D icon"
					loading="lazy"
					className="object-cover w-81.5 max-w-full aspect-square rounded-lg shrink-0 shadow-[0_8px_16px] shadow-neutral-grey-blue/40 self-center md:self-auto md:w-60 lg:w-81.5"
				/>
				<div className="text-body-2 text-neutral-grey py-px">
					<blockquote className="space-y-4">
						<q className="block [quotes:none]">
							Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
							sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
							Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
							molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
							nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
							quis tristique nulla sodales. Suspendisse eget lorem eu turpis
							vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
							vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
							efficitur libero condimentum id. Curabitur id nibh id sem dignissim
							finibus ac sit amet magna.
						</q>
						<cite className="text-neutral-light-grey text-body-2 not-italic space-y-2">
							<strong className="text-brand-primary text-headline-4 block">
								Tim Smith
							</strong>
							<p>British Dragon Boat Racing Association</p>
						</cite>
					</blockquote>
					<div className="flex flex-col gap-y-10 items-center justify-between gap-5 mt-8 lg:flex-row">
						<div className="flex flex-wrap items-center gap-x-10.75 gap-y-5">
							{icons.map((imgUlrl) => {
								return (
									<figure key={imgUlrl}>
										<img src={imgUlrl} alt="" />
									</figure>
								);
							})}
						</div>
						<a
							href="#"
							className="flex items-center gap-2 text-brand-primary whitespace-nowrap text-headline-4"
						>
							Meet all customers
							<span
								className="size-6 shrink-0 bg-current mask-no-repeat mask-contain"
								style={{
									maskImage: `url("${arrowIcon}")`,
								}}
							></span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
