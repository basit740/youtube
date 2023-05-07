import React from 'react';
import './TopBar.css';

import Logo from '../../assets/images/logo.svg';

import SelectFont from './SelectFont/Index';
import ThemeHandler from './ThemeHandler/Index';
const Index = () => {
	return (
		<div className='topbar'>
			<div className='topbar__content'>
				<div className='brand'>
					<img src={Logo} alt='logo' />
				</div>
				<div className='topbar__actions'>
					<SelectFont />
					<ThemeHandler />
				</div>
			</div>
		</div>
	);
};

export default Index;
