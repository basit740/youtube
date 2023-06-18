export const validateDay = (input) => {
	if (input < 1 || input > 31) {
		return false;
	}

	return true;
};

export const validateMonth = (input) => {
	if (input < 1 || input > 12) {
		return false;
	}

	return true;
};

export const validateYear = (input) => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	if (input < 1950 || input > year) {
		return false;
	}

	return true;
};
