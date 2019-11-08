import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";

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
		// InitSearch - text: "Mallorca, Spanien"
		dispatch(actions.searchPropertiesData({ text: "Mallorca, Spanien" }));
	}, [dispatch]);

	const handleInput = event => {
		setText(event.target.value);
	};
	const handleButton = () => {
		dispatch(actions.searchPropertiesData({ text }));
	};

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
					<List items={apartments} loading={loading} error={error} />
				</div>
			</section>
		</div>
	);
}

export default connect()(App);
