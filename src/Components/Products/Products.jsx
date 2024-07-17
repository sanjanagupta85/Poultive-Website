import React from "react";
import "./Product.css";
import Product1 from "../../assets/Product1.png";
import Product2 from "../../assets/Product2.png";
import Product3 from "../../assets/Product3.png";
import icon from "../../assets/icon.png";

export const Products = () => {
	return (
		<div className="Products">
			<div className="Product">
				<img
					src={Product1}
					alt=""
				/>
				<div className="caption">
					<img
						src={icon}
						alt=""
					/>
					<p>Product Name</p>
				</div>
			</div>
			<div className="Product">
				<img
					src={Product2}
					alt=""
				/>
				<div className="caption">
					<img
						src={icon}
						alt=""
					/>
					<p>Product Name</p>
				</div>
			</div>
			<div className="Product">
				<img
					src={Product3}
					alt=""
				/>
				<div className="caption">
					<img
						src={icon}
						alt=""
					/>
					<p>Product Name</p>
				</div>
			</div>
		</div>
	);
};
