import React, { PropTypes } from "react";
import DefaultLayout from '../../layouts/default';

import './style.scss';

class HomePage extends React.Component {

	render() {
		let { location } = this.props;

		return (
			<DefaultLayout location={location}>
				<section className="homepage-section">
					<h1>MyCoin.Store</h1>
					<h3>ADMIN PORTAL</h3>
					<p>Links will end up going here to things and other cool stuff</p>
				</section>
			</DefaultLayout>
		);
	}
}

HomePage.propTypes = {
	location: PropTypes.object,
};

export default HomePage;
