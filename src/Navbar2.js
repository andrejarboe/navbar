import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; 

import './navbar.css'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="logo">
					<img src={logo} alt="Logo" />
				</div>
				<ul className="nav-items">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
