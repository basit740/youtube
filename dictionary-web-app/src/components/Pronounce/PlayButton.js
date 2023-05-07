import React from 'react';
import './PlayButton.css';
const PlayButton = ({ onClick }) => {
	return (
		<button className='play-button' onClick={onClick}>
			<span></span>
		</button>
	);
};

export default PlayButton;
