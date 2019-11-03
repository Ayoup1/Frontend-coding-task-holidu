import React from "react";
import "./styles.scss";
import StarIcon from "mdi-react/StarIcon";
export default ({ rating = 0 }) => {
	const max = 5;
	const positiveRating = Math.floor(rating);
	return (
		<div className="star-rating" data-rating={`${rating}`}>
			{[...Array(max)].map((x, i) => (
				<StarIcon
					icon="star"
					color={i < positiveRating ? "#febe42" : "#eee"}
					key={i}
				/>
			))}
		</div>
	);
};
