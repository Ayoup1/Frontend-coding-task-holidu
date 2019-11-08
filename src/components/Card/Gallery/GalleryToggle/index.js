import React from "react";

import Right from "mdi-react/ChevronRightIcon";
import Left from "mdi-react/ChevronLeftIcon";
import "./styles.scss";
function GalleryToggle(props) {
	let { icon, action, left, right } = props;

	let style = {};
	if (left) {
		style.left = 0;
		style.borderRadius = "0.25rem 0 0 0";
	}

	if (right) {
		style.right = 0;
		style.borderRadius = "0 0.25rem 0 0";
	}

	return (
		<div className={`gallery-toggle`} style={style} onClick={action}>
			{icon === "Right" ? <Right /> : <Left />}
		</div>
	);
}

export default GalleryToggle;
