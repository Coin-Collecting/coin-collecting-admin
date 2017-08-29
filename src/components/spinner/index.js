import React, { PropTypes } from "react";
import './style.scss';
const SpinnerImage = require('./spinner.png');

class Spinner extends React.Component {
	render() {
		return (
			<div className="spinner">
				<img src={SpinnerImage}/>
			</div>
		);
	}
}

Spinner.propTypes = {};

export default Spinner;
