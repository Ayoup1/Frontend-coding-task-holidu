import React from "react";
import "./styles.scss";

export default function Tag(props) {
	let { space } = props;
	return <div className={"tag"}>{space}</div>;
}
