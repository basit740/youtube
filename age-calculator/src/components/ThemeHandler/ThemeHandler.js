import React, { useState, useEffect } from 'react';
import './ThemeHandler.css';
import IconMoon from './Icons/IconMoon';
import Switch from './Switch/Index';
const Index = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		if (dark) {
			document.querySelector('body').classList.add('dark');
		} else {
			document.querySelector('body').classList.remove('dark');
		}
	}, [dark]);
	return (
		<div className='theme-handler'>
			<input
				type='checkbox'
				value='dark'
				className='theme-handler__checkbox'
				id='theme'
				onChange={(e) => {
					setDark(e.target.checked);
				}}
			/>
			<label htmlFor='theme' className='theme-handler__label'>
				<Switch dark={dark} />
				<IconMoon dark={dark} />
			</label>
		</div>
	);
};

export default Index;
