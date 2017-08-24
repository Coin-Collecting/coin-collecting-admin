import React, { PropTypes } from "react";

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<h1>MyCoin.Store</h1>
				<h3>Work in progress</h3>
				<p>Links will end up going here to things and other cool stuff</p>
			</div>
		);
	}
}

HomePage.propTypes = {
	data: PropTypes.object,
};

export default HomePage;
