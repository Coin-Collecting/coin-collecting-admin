import React, { PropTypes } from "react";
import './style.scss';
import NavBar from './components/navbar';

class GlobalHeader extends React.Component {
	render() {
		return (
			<header className="global-header">
				<NavBar/>
			</header>
		);
	}
}

GlobalHeader.propTypes = {};

export default GlobalHeader;
