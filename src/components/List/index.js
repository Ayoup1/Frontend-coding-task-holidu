import React from "react";

import Card from "../Card";
import placeholder from "../../assets/img/placeholder.jpg";
export default function List({ items, loading }) {
	if (items.length === 0 && !loading) {
		return (
			<div className={"card-container"}>
				<div className="flex flex-column flex-center">
					<h1>Uh Oh!</h1>
					<h1>We could't find any Accommodations with your keyword </h1>
					<img className="placeholder" src={placeholder} alt="placeholder" />
				</div>
			</div>
		);
	}
	return (
		<div className={"card-container"}>
			{loading
				? [...Array(3)].map((item, i) => (
						<Card loading={loading} buttonText={"Book Now"} key={i} {...item} />
				  ))
				: items.map((item, i) => (
						<Card
							photos={item.photos}
							buttonText={"Book Now"}
							key={i}
							{...item}
						/>
				  ))}
		</div>
	);
}
