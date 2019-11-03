import React from "react";
import "./styles.scss";
export default props => {
	const { className, children, ...other } = props;
	return (
		<div className={`card  ${className} `} {...other}>
			{children}
		</div>
	);
};
