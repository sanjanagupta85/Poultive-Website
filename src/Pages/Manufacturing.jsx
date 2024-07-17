import React from "react";
import "../Components/Products/Product.css";
import "./Manufacturing.css";
import List from "./List";



export const Manufacturing = () => {
	return (
		<>
			<div className="Manufactured">
				<div className="Manufacturing">Manufactured products</div>
				
			<List/>
			
			</div>
		</>
	);
};
