import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { isReducedMotion } from "../components/constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { BaseButton } from "../components/button-base";
import heroIllustration from "../assets/images/img-hero.png";

const heroSlides = [
	{
		title: "Lessons and insights",
		accent: "from 8 years",
		text: "Where to grow your business as a photographer: site or social media?",
		button: { text: "Register", href: "#" },
		image: heroIllustration,
		imageAlt:
			"Developer with a laptop giving a thumbs up next to a large monitor showing code, a flowchart and HTML, CSS and C++ tags",
	},
	{
		title: "Lessons and insights",
		accent: "from 8 years",
		text: "Where to grow your business as a photographer: site or social media?",
		button: { text: "Register", href: "#" },
		image: heroIllustration,
		imageAlt:
			"Developer with a laptop giving a thumbs up next to a large monitor showing code, a flowchart and HTML, CSS and C++ tags",
	},
	{
		title: "Lessons and insights",
		accent: "from 8 years",
		text: "Where to grow your business as a photographer: site or social media?",
		button: { text: "Register", href: "#" },
		image: heroIllustration,
		imageAlt:
			"Developer with a laptop giving a thumbs up next to a large monitor showing code, a flowchart and HTML, CSS and C++ tags",
	},
];

export function Hero() {
	const allowAutoplay = isReducedMotion ? false : { delay: 5000, pauseOnMouseEnter: true };

	return (
		<section className="bg-neutral-silver">
			<Swiper
				modules={[Pagination, Autoplay, EffectFade, A11y]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={600}
				slidesPerView={1}
				loop
				autoplay={allowAutoplay}
				pagination={{ clickable: true }}
				className="[--swiper-pagination-bottom:1rem] [--swiper-pagination-bullet-horizontal-gap:0.25rem] [--swiper-pagination-bullet-inactive-color:var(--color-brand-primary)] [--swiper-pagination-bullet-inactive-opacity:0.3] [--swiper-pagination-bullet-size:0.625rem] [--swiper-pagination-color:var(--color-brand-primary)]"
			>
				{heroSlides.map((slide, index) => {
					// Only the first slide gets the page's single <h1>
					const Heading = index === 0 ? "h1" : "h2";

					return (
						<SwiperSlide key={index}>
							<div className="container flex flex-col items-center gap-12 pt-12 pb-14 lg:flex-row lg:justify-between lg:gap-26 lg:pt-24 lg:pb-24">
								<div className="flex flex-col items-start gap-8">
									<div className="flex flex-col gap-4">
										<Heading className="text-headline-2 text-neutral-dark-grey lg:text-headline-1">
											{slide.title}{" "}
											<span className="text-brand-primary">
												{slide.accent}
											</span>
										</Heading>
										<p className="text-body-2 text-neutral-grey">
											{slide.text}
										</p>
									</div>
									<BaseButton href={slide.button.href}>
										{slide.button.text}
									</BaseButton>
								</div>
								<img
									className="w-full max-w-97.75 h-auto shrink-0"
									src={slide.image}
									alt={slide.imageAlt}
									loading={index === 0 ? "eager" : "lazy"}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}
