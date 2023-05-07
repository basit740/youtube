import React from 'react';

import './PartOfSpeech.css';
const Index = ({ item }) => {
	return (
		<article className='part-of-speech'>
			<div className='part-of-speech__content'>
				<h3 className='part-of-speech__title'>
					<span>{item.title}</span> <span className='bar'></span>
				</h3>
				<div className='part-of-speech__meanings'>
					<h5 className='part-of-speech__meanings__title'>Meaning</h5>
					<ul className='part-of-speech__meaning-list'>
						{item.content.definitions.map((def, index) => {
							return (
								<li key={index}>
									{def.definition}

									{def.example ? (
										<span className='meaning__help'>"{def.example}"</span>
									) : (
										''
									)}
								</li>
							);
						})}
					</ul>
				</div>

				{item.content.synonyms.length > 0 && (
					<div className='part-of-speech__synonyms'>
						<h5 className='part-of-speech__synonyms__title'>Synonyms</h5>
						<div className='part-of-speech__synonyms-content'>
							{item.content.synonyms.join(', ')}
						</div>
					</div>
				)}
			</div>
		</article>
	);
};

export default Index;
