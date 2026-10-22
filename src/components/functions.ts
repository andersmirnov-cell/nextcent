import { useEffect, useRef, useState } from "react";

export function useToggle(initial = false) {
	const [value, setValue] = useState(initial);
	function toggle() {
		setValue((prev) => !prev);
	}
	return [value, toggle] as const;
}

export function useScrolled(offset = 0) {
	const [isScrolled, setIsScrolled] = useState(false);
	const scrolledRef = useRef(false);

	useEffect(() => {
		function handleScroll() {
			const next = window.scrollY > offset;
			if (next === scrolledRef.current) return;
			scrolledRef.current = next;
			setIsScrolled(next);
		}

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [offset]);

	return isScrolled;
}

export function useInView<T extends Element>(options: IntersectionObserverInit = {}) {
	const ref = useRef<T>(null);
	const [isInView, setIsInView] = useState(false);
	const { root, rootMargin, threshold } = options;

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Fires once: stop observing after the element first appears
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{ root, rootMargin, threshold },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [root, rootMargin, threshold]);

	return [ref, isInView] as const;
}
