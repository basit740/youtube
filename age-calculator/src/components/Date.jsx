import React, { useState } from 'react';
import './Date.css';

import { validateDay, validateMonth, validateYear } from '../utils/validate.js';
import IconSubmit from './icons/Submit.jsx';

// function
import { calculateAge } from '../utils/calculateAge';
const Date = ({ onAge }) => {
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');

	const [dayError, setDayError] = useState(false);
	const [monthError, setMonthError] = useState(false);
	const [yearError, setYearError] = useState(false);

	const handleDay = (e) => {
		const value = e.target.value;
		setDay(value.replace(/[^0-9]/g, ''));

		if (value.toString().length > 1 && !validateDay(parseInt(e.target.value))) {
			setDayError(true);
		} else {
			setDayError(false);
		}
	};

	const handleMonth = (e) => {
		const value = e.target.value;

		setMonth(value.replace(/[^0-9]/g, ''));

		if (
			value.toString().length > 1 &&
			!validateMonth(parseInt(e.target.value))
		) {
			setMonthError(true);
		} else {
			setMonthError(false);
		}
	};
	const handleYear = (e) => {
		const value = e.target.value;

		setYear(value.replace(/[^0-9]/g, ''));

		if (
			value.toString().length > 3 &&
			!validateYear(parseInt(e.target.value))
		) {
			setYearError(true);
		} else {
			setYearError(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (day === '' || month === '' || year === '') {
			if (day === '') {
				setDayError(true);
			}
			if (month === '') {
				setMonthError(true);
			}
			if (year === '') {
				setYearError(true);
			}
			return;
		}

		onAge(calculateAge(day, month, year));
	};
	return (
		<div className='date'>
			<form action='/' className='date__form' onSubmit={handleSubmit}>
				<div className='date__controlls'>
					<div className='date__control'>
						<label htmlFor='day' className='date__control-label'>
							Day
						</label>
						<input
							value={day}
							type='text'
							id='day'
							className={`date__input date__input--day ${
								dayError ? 'error' : ''
							}`}
							maxLength='2'
							onChange={handleDay}
							placeholder='DD'
						/>
						<span className='error-message date__day-error'>
							Must be a valid day
						</span>
					</div>

					<div className='date__control'>
						<label htmlFor='month' className='date__control-label'>
							Month
						</label>
						<input
							value={month}
							type='text'
							id='month'
							className={`date__input date__input--month ${
								monthError ? 'error' : ''
							}`}
							maxLength='2'
							onChange={handleMonth}
							placeholder='MM'
						/>
						<span className='error-message date__month-error'>
							Must be a valid month
						</span>
					</div>

					<div className='date__control'>
						<label htmlFor='year' className='date__control-label'>
							Year
						</label>
						<input
							value={year}
							type='text'
							id='year'
							className={`date__input date__input--year ${
								yearError ? 'error' : ''
							}`}
							maxLength='4'
							onChange={handleYear}
							placeholder='YYYY'
						/>
						<span className='error-message date__year-error'>
							Must be in the past
						</span>
					</div>
				</div>
				<div className='date__actions'>
					<hr className='line' />
					<button type='submit'>
						<IconSubmit />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Date;
