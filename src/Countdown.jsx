import { useState, useEffect } from 'react';
import { useStore } from './store';

function Countdown() {
	const ONE_SECOND = 1;
	const START_SECONDS = 3;
	const SECONDS_PER_MINUTE = 60;
	const setInLoadingPage = useStore((state) => state.setInLoadingPage);
	const [count, setCount] = useState(START_SECONDS);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			if (count === 0) {
				setInLoadingPage(false);
				clearInterval(countdownInterval);
			} else setCount((prevCount) => prevCount - ONE_SECOND);
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, [count, setInLoadingPage]);

	const minutes = Math.floor(count / SECONDS_PER_MINUTE);
	const seconds = count % SECONDS_PER_MINUTE;

	return (
		<h1>{`${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`}</h1>
	);
}

export { Countdown };
