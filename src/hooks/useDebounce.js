import { useEffect, useState } from "react";

const useDebounce = (action, delay) => {
	const [inputChangeTracker, setInputChangeTracker] = useState(0);

	useEffect(() => {
		//using debounce to update firestore collection
		let timeout = setTimeout(action, delay);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line
	}, [inputChangeTracker]);

	const update = () => {
		setInputChangeTracker(prevState => prevState + 1);
	};

	return update;
};

export default useDebounce;
