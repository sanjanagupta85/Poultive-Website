import React from "react";
import { useRef } from "react";
import "./Newsletter.css";
import bckbtn from "../../assets/Backbtn.png";
import fwdbtn from "../../assets/fwdbtn.png";
import girl from "../../assets/girl.jpg";

export const Newsletter = () => {
	const slider = useRef();
	let tx = 0;

	const slideForward = () => {
		if (tx > -50) {
			tx -= 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`;
	};
	const slideBackward = () => {
		if (tx < 0) {
			tx += 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`;
	};

	return (
		<div className="newsletter">
			<img
				src={bckbtn}
				alt=""
				className="back-btn"
				onClick={slideBackward}
			/>
			<img
				src={fwdbtn}
				alt=""
				className="fwd-btn"
				onClick={slideForward}
			/>
			<div className="slider">
				<ul ref={slider}>
					<li>
						<div className="slide">
							<div className="user-info">
								<img
									src={girl}
									alt=""
								/>
								<div>
									<h3>Name of user1</h3>
									<span>Designation</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate assumenda, blanditiis consequuntur maiores architecto
								possimus reprehenderit quo ullam aperiam nobis earum suscipit
								harum ea, eaque est.
							</p>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img
									src={girl}
									alt=""
								/>
								<div>
									<h3>Name of user2</h3>
									<span>Designation</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate assumenda, blanditiis consequuntur maiores architecto
								possimus reprehenderit quo ullam aperiam nobis earum suscipit
								harum ea, eaque est.
							</p>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img
									src={girl}
									alt=""
								/>
								<div>
									<h3>Name of user3</h3>
									<span>Designation</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate assumenda, blanditiis consequuntur maiores architecto
								possimus reprehenderit quo ullam aperiam nobis earum suscipit
								harum ea, eaque est.
							</p>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img
									src={girl}
									alt=""
								/>
								<div>
									<h3>Name of user4</h3>
									<span>Designation</span>
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate assumenda, blanditiis consequuntur maiores architecto
								possimus reprehenderit quo ullam aperiam nobis earum suscipit
								harum ea, eaque est.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
