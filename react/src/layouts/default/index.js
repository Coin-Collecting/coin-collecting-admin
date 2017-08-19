import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';

import './style.scss';

class DefaultLayout extends React.Component {
	render() {
		return (
			<div className="default-layout">
				<header>
					<NavBar/>
				</header>
				<section className="default-section">
					{ this.props.children }
				</section>
			</div>
		);
	}
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
