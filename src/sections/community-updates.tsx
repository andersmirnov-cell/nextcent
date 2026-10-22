import arrowIcon from "../assets/images/ico-arrow-right.svg";

import image1 from "../assets/images/community-updates/img-1.png";
import image2 from "../assets/images/community-updates/img-2.png";
import image3 from "../assets/images/community-updates/img-3.png";

const items = [
	{
		url: image1,
		title: "Creating Streamlined Safeguarding Processes with OneRen",
	},
	{
		url: image2,
		title: "What are your safeguarding responsibilities and how can you manage them?",
	},
	{
		url: image3,
		title: "Revamping the Membership Model with Triathlon Australia",
	},
];

export function CommunityUpdates() {
	return (
		<section className="mt-10 mb-23.75">
			<div className="container">
				<header className="text-center text-neutral-grey text-body-2 max-w-160 mx-auto space-y-2 mb-4">
					<h2 className="text-headline-2 text-neutral-dark-grey">
						Caring is the new marketing
					</h2>
					<p>
						The Nexcent blog is the best place to read about the latest membership
						insights, trends and more. See who's joining the community, read about how
						our community are increasing their membership income and lot's more.
					</p>
				</header>
				<div className="grid gap-15 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
					{items.map((item) => {
						return (
							<a href="#" key={item.title} className="block">
								<figure className="relative block ">
									<img
										src={item.url}
										alt=""
										loading="lazy"
										className="rounded-lg aspect-368/286 block w-full"
									/>
									<figcaption className="mx-6.5 -mt-24 p-4 relative z-10 text-center rounded-lg bg-neutral-silver text-neutral-grey shadow-[0_8px_16px] shadow-neutral-grey-blue/40 space-y-6 text-headline-4">
										<h3>{item.title}</h3>
										<span className="inline-flex items-center gap-2 text-brand-primary mb-2">
											Readmore
											<span
												className="size-6 shrink-0 bg-current mask-no-repeat mask-contain"
												style={{
													maskImage: `url("${arrowIcon}")`,
												}}
											></span>
										</span>
									</figcaption>
								</figure>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
