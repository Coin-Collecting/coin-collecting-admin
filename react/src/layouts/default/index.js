import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';
import GlobalFooter from '../../components/global-footer';

import './style.scss';

class DefaultLayout extends React.Component {
	render() {
		const { location } = this.props;
		return (
			<div className="default-layout">
				<NavBar location={location}/>
				<div className="default-section">
					{ this.props.children }
				</div>
				<GlobalFooter/>
			</div>
		);
	}
}

DefaultLayout.propTypes = {
	location: PropTypes.object,
};

export default DefaultLayout;
