import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';
import GlobalFooter from '../../components/global-footer';

import './style.scss';

class DefaultLayout extends React.Component {
	render() {
		return (
			<div className="default-layout">
				<NavBar/>
				<div className="default-section">
					{ this.props.children }
				</div>
				<GlobalFooter/>
			</div>
		);
	}
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
