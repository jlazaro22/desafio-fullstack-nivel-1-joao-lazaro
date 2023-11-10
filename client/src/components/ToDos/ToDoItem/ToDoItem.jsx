/* eslint-disable react/prop-types */
import styles from './ToDoItem.module.css';
const { 'goal-item': goalItem } = styles;

export default function ToDoItem({ id, children, onDelete }) {
	const deleteHandler = () => {
		onDelete(id);
	};

	return (
		<li className={goalItem} onClick={deleteHandler}>
			{children}
		</li>
	);
}
