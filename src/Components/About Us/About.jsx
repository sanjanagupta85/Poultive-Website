import React from "react";
import "./About.css";
import Hen from "../../assets/Hen.jpg";
import play from "../../assets/play-icon.png";
export const About = ({ setPlayState }) => {
	return (
		<div className="about">
			<div className="left">
				<img
					src={Hen}
					alt=""
					className="ab-img"
				/>
				<img
					src={play}
					alt=""
					className="play-icon"
					onClick={() => {
						setPlayState(true);
					}}
				/>
			</div>
			<div className="right">
				<h3>About Us</h3>
				<h2>Your Trusted Partner in Poultry Nutrition</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
					deleniti quos impedit natus porro? Voluptatem, unde esse quia odit
					repudiandae nihil ipsum soluta itaque quisquam praesentium ea,
					quibusdam reprehenderit aliquid sint! Possimus soluta doloremque
					adipisci repudiandae exercitationem.
				</p>
			</div>
		</div>
	);
};
