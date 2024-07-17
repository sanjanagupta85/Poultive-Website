import React from "react";
import Product_data from "./Product_data";
import './List.css'

const List = () => {
	const productData = Product_data.map((item) => (
		<div
			className="pwsh"
			key={item.id}
		>
			<div className="Med">
				<div className="Med-img">
					<img src={item.thumb} />
				</div>

				<div className="name">
					<h2>{item.name}</h2>
				</div>
				<div className="card-body">
					<h2>{item.product_name}</h2>
					<p>{item.description}</p>
				</div>
				<div className="size-section">
					<div className="sizes">
						<span>{item.sizes.S}</span>
						<span>{item.sizes.M}</span>
						<span>{item.sizes.L}</span>
						<span>{item.sizes.XL}</span>
					</div>
				</div>
        <div className="group">
          <div className="read">Read More</div>
        </div>
			</div>
		</div>
  ));
	return <div className="data">{productData}</div>;
};

export default List;
