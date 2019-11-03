import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import Details from "./Details";
import Gallery from "./Gallery";
import CardAction from "./CardAction";
import Tag from "./Tag";

import "./styles.scss";

function CardContainer(props) {
	let {
		className,
		photos,
		price,
		title,
		description,
		location,
		space,
		buttonText,
		rating,
		url,
		currency,
		loading,
		...other
	} = props;

	return (
		<Card className={`property-card ${className ? className : ""}`} {...other}>
			<Gallery photos={photos} loading={loading} />

			<Tag space={space} />
			<Details
				title={title}
				description={description}
				location={location}
				price={price}
				currency={currency}
				loading={loading}
				url={url}
			/>
			<CardAction rating={rating} url={url} buttonText={buttonText} />
		</Card>
	);
}

CardContainer.propTypes = {
	photos: PropTypes.arrayOf(PropTypes.string),
	price: PropTypes.number,
	description: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
};

export default CardContainer;
