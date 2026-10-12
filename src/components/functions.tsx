import { useState } from "react";

export function useToggle(initial = false) {
	const [value, setValue] = useState(initial);
	function toggle() {
		setValue((prev) => !prev);
	}
	return [value, toggle] as const;
}
