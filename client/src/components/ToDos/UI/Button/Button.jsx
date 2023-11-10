import styles from './Button.module.css';
const { button } = styles;

export default function Button({ children, type, onClick }) {
	return (
		<button type={type} className={button} onClick={onClick}>
			{children}
		</button>
	);
}
