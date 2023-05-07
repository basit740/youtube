/* eslint-disable */

import React from 'react';

import NewWindow from './icons/NewWindow';

import './Footer.css';

const Index = () => {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<div className='footer__source'>
					<label htmlFor='source' className='footer__source-title'>
						Source
					</label>

					<a
						href='https://en.wikitionary.org/wiki/keybaord'
						className='footer__source-link'
						target='_blank'
					>
						https://en.wikitionary.org/wiki/keybaord
						<NewWindow />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Index;
