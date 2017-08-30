import React, { PropTypes } from "react";
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'react-apollo';
import { store } from '../../app';
import { toggleSlideMenu } from '../../actions/slide-menu';
import { logout } from '../../actions/me';
import './style.scss';
const FontAwesome = require('react-fontawesome');

class NavBar extends React.Component {
	toggleSlideMenu() {
		store.dispatch(toggleSlideMenu());
	}

	render() {
		const { browser } = this.props;
		let classes = ['main-navbar clearfix', browser.mediaType];
		return (
			<nav className={classes.join(' ')}>
				<NavList onLogout={() => {
          	store.dispatch(logout());
        	}
				}
					/>
				<FontAwesome
					name="bars"
					onClick={this.toggleSlideMenu}
				/>
			</nav>
		);
	}
}

export const NavList = ({onLogout}) => (
	<ul className="main-list">
		<li>
			<Link to="/">
				<img src={require('./logo.png')}/>
			</Link>
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
		<li>
			<NavLink to="/compositions">Compositions</NavLink>
		</li>
		<li>
			<span className="logout-link" onClick={onLogout}>Logout</span>
		</li>
	</ul>
);

NavBar.propTypes = {
	location: PropTypes.object,
  onLogout: PropTypes.func,
};

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

export default compose(
	connect(mapStateToProps)
)(NavBar);
