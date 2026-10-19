import { Marquee } from "../components/marquee";

import client1 from "../assets/images/clients/client-1.svg";
import client2 from "../assets/images/clients/client-2.svg";
import client3 from "../assets/images/clients/client-3.svg";
import client4 from "../assets/images/clients/client-4.svg";
import client5 from "../assets/images/clients/client-5.svg";
import client6 from "../assets/images/clients/client-6.svg";

const clientLogos = [
	{ src: client1, alt: "Client 1" },
	{ src: client2, alt: "Client 2" },
	{ src: client3, alt: "Client 3" },
	{ src: client4, alt: "Client 4" },
	{ src: client5, alt: "Client 5" },
	{ src: client6, alt: "Client 6" },
	{ src: client3, alt: "Client 7" },
];

export function Clients() {
	return (
		<section className="flex flex-col items-center gap-4 my-10">
			<div className="container flex flex-col items-center gap-2 text-center">
				<h2 className="text-headline-2 text-neutral-dark-grey">Our Clients</h2>
				<p className="text-body-2 text-neutral-grey">
					We have been working with some Fortune 500+ clients
				</p>
			</div>
			<Marquee
				speed={60}
				className="w-full py-6"
				groupClassName="gap-17 pe-17 lg:gap-34 lg:pe-34"
			>
				{clientLogos.map((logo, index) => (
					<li key={index} className="flex items-center justify-center h-12">
						<img
							src={logo.src}
							alt={logo.alt}
							loading="lazy"
							className="w-auto h-auto max-w-14 max-h-10"
						/>
					</li>
				))}
			</Marquee>
		</section>
	);
}
