/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../UI/Button/Button';

import styles from './ToDoInput.module.css';
const { 'form-control': formControl, invalid } = styles;

export default function ToDoInput({ onAddToDo }) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredDescription, setEnteredDescription] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleToDoInputTitleChange = ({ target: { value } }) => {
		if (value.trim().length > 0) {
			setIsValid(true);
		}

		setEnteredTitle(value);
	};

	const handleToDoInputDescriptionChange = ({ target: { value } }) => {
		if (value.trim().length > 0) {
			setIsValid(true);
		}

		setEnteredDescription(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (enteredTitle.trim().length === 0) {
			setIsValid(false);
			return;
		}

		if (enteredDescription.trim().length === 0) {
			setIsValid(false);
			return;
		}

		let toDoData = {
			title: enteredTitle,
			description: enteredDescription,
		};

		onAddToDo(toDoData);
		e.target.reset();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={`${formControl} ${!isValid ? invalid : ''}`}>
				<label htmlFor='toDoInput'>Title 📝</label>
				<input
					type='text'
					id='toDoInputTitle'
					onChange={handleToDoInputTitleChange}
				/>
				<label htmlFor='toDoInput'>Description 📝</label>
				<input
					type='text'
					id='toDoInputDescription'
					onChange={handleToDoInputDescriptionChange}
				/>
			</div>
			<Button type='submit'>Add ToDo</Button>
		</form>
	);
}
