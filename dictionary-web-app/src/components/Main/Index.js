import React from 'react';

import Pronounce from '../Pronounce/Index';
import PartOfSpeech from '../PartOfSpeech/Index';
import PartsOfSpeech from '../PartsOfSpeech/Index';
import Footer from '../Footer/Index';
import Searching from '../Searching/Index';
import NotFound from '../NotFound/Index';

import { groupedMeanings } from '../../utils/groupMeanings';
const Index = ({ searching, idle, notFound, content }) => {
	if (idle) {
		return <main className='main'></main>;
	}
	if (notFound) {
		return (
			<main className='main'>
				<NotFound />
			</main>
		);
	}
	if (searching) {
		return (
			<main className='main'>
				<Searching />
				{/* <NotFound /> */}
			</main>
		);
	} else if (!searching && content) {
		return (
			<main className='main'>
				<Pronounce
					phonetics={content.phonetics}
					word={content.word}
					phonetic={content.phonetic}
				/>
				<PartsOfSpeech meanings={groupedMeanings(content.meanings)} />
				<Footer />
			</main>
		);
	} else {
		return <main className='main'></main>;
	}
};

export default Index;
