import community1 from "../assets/images/community/community-1.svg";
import community2 from "../assets/images/community/community-2.svg";
import community3 from "../assets/images/community/community-3.svg";

const communityCards = [
	{
		icon: community1,
		title: "Membership Organisations",
		text: "Our membership management software provides full automation of membership renewals and payments",
	},
	{
		icon: community2,
		title: "National Associations",
		text: "Our membership management software provides full automation of membership renewals and payments",
	},
	{
		icon: community3,
		title: "Clubs And Groups",
		text: "Our membership management software provides full automation of membership renewals and payments",
	},
];

export function Community() {
	return (
		<section className="my-10.5">
			<div className="container flex flex-col items-center gap-4">
				<div className="flex flex-col items-center gap-2 text-center">
					<h2 className="max-w-136 text-headline-2 text-neutral-dark-grey">
						Manage your entire community in a single system
					</h2>
					<p className="text-body-2 text-neutral-grey">Who is Nextcent suitable for?</p>
				</div>
				<ul className="flex flex-wrap justify-center gap-6 w-full py-2.5 lg:flex-nowrap lg:justify-between">
					{communityCards.map((card) => (
						<li
							key={card.title}
							className="flex flex-col items-center gap-2 w-full max-w-75 px-7 py-6 text-center bg-neutral-white rounded-lg shadow-[0_2px_4px_rgb(171_190_209/0.2)]"
						>
							<div className="flex flex-col items-center gap-4">
								<img
									src={card.icon}
									alt=""
									loading="lazy"
									className="w-16.25 h-14"
								/>
								<h3 className="text-headline-3 text-neutral-dark-grey">
									{card.title}
								</h3>
							</div>
							<p className="text-body-3 text-neutral-grey">{card.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
