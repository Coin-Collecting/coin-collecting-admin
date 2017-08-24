import React, { PropTypes } from "react";
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav className="main-navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/my-coins">Collection</NavLink>
					</li>
					<li>
						<NavLink to="/coins">Coins</NavLink>
					</li>
					<li>
						<NavLink to="/varieties">Varieties</NavLink>
					</li>
					<li>
						<NavLink to="/issues">Issues</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

NavBar.propTypes = {};

export default NavBar;
