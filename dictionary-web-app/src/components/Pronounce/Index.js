import React from 'react';
import PlayButton from './PlayButton';
import './Pronounce.css';
let audio = null;
const Index = ({ phonetics, word, phonetic }) => {
	const pronounce = () => {
		let foundPhonetic = null;
		foundPhonetic = phonetics.find((phonetic) =>
			phonetic.audio && phonetic.text ? phonetic : null
		);

		if (audio !== null) {
			// Pause the current audio playback and reset the currentTime property
			audio.pause();
			audio.currentTime = 0;
		}

		// Create and play the new audio
		audio = new Audio(foundPhonetic.audio);
		audio.play();
	};
	return (
		<div className='pronounce'>
			<div className='pronounce__text-box'>
				<h1 className='pronounce__title'>{word}</h1>
				{phonetic && <span className='pronounce__text'>{phonetic}</span>}
			</div>
			<div className='prounounce__audio-box'>
				{phonetics && phonetics.length > 0 && (
					<PlayButton onClick={pronounce} />
				)}
			</div>
		</div>
	);
};

export default Index;
