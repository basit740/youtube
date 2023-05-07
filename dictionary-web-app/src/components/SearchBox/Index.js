import React, { useState, useRef, useEffect } from 'react';

import './SearchBox.css';
const Index = ({ onSearch, onTyping }) => {
	const [submitted, setSubmitted] = useState(false);
	const [searchedWord, setSearchedWord] = useState('');

	const inputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		if (searchedWord === '') {
			setSubmitted(true);
			return;
		}

		onSearch(searchedWord);
	};

	const handleSearch = (value) => {
		setSearchedWord(value);
		onTyping(value);
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form
			className={`search-box ${submitted ? 'submitted' : ''}`}
			onSubmit={submitHandler}
		>
			<input
				ref={inputRef}
				placeholder='Search for any word'
				onChange={(e) => handleSearch(e.target.value)}
				type='text'
				className={`search-box__input ${!searchedWord ? 'invalid' : ''}`}
			/>
			<span className='error-message'>Whoops, can't be empty</span>
			<button type='sumit' className='btn-search'>
				0
			</button>
		</form>
	);
};

export default Index;
