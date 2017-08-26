import React, { PropTypes } from "react";

import './style.scss';

class HomePage extends React.Component {

	render() {
		return (
			<section className="homepage-section">
				<h1>MyCoin.Store</h1>
				<h3>ADMIN PORTAL</h3>
				<p>Links will end up going here to things and other cool stuff</p>
			</section>
		);
	}
}

HomePage.propTypes = {
	data: PropTypes.object,
};

export default HomePage;
