import usersIcon from "../assets/images/achievements/users.svg";
import handshakeIcon from "../assets/images/achievements/handshake.svg";
import handTapIcon from "../assets/images/achievements/hand-tap.svg";
import creditCardIcon from "../assets/images/achievements/credit-card.svg";

import { CountUp } from "../components/count-up";
import { useInView } from "../components/functions";

const achievements = [
	{ icon: usersIcon, number: 2245341, label: "Members" },
	{ icon: handshakeIcon, number: 46328, label: "Clubs" },
	{ icon: handTapIcon, number: 828867, label: "Event Bookings" },
	{ icon: creditCardIcon, number: 1926436, label: "Payments" },
];

type Achievement = (typeof achievements)[number];

function AchievementItem({ icon, number, label }: Achievement) {
	const [itemRef, isInView] = useInView<HTMLLIElement>({ threshold: 0.5 });

	return (
		<li ref={itemRef} className="flex items-center gap-4">
			<img src={icon} alt="" loading="lazy" className="size-12 object-contain shrink-0" />
			<div className="flex flex-col">
				<CountUp
					end={number}
					start={isInView}
					duration={1000}
					className="text-headline-3 text-neutral-dark-grey"
				/>
				<span className="text-body-2 text-neutral-grey">{label}</span>
			</div>
		</li>
	);
}

export function Achievements() {
	return (
		<section className="my-12 py-16 bg-neutral-silver">
			<div className="container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-7.5">
				<div className="flex flex-col gap-2 lg:max-w-135">
					<h2 className="max-w-102 text-headline-2 text-neutral-dark-grey">
						Helping a local{" "}
						<span className="text-brand-primary">business reinvent itself</span>
					</h2>
					<p className="text-body-2 text-neutral-darkest">
						We reached here with our hard work and dedication
					</p>
				</div>
				<ul className="grid gap-x-7.5 gap-y-10 sm:grid-cols-2 lg:w-135 lg:shrink-0">
					{achievements.map((item) => (
						<AchievementItem key={item.label} {...item} />
					))}
				</ul>
			</div>
		</section>
	);
}
