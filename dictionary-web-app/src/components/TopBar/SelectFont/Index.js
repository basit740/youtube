import React from 'react';
import './SelectFont.css'; // Import the CSS file

const Index = () => {
	const handleFont = (e) => {
		console.log(e.target.value);
		document.querySelector('body').style.fontFamily = e.target.value;
	};
	return (
		<div className='select-wrapper'>
			<select className='select-font' onChange={handleFont}>
				<option value='sans-serif'>Sans Serif</option>
				<option value='serif'>Serif</option>
				<option value='Times New Roman'>Times New Roman</option>
				Add more options
			</select>
			<span className='select-arrow'></span>
		</div>
	);
};

export default Index;
