import { useState, useEffect } from "react";
export const useDebounce = (currentValue, delay) => {
	const [debounceValue, setDebounceValue] = useState(currentValue);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(currentValue);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [currentValue]);
	
	return [debounceValue];
};
