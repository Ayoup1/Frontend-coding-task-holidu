import React from "react";

import "./styles.scss";
import LocationIcon from "mdi-react/LocationIcon";
import ContentLoader from "react-content-loader";
export default function Details({
	title,
	location,
	price,
	currency,
	loading,
	url
}) {
	return (
		<a className="card-listing-details" href={url}>
			{loading ? (
				<ContentLoader
					height={130}
					width={380}
					speed={2}
					primaryColor="#f3f3f3"
					secondaryColor="#ecebeb"
					style={{ width: "100%", height: "100%" }}
				>
					<rect x="3" y="21" rx="5" ry="5" width="220" height="30" />
					<rect x="3" y="63" rx="5" ry="5" width="180" height="18" />
					<rect x="281" y="51" rx="5" ry="5" width="79" height="30" />
				</ContentLoader>
			) : (
				<React.Fragment>
					<div className="card-listing-description">
						<h3 className="card-listing-title">{title}</h3>
						<ul className="card-icons">
							<li>
								<LocationIcon size={18} />
								<i className="icon-material-outline-location-on"></i> {location}
							</li>
						</ul>
					</div>
					<div className="card-offers">
						<strong>{`${currency} ${price}`}</strong>
						<span>per night</span>
					</div>
				</React.Fragment>
			)}
		</a>
	);
}
