import { useEffect } from "react";

import { useToggle } from "../components/functions";
import { responsive } from "../components/constants";

import { HeaderNavigation } from "../components/neader-menu";
import { ButtonIcon } from "../components/button-icon";
import { MainLogo } from "../components/logo-main";

export function Header() {
	const headerNav = [
		{
			text: "Home",
		},
		{
			text: "Service",
		},
		{
			text: "Feature",
		},
		{
			text: "Product",
		},
		{
			text: "Testimonial",
		},
		{
			text: "FAQ",
		},
	];
	const [isMenuOpen, toggleMenu] = useToggle(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${responsive.lg - 1}px)`);

		function handleMediaQuery(e: MediaQueryListEvent | MediaQueryList) {
			if (!e.matches && isMenuOpen) {
				toggleMenu();
			}
		}

		handleMediaQuery(mediaQuery);
		mediaQuery.addEventListener("change", handleMediaQuery);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQuery);
		};
	}, [isMenuOpen]);

	return (
		<header className="w-full sticky top-0 inset-x-0 z-50 bg-white">
			<div className="container flex flex-wrap items-center gap-x-2.5 h-(--header-h) py-1 lg:py-5.5 2xl:max-w-313.5 lg:h-auto">
				<a href="/" className="leading-0 me-auto lg:me-10">
					<MainLogo />
				</a>
				<HeaderNavigation links={headerNav} isOpenMobileMenu={isMenuOpen} />
				<ButtonIcon
					iconType="mobile-menu"
					type="button"
					size="small"
					isOpen={isMenuOpen}
					onClick={toggleMenu}
					className="lg:hidden"
				/>
			</div>
		</header>
	);
}
