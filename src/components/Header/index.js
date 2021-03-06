import React from "react";

import LocationIcon from "mdi-react/LocationIcon";
import Button from "../Button";
import Input from "../Input";
import "./styles.scss";
export default function Header(props) {
	const { text, handleInput, count, size, handleButton } = props;
	const handleKeyPress = event => {
		if (event.key === "Enter") {
			handleButton();
		}
	};
	return (
		<section className="hero-banner">
			<div className="container">
				{/* <!-- Intro Headline --> */}
				<div className="row flex-column ">
					<div className="logo">
						<svg viewBox="0 0 1200 253">
							<g fill="#0C6EEF">
								<path
									d="M78 213l18 7c19 6 40 10 63 10a180 180 0 0 1-47-36 69 69 0 0 1-2-3l-2-3V82l94-78c4-5 11-5 16-1l91 75c3 3 4 6 4 9v98a11 11 0 0 1-3 7 69 69 0 0 1-8 10 155 155 0 0 1-40 28 220 220 0 0 0 81-17l-1-11c0-21 18-39 39-39 22 0 40 18 40 39a39 39 0 0 1-65 30 169 169 0 0 1-23 9 242 242 0 0 1-122 7 240 240 0 0 1-146-16 40 40 0 0 1-65-30c0-21 18-39 40-39a39 39 0 0 1 38 50zm133 12a167 167 0 0 0 75-39l4-5V92l-79-66-80 66v89l4 5a167 167 0 0 0 75 40zm187-23c0-9-7-16-17-16-9 0-16 7-16 16s7 17 16 17c10 0 17-8 17-17zm-342 0c0-9-7-16-16-16-10 0-17 7-17 16s7 17 17 17c9 0 16-8 16-17z"
									fillRule="nonzero"
								></path>
								<path d="M583 98c30 0 50 20 50 52v79h-28v-76c0-19-11-30-29-30-19 0-32 12-32 37v69h-28V50h28v67c8-13 21-19 39-19zm138 134c-19 0-35-6-48-19a65 65 0 0 1-20-48c0-19 7-35 20-48s29-19 48-19 35 6 48 19 20 29 20 48-7 34-20 48a65 65 0 0 1-48 19zm-29-38c8 7 17 11 29 11 11 0 21-4 28-11 8-8 12-18 12-29a39 39 0 0 0-40-41c-12 0-21 4-29 12-7 8-11 17-11 29 0 11 4 21 11 29zm147 35h-28V42h28v187zm56-152c-7 7-18 7-25 0-7-8-7-18 0-25s18-7 25 0 7 17 0 25zm1 152h-27V101h27v128zm132-110V50h28v179h-28v-19a52 52 0 0 1-45 22c-18 0-33-6-45-19a66 66 0 0 1-19-48c0-19 6-35 19-48 12-13 27-19 45-19 19 0 34 7 45 21zm-70 75c8 8 18 12 29 12 12 0 22-4 29-12 8-8 12-18 12-29 0-12-4-22-12-29-7-8-17-12-29-12-11 0-21 4-29 12-8 7-11 17-11 29 0 11 3 21 11 29zm214-25v-68h28v128h-28v-17c-8 13-21 20-40 20-29 0-49-20-49-53v-78h28v75c0 20 11 30 29 30 19 0 32-12 32-37z"></path>
							</g>
						</svg>
					</div>
					<div className="banner-headline mt-25">
						<h3>
							<strong>
								Hello ,
								<span role="img" aria-label="Waving Hand">
									👋
								</span>
							</strong>
							<br />
							<span>
								My name is <strong className="color">Ayoub Ouaantar </strong>
								and this is my Holidu Frontend Coding Task. Thank you.
							</span>
						</h3>
					</div>
				</div>
				{/* <!-- Search Bar --> */}
				<div className="row">
					<div className="hero-banner-search-form mt-65">
						{/* <!-- Search Field --> */}
						<div className="hero-search-field ">
							<label htmlFor="search-input" className="field-title ">
								Where?
							</label>
							<div className="input-with-icon">
								<Input
									id="search-input"
									type="text"
									placeholder="Where do you want to go?"
									value={text}
									onChange={handleInput}
									onKeyPress={handleKeyPress}
								/>

								<LocationIcon size={18} color="#eee" className="" />
							</div>
						</div>

						{/* <!-- Button --> */}
						<div className="hero-search-button" onClick={handleButton}>
							<Button>Search</Button>
						</div>
					</div>
				</div>

				{/* <!-- Stats --> */}
				<div className="row">
					<ul className="hero-stats mt-45 hu-992">
						<li>
							<strong className="counter">{count}</strong>
							<span>Accommodations Found</span>
						</li>
						<li>
							<strong className="counter">{size}</strong>
							<span>Accommodations in page</span>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="background-image-container"
				style={{
					backgroundImage: `url("https://www.holidu.com/assets/images/homepage-hero-desktop.jpg")`
				}}
			></div>
		</section>
	);
}
