import React, { PropTypes } from "react";
import { Link } from 'react-router-dom';
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
						<Link to="/my-coins">My Coins</Link>
					</li>
					<li>
						<Link to="/coins">Coins</Link>
					</li>
					<li>
						<Link to="/varieties">Varieties</Link>
					</li>
					<li>
						<Link to="/issues">Issues</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

NavBar.propTypes = {};

export default NavBar;
