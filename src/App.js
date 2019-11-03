import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
import { formatProperties } from "./utils";
//
import Header from "./components/Header";
import List from "./components/List";

function App() {
	const [text, setText] = useState("Mallorca, Spanien");
	const { apartments, totalCount, pageSize, loading, error } = useSelector(
		state => ({
			...state
		})
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.searchPropertiesData({ text }));
	}, []);

	const handleInput = event => {
		setText(event.target.value);
	};
	const handleButton = () => {
		dispatch(actions.searchPropertiesData({ text }));
	};

	let properties = formatProperties(apartments);
	return (
		<div className="App">
			<Header
				handleInput={handleInput}
				text={text}
				count={totalCount}
				size={pageSize}
				handleButton={handleButton}
			/>
			<section className="offers">
				<div className="container">
					<List items={properties} loading={loading} error={error} />
				</div>
			</section>
		</div>
	);
}

export default connect()(App);
