import React, { PropTypes } from "react";
import './style.scss';

class GlobalFooter extends React.Component {
	render() {
		return (
			<footer className="global-footer">
				&copy; ... But not really 2017
			</footer>
		);
	}
}

GlobalFooter.propTypes = {};

export default GlobalFooter;
