import React from "react";
import "./Aboutus.css";
import "../../Components/About Us/About.css";
// import '../../index.css'
import { useState } from "react";
import { Vision } from "./Components/Vision.jsx";
import { Values } from "./Components/Values.jsx";
import { About } from "../../Components/About Us/About.jsx";
import { VideoPlayer } from "../../Components/Video-Player/VideoPlayer.jsx";

export const Aboutus = () => {
	const [playState, setPlayState] = useState(false);
	return (
		<div>
			<Values />
			<div className="about-us">
				{/* <h2>ABOUT US</h2>
      <h4>Empowering Wellness through Science and Nature</h4> */}
				<About setPlayState={setPlayState} />
			</div>
			<Vision />
			<VideoPlayer
				playState={playState}
				setPlayState={setPlayState}
			/>
		</div>
	);
};
