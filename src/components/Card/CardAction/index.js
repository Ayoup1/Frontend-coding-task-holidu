import React from "react";

import "./styles.scss";
import Button from "../../Button";
import Rating from "../../Rating";
import AlertCircleIcon from "mdi-react/ArrowRightIcon";

export default function ProductCardDescription({ url, rating, buttonText }) {
	return (
		<div className="card-listing-bid">
			<div className="card-listing-bid-inner">
				<Rating rating={rating} />
				<Button url={url} className={"button-sliding-icon"}>
					{buttonText}
					<AlertCircleIcon className="sliding-icon" size={16} />
				</Button>
			</div>
		</div>
	);
}
