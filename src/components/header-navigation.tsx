import { useState, useEffect, useRef } from "react";

import { responsive } from "./constants";
import { BaseButton } from "./button-base";

interface HeaderNavigationLinkProps {
	text: string;
	href?: string;
}

interface HeaderNavigationProps {
	links: HeaderNavigationLinkProps[];
	isOpenMobileMenu?: boolean;
}

export function HeaderNavigation({ links, isOpenMobileMenu }: HeaderNavigationProps) {
	const [isMobile, setIsMobile] = useState(false);
	const [isAnimationDone, setIsAnimationDone] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${responsive.lg - 1}px)`);
		function handleMediaQuery(e: MediaQueryListEvent | MediaQueryList) {
			setIsMobile(e.matches);
		}

		handleMediaQuery(mediaQuery);
		mediaQuery.addEventListener("change", handleMediaQuery);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQuery);
		};
	}, []);

	useEffect(() => {
		const nav = navRef.current;

		if (!nav) return;

		function handleTransitionEnd() {
			if (isOpenMobileMenu) {
				setIsAnimationDone(true);
			}
		}

		if (!isOpenMobileMenu) {
			setIsAnimationDone(false);
		}

		nav.addEventListener("transitionend", handleTransitionEnd);

		return () => nav.removeEventListener("transitionend", handleTransitionEnd);
	}, [isOpenMobileMenu]);

	const menuClassNames = {
		mobile: "absolute top-full inset-x-0 z-10 bg-white transition-[height] duration-500",
		opened: "h-[calc(100svh-var(--header-h,68px))]",
		closed: "h-0",
		scrollable: "overflow-y-auto overflow-x-clip",
		disableScroll: "overflow-clip",
	};
	const menuListClassNames = {
		mobile: "flex-col gap-y-2 mx-auto w-full max-w-160 my-5 md:max-w-3xl",
	};
	const menuButtonsClassNames = {
		mobile: "mx-auto w-full mt-10 mb-5 max-w-160 md:max-w-3xl",
	};

	return (
		<nav
			ref={navRef}
			className={[
				"lg:flex lg:gap-2.5 lg:items-center lg:grow",
				isMobile ? menuClassNames.mobile : "",
				isOpenMobileMenu && isMobile ? menuClassNames.opened : "",
				!isOpenMobileMenu && isMobile ? menuClassNames.closed : "",
				isMobile && isAnimationDone ? menuClassNames.scrollable : "",
				isMobile && !isAnimationDone ? menuClassNames.disableScroll : "",
			].join(" ")}
		>
			<ul
				className={`flex text-body-2 px-3 lg:px-0 lg:flex-wrap lg:justify-center lg:gap-x-12.5 lg:grow ${isMobile ? menuListClassNames.mobile : ""}`}
			>
				{links.map((l) => {
					return (
						<li key={l.href ?? l.text}>
							<a
								href={l.href ?? "#"}
								className="hover:text-brand-primary transition-colors duration-300"
							>
								{l.text}
							</a>
						</li>
					);
				})}
			</ul>
			<div
				className={`flex flex-wrap gap-x-3.5 px-3 lg:px-0 lg:me-3.75 ${isMobile ? menuButtonsClassNames.mobile : ""}`}
			>
				<BaseButton type="button" btnSize="small" variant="tertiary">
					Login
				</BaseButton>
				<BaseButton type="button" btnSize="small">
					Sign up
				</BaseButton>
			</div>
		</nav>
	);
}
