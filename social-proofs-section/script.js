// Function to apply the selected theme
function applyTheme(theme) {
	const root = document.documentElement;
	if (theme === 'default') {
		root.style.setProperty('--primary', '#9b59b6');
		root.style.setProperty('--secondary', '#8e44ad');
		root.style.setProperty('--light', '#f2e5ff');
		root.style.setProperty('--accent', '#b870e3');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'blue') {
		root.style.setProperty('--primary', '#3498db');
		root.style.setProperty('--secondary', '#2980b9');
		root.style.setProperty('--light', '#e6f2ff');
		root.style.setProperty('--accent', '#48a4f3');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'red') {
		root.style.setProperty('--primary', '#e74c3c');
		root.style.setProperty('--secondary', '#c0392b');
		root.style.setProperty('--light', '#ffe5e0');
		root.style.setProperty('--accent', '#ff635e');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'orange') {
		root.style.setProperty('--primary', '#e67e22');
		root.style.setProperty('--secondary', '#d35400');
		root.style.setProperty('--light', '#fff2e6');
		root.style.setProperty('--accent', '#ffa64d');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'pink') {
		root.style.setProperty('--primary', '#e91e63');
		root.style.setProperty('--secondary', '#d81b60');
		root.style.setProperty('--light', '#ffe5ec');
		root.style.setProperty('--accent', '#f06292');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'yellow') {
		root.style.setProperty('--primary', '#f1c40f');
		root.style.setProperty('--secondary', '#f39c12');
		root.style.setProperty('--light', '#fff9e6');
		root.style.setProperty('--accent', '#ffd700');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'cyan') {
		root.style.setProperty('--primary', '#00bcd4');
		root.style.setProperty('--secondary', '#0097a7');
		root.style.setProperty('--light', '#e0f7fa');
		root.style.setProperty('--accent', '#4dd0e1');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'grey') {
		root.style.setProperty('--primary', '#95a5a6');
		root.style.setProperty('--secondary', '#7f8c8d');
		root.style.setProperty('--light', '#f5f5f5');
		root.style.setProperty('--accent', '#bdc3c7');
		root.style.setProperty('--text-white', '#fff');
		// Set other theme variables accordingly
	} else if (theme === 'green') {
		root.style.setProperty('--primary', '#00b894');
		root.style.setProperty('--secondary', '#00b893b6');
		root.style.setProperty('--light', '#e8f8f5');
		root.style.setProperty('--accent', '#55efc4');
		root.style.setProperty('--text-white', '#fff');
	}
	// Continue setting other theme options for each theme value

	// Night Mode Theme
	else if (theme === 'night') {
		// Set other theme variables accordingly
		document.body.style.backgroundColor = '#222';
	}
}

// Get the dropdown element
const themeSelector = document.getElementById('theme-selector');
const dayNightButton = document.getElementById('day-night-button');

// Event listener to handle theme change when the user selects a different option
themeSelector.addEventListener('change', function () {
	const selectedTheme = themeSelector.value;
	applyTheme(selectedTheme);
});

dayNightButton.addEventListener('click', function (e) {
	if (e.target.textContent == 'Day') {
		document.body.style.backgroundColor = '#222';
		// e.target.value = 'Night';
		e.target.textContent = 'Night';
		e.target.style.color = '#fff';
	} else {
		document.body.style.backgroundColor = '#fff';
		// e.target.value = 'Night';
		e.target.textContent = 'Day';
		e.target.style.color = '#000';
	}
});
