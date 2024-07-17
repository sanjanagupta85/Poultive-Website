import React from "react";
import "./Back.css";
import download from "../../assets/download.png";
import{Link} from 'react-scroll';

export const Back = () => {
	return (
		<div className="Back container">
			<div className="Back-text">
				<h1>Supporting Stronger Feathers, Stronger Futures</h1>
				<p>
					Poultive Nutrition is associated with WISDOM GROUP AG, Switzerland and
					eagers to provide every solution for animal health specifically for
					poultry and livestock. Poultive Nutrition is an outcome of the years
					of expertise from domestic as well as international veterinary market
					experts with an objective to ensure innovative solutions across the
					Globe.
				</p>
				<button className="btn">
					Explore More{" "}
					<img
						src={download}
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};
