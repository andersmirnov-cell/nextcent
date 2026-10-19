import { MainLogo } from "../components/logo-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDribbble, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socials = [
	{ name: "Instagram", type: faInstagram, href: "#" },
	{ name: "Dribbble", type: faDribbble, href: "#" },
	{ name: "Twitter", type: faTwitter, href: "#" },
	{ name: "YouTube", type: faYoutube, href: "#" },
];

const menuLinks1 = [
	{ text: "About us", href: "#" },
	{ text: "Blog", href: "#" },
	{ text: "Contact us", href: "#" },
	{ text: "Pricing", href: "#" },
	{ text: "Testimonials", href: "#" },
];

export function Footer() {
	return (
		<footer className="bg-neutral-black text-neutral-silver text-body-3 py-8 lg:py-16">
			<div className="container lg:max-w-283.5">
				<div className="space-y-10">
					<MainLogo
						iconColorOutline="fill-neutral-white"
						textColor="fill-neutral-white"
						iconSize="w-10.75"
						textSize="w-34.5"
						gapSize="gap-x-2.5"
					/>
					<div className="space-y-2">
						<p>Copyright &copy; 2020 Nexcent ltd.</p>
						<p>All rights reserved</p>
					</div>
					<ul className="flex flex-wrap gap-4 text-body-1">
						{socials.map((icon) => {
							return (
								<li key={icon.name}>
									<a
										href={icon.href}
										className="flex items-center justify-center size-8 rounded-full bg-neutral-white/10 lg:hover:bg-neutral-white/20 lg:transition-colors lg:duration-200"
									>
										<FontAwesomeIcon icon={icon.type} />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="">
					<div className="">
						<h3>Company</h3>
						<ul className="text-body-3 space-y-3">
							{menuLinks1.map((link) => {
								return (
									<li>
										<a href={link.href}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
