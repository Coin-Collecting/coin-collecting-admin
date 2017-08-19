import React, { PropTypes } from "react";

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h1>Homepage</h1>
			</div>
		);
	}
}

HomePage.propTypes = {
	data: PropTypes.object,
};

export default HomePage;
