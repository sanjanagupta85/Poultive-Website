import React from "react";
import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import loc from "../../assets/location.png";
import call from "../../assets/call.png";
import email from "../../assets/email.png";
import fwd from "../../assets/fwdbtn.png";

export const Contact = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "b250b413-48f2-404d-ae0b-964faeccff41");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	return (
		<div className="contact">
			<div className="contact-col">
				<h3>
					Have questions or need assistance?{" "}
					<img
						src={msg}
						alt=""
					/>
				</h3>
				<p>
					Our team is here to help! Whether you want to learn more about our
					poultry products, place an order, or simply get in touch, feel free to
					reach out. We value your feedback and look forward to connecting with
					you.
				</p>
				<ul>
					<li>
						<img
							src={email}
							alt=""
						/>
						email@poultivenutrition.com
					</li>
					<li>
						<img
							src={call}
							alt=""
						/>
						1234567890
					</li>
					<li>
						<img
							src={loc}
							alt=""
						/>
						32,abc,New Delhi, India
					</li>
				</ul>
			</div>
			<div className="contact-col">
				<form onSubmit={onSubmit}>
					<label>Your Name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter Your Name"
						required
					/>
					<label>Phone no:</label>
					<input
						type="tel"
						name="phone"
						placeholder="Enter Your Phone no"
						required
					/>
					<label>E-mail</label>
					<input
						type="email"
						name="email"
						placeholder="abc@example.com"
						required
					/>
					<label>Your Message</label>
					<textarea
						name="message "
						rows="6"
						placeholder="Enter Your Message"
						required
					></textarea>
					<button
						type="submit"
						className="btn dark-btn"
					>
						Submit Now
					</button>
				</form>
				<span>{result}</span>
			</div>
		</div>
	);
};
