import React from "react";
import "./styles.scss";
export default ({ url, onClick, disabled, className, children }) => {
	if (url) {
		return (
			<a href={url} onClick={onClick} className={`button  ${className} `}>
				{children}
			</a>
		);
	}
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`button  ${className} `}
		>
			{children}
		</button>
	);
};
