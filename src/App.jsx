import React, { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Back } from "./Components/Home_Back/Back";
import { Products } from "./Components/Products/Products";
import { Title } from "./Components/Title/Title";
import { About } from "./Components/About Us/About";
import { Gallery } from "./Components/Gallery/Gallery";
import { Newsletter } from "./Components/Newsletter/Newsletter";
import { Contact } from "./Components/Contact Us/Contact";
import { VideoPlayer } from "./Components/Video-Player/VideoPlayer";


const App = () => {
	const [playState, setPlayState] = useState(false);
	return (
		<div>
			<Navbar />
			<Back />
			<div className="container">
				<Title
					title="Featured Product"
					subTitle="Discover the featured products of Poultive Nutrition Pvt. Ltd., meticulously crafted to optimize the health and performance of your poultry:"
				/>
				<Products />
				<About setPlayState={setPlayState} />
				<Title
					title="Showcasing Our Flock"
					subTitle="A Visual Journey Through Our Poultry Excellence"
				/>
				<Gallery />
				<Title
					title="Stay Informed"
					subTitle="The Latest News and Updates from Our Poultry Farm"
				/>
				<Newsletter />
				<Title
					title="Contact Us"
					subTitle="Get in touch"
				/>
				<Contact />
			</div>
			<VideoPlayer
				playState={playState}
				setPlayState={setPlayState}
			/>
		</div>
	);
};
export default App;
