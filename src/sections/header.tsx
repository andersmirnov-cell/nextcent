import { useEffect, useState } from "react";

import { useScrolled } from "../components/functions";
import { responsive } from "../components/constants";

import { HeaderNavigation } from "../components/header-navigation";
import { ButtonIcon } from "../components/button-icon";
import { MainLogo } from "../components/logo-main";

export function Header() {
	const headerNav = [
		{
			text: "Home",
			isActive: true,
		},
		{
			text: "Service",
			isActive: false,
		},
		{
			text: "Feature",
			isActive: false,
		},
		{
			text: "Product",
			isActive: false,
		},
		{
			text: "Testimonial",
			isActive: false,
		},
		{
			text: "FAQ",
			isActive: false,
		},
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolled = useScrolled();

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${responsive.lg - 1}px)`);

		function handleMediaQuery(e: MediaQueryListEvent | MediaQueryList) {
			if (!e.matches && isMenuOpen) {
				setIsMenuOpen(false);
			}
		}

		handleMediaQuery(mediaQuery);
		mediaQuery.addEventListener("change", handleMediaQuery);

		document.body.classList.toggle("overflow-hidden", isMenuOpen);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQuery);
		};
	}, [isMenuOpen]);

	const headerBg = isScrolled || isMenuOpen ? "bg-neutral-white" : "bg-neutral-silver";

	return (
		<header
			className={`w-full sticky top-0 inset-x-0 z-50 transition-colors duration-300 ${headerBg}`}
		>
			<div className="container flex flex-wrap items-center gap-x-2.5 h-(--header-h) py-1 lg:py-5.5 2xl:max-w-313.5 lg:h-auto">
				<a href="/" className="leading-0 me-auto lg:me-10" aria-label="Nexcent home">
					<MainLogo />
				</a>
				<HeaderNavigation links={headerNav} isOpenMobileMenu={isMenuOpen} />
				<ButtonIcon
					iconType="mobile-menu"
					type="button"
					size="small"
					isOpen={isMenuOpen}
					onClick={() => {
						setIsMenuOpen((curVal) => !curVal);
					}}
					className="lg:hidden"
					aria-expanded={isMenuOpen}
				/>
			</div>
		</header>
	);
}
