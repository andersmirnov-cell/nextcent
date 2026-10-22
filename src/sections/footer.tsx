import { MainLogo } from "../components/logo-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDribbble, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SubscribeForm } from "../components/subscribe-form";

const socials = [
	{ name: "Instagram", type: faInstagram, href: "#" },
	{ name: "Dribbble", type: faDribbble, href: "#" },
	{ name: "Twitter", type: faTwitter, href: "#" },
	{ name: "YouTube", type: faYoutube, href: "#" },
];

const menuColumns = [
	{
		title: "Company",
		links: [
			{ text: "About us", href: "#" },
			{ text: "Blog", href: "#" },
			{ text: "Contact us", href: "#" },
			{ text: "Pricing", href: "#" },
			{ text: "Testimonials", href: "#" },
		],
	},
	{
		title: "Support",
		links: [
			{ text: "Help center", href: "#" },
			{ text: "Terms of service", href: "#" },
			{ text: "Legal", href: "#" },
			{ text: "Privacy policy", href: "#" },
			{ text: "Status", href: "#" },
		],
	},
];

export function Footer() {
	return (
		<footer className="bg-neutral-black text-neutral-silver text-body-3 py-8 lg:py-16">
			<div className="container space-y-10 lg:max-w-283.5 lg:space-y-0 lg:grid lg:grid-cols-[39%_minmax(0,1fr)] lg:gap-10">
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
										aria-label={icon.name}
										className="flex items-center justify-center size-8 rounded-full bg-neutral-white/10 lg:hover:bg-neutral-white/20 lg:transition-colors lg:duration-200"
									>
										<FontAwesomeIcon icon={icon.type} />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-[27%_27%_minmax(0,1fr)] lg:gap-5">
					{menuColumns.map((elem) => {
						return (
							<div key={elem.title} className="space-y-6">
								<h3 className="text-neutral-white text-headline-4">{elem.title}</h3>
								<ul className="text-body-3 space-y-3">
									{elem.links.map((link) => {
										return (
											<li key={link.text}>
												<a href={link.href} className="lg:hover:underline">
													{link.text}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
					<div className="space-y-6">
						<SubscribeForm />
					</div>
				</div>
			</div>
		</footer>
	);
}
