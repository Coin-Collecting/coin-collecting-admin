import React, { PropTypes } from "react";
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'react-apollo';
import { store } from '../../app';
import { toggleSlideMenu } from '../../actions/slide-menu';
import './style.scss';
const FontAwesome = require('react-fontawesome');

class NavBar extends React.Component {
	toggleSlideMenu() {
		store.dispatch(toggleSlideMenu());
	}

	render() {
		const { browser, location } = this.props;
		let showCoinSubNav = location.pathname.includes('/coins');

		let classes = ['main-navbar clearfix', browser.mediaType];
		return (
			<nav className={classes.join(' ')}>
				<NavList />
				<FontAwesome
					name="bars"
					onClick={this.toggleSlideMenu}
				/>
				<div className="logout-link">
					<NavLink to="/logout">Logout</NavLink>
				</div>
        { showCoinSubNav ?
          <div className="subnav">
            <SubNavList/>
          </div>
        : null }
			</nav>
		);
	}
}

export const NavList = ({showCoinSub}) => (
	<ul className="main-list">
		<li>
			<Link to="/">
				<img src={require('./logo.png')}/>
			</Link>
		</li>
		<li>
			<NavLink to="/coins">Coins</NavLink>
      { showCoinSub ? <SubNavList/> : null }
		</li>
		<li>
			<NavLink to="/proofs">Proofs</NavLink>
		</li>
	</ul>
);

export const SubNavList = () => (
	<ul className="sub-nav-list">
		<li>
			<NavLink to="/coins/varieties">Varieties</NavLink>
		</li>
		<li>
			<NavLink to="/coins/issues">Issues</NavLink>
		</li>
		<li>
			<NavLink to="/coins/compositions">Compositions</NavLink>
		</li>
		<li>
			<NavLink to="/coins/designers">Designers</NavLink>
		</li>
		<li>
			<NavLink to="/coins/denominations">Denominations</NavLink>
		</li>
		<li>
			<NavLink to="/coins/edges">Edges</NavLink>
		</li>
		<li>
			<NavLink to="/coins/mints">Mints</NavLink>
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
