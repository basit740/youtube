import React from 'react';

import sad from '../../assets/images/sad.svg';

import './NotFound.css';
const Index = () => {
	return (
		<div className='not-found'>
			<img src={sad} alt='sad' className='not-found__emogi' />
			<h2 className='not-found__title'>No Definitions Found</h2>
			<p className='not-found__description'>
				Sorry pal, we could'nt find definitions for the word you were looking
				for. You can try the search again at later time or head to web instead.
			</p>
		</div>
	);
};

export default Index;
