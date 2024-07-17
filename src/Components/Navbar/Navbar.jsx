import "./Navbar.css";
import React, { useEffect, useState } from "react";
import logo1 from "../../assets/logo1.png";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import sidebar from "../../assets/sidebar.png";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
	const [sticky, setSticky] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 500 ? setSticky(true) : setSticky(false);
		});
	}, []);
	const [mobileView, setMobileView] = useState(false);
	const toggleMenu = () => {
		mobileView ? setMobileView(false) : setMobileView(true);
	};

	// const [darkMode, setDarkMode] = useState(false);
	// const location = useLocation();

	// useEffect(() => {

	//   const pathsWithDarkNav = ['/about','/profile','/quarter','/manufacturing'];
	//   setDarkMode(pathsWithDarkNav.includes(location.pathname));
	// }, [location]);
	return (
		<nav className={`container ${sticky ? "dark-nav" : ""}`}>
			<img
				src={logo1}
				alt=""
				className="logo"
			/>
			<ul className={mobileView ? "" : "hide-sidebar"}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About Us</NavLink>
				</li>
				<li>
					<NavLink to="/manufacturing">Manufacturing</NavLink>
				</li>
				<li>
					<NavLink to="/profile">Corporate Profile</NavLink>
				</li>
				<li>
					<NavLink to="/quarter">Quarterly Results</NavLink>
				</li>
				<li>
					<NavLink to="/contactus">Contact Us</NavLink>
				</li>
			</ul>
			<img
				src={sidebar}
				alt=""
				className="sidebar"
				onClick={toggleMenu}
			/>
		</nav>
	);
};
