import React, { useState } from "react";

import GalleryToggle from "./GalleryToggle";
import ContentLoader from "react-content-loader";
import "./styles.scss";
function Gallery(props) {
	const [activeItem, setActiveItem] = useState(0);
	let nbr = props.photos ? props.photos.length : 0;
	function rotateRight() {
		setActiveItem((((activeItem + 1) % nbr) + nbr) % nbr);
	}

	function rotateLeft() {
		setActiveItem((((activeItem - 1) % nbr) + nbr) % nbr);
	}

	let { photos, loading } = props;
	if (loading) {
		return (
			<ContentLoader
				height={200}
				width={380}
				speed={2}
				primaryColor="#f3f3f3"
				secondaryColor="#ecebeb"
			>
				<rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
			</ContentLoader>
		);
	}
	return (
		<div className={"property-card-gallery"}>
			{photos.map((photo, i) => {
				return (
					<div
						className={`gallery-item ${activeItem === i ? "active" : ""} `}
						style={{
							backgroundImage: `url(${photo})`
						}}
						key={i}
					/>
				);
			})}
			<GalleryToggle icon="Right" action={rotateRight} right />
			<GalleryToggle icon="Left" action={rotateLeft} left />
		</div>
	);
}

export default Gallery;
