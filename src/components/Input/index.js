import React from "react";
import "./styles.scss";
export default function Input(props) {
	return (
		<input
			name={props.name}
			type={props.type}
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
			{...props}
		/>
	);
}
