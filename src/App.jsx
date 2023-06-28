import { useStore } from './store';
import { Countdown } from './Countdown';

function App() {
	const inLoadingPage = useStore((state) => state.inLoadingPage);

	return (
		<>
			{inLoadingPage ? (
				<div>
					This meeting will open in: <Countdown />
				</div>
			) : (
				<>Hey</>
			)}
		</>
	);
}

export default App;
