import React from "react";
import "./Gallery.css";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";

export const Gallery = () => {
	return (
		<div className="gallery">
			<div className="gallery-photos">
				<img
					src={gallery1}
					alt=""
				/>
				<img
					src={gallery2}
					alt=""
				/>
				<img
					src={gallery3}
					alt=""
				/>
				<img
					src={gallery4}
					alt=""
				/>
			</div>
			<div className="gallery-photos">
				<img
					src={gallery1}
					alt=""
				/>
				<img
					src={gallery2}
					alt=""
				/>
				<img
					src={gallery3}
					alt=""
				/>
				<img
					src={gallery4}
					alt=""
				/>
			</div>
		</div>
	);
};
