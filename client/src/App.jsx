import { useEffect, useState } from 'react';
import { axiosClient } from './lib/axios';
import ToDoInput from './components/ToDos/ToDoInput/ToDoInput';
import ToDoList from './components/ToDos/ToDoList/ToDoList';

import styles from './App.module.css';
const { 'todos-form': toDosForm, todos: toDosClass } = styles;

export default function App() {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		async function getToDos() {
			try {
				const resp = await axiosClient.get('');
				setToDos(resp.data.toDos);
			} catch (error) {
				console.log(error);
			}
		}

		getToDos();
	}, []);

	const handleAddToDo = (toDoData) => {
		let newToDo = {
			title: toDoData.title,
			description: toDoData.description,
		};

		setToDos((prevToDos) => {
			const updatedToDos = [...prevToDos, newToDo];
			return updatedToDos;
		});

		axiosClient
			.post('', newToDo)
			.then((resp) => {
				setToDos([resp.data, ...toDos]);
			})
			.catch((err) => console.log(err));
	};

	const handleDeleteToDo = (id) => {
		setToDos((prevToDos) => {
			const updatedToDos = prevToDos.filter((toDo) => toDo.id !== id);
			return updatedToDos;
		});

		axiosClient.delete(`/delete/${id}`);
	};

	let content = <p>All done! 🥳</p>;
	if (toDos.length > 0) {
		content = <ToDoList items={toDos} onDeleteItem={handleDeleteToDo} />;
	}

	return (
		<>
			<header>
				<h1>ToDo List App</h1>
			</header>
			<main>
				<section className={toDosForm}>
					<ToDoInput onAddToDo={handleAddToDo} />
				</section>
				<section className={toDosClass}>{content}</section>
			</main>
		</>
	);
}
