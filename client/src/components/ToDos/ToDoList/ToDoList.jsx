/* eslint-disable react/prop-types */
import ToDoItem from '../ToDoItem/ToDoItem';
import { FaTrashAlt } from 'react-icons/fa';

import styles from './ToDoList.module.css';
const { 'todo-list': todoListClass } = styles;

export default function ToDoList({ items, onDeleteItem }) {
	return (
		<ul className={todoListClass}>
			{items.map((item) => (
				<ToDoItem key={item.id} id={item.id} onDelete={onDeleteItem}>
					<span>{item.title}: </span>
					{item.description}
					<span>
						<FaTrashAlt />
					</span>
				</ToDoItem>
			))}
		</ul>
	);
}
