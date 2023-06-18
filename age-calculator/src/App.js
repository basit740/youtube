import { useState, useEffect } from 'react';

import Date from './components/Date';
import OutPut from './components/Output';

import ThemeHandler from './components/ThemeHandler/ThemeHandler';

function App() {
	const [age, setAge] = useState({});
	const handleAge = (calculatedAge) => {
		console.log(calculatedAge);
		setAge(calculatedAge);
	};

	useEffect(() => {
		console.log(localStorage.getItem('mode'));
		if (localStorage.getItem('mode') === 'dark') {
			document.querySelector('body').classList.add('dark');
		} else {
			document.querySelector('body').classList.remove('dark');
		}
	}, []);
	return (
		<div className='app'>
			<ThemeHandler />
			<div className='app__content'>
				<Date onAge={handleAge} />
				<OutPut age={age} />
			</div>
		</div>
	);
}

export default App;
