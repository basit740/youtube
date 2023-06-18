// export const calculateAge = (day, month, year) => {};

// YYYY-MM-DD
export const calculateAge = (day, month, year) => {
	if (day.toString().length === 1) {
		day = '0' + day;
	}

	if (month.toString().lenghth === 1) {
		month = '0' + month;
	}
	// let dateOfBith = 'YYYY-MM-DD';

	let dateOfBirth = `${year}-${month}-${day}`;

	var today = new Date();
	var birthDate = new Date(dateOfBirth);

	var years = today.getFullYear() - birthDate.getFullYear();
	var months = today.getMonth() - birthDate.getMonth();
	var days = today.getDate() - birthDate.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
		months += 12;
	}

	if (days < 0) {
		var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
		days += prevMonth.getDate();
		months--;
	}

	return {
		years: years,
		months: months,
		days: days,
	};
};

// Example usage:
// var dateOfBirth = '1990-05-15'; // Replace with the actual date of birth
// var age = calculateAge(dateOfBirth);
// console.log(age);
