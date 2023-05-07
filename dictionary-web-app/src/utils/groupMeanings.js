// Group data by partOfSpeech

export const groupedMeanings = (meanings) => {
	return meanings.reduce((acc, item) => {
		if (acc[item.partOfSpeech]) {
			acc[item.partOfSpeech] = {
				...acc[item.partOfSpeech],
				definitions: [
					...acc[item.partOfSpeech].definitions,
					...item.definitions,
				],
				synonyms: [...acc[item.partOfSpeech].synonyms, ...item.synonyms],
				antonyms: [...acc[item.partOfSpeech].antonyms, ...item.antonyms],
			};
		} else {
			acc[item.partOfSpeech] = item;
		}
		return acc;
	}, {});
};
