import React, { PropTypes } from "react";
import DefaultLayout from '../../layouts/default';

import './style.scss';

class Page404 extends React.Component {

	render() {
		let { location } = this.props;

		return (
			<DefaultLayout location={location}>
				<section className="homepage-section">
					<h1>404</h1>
					<h3>I think your planchet broke :/</h3>
					<p>There are a few things you can do about that, I need to update this page..</p>
				</section>
			</DefaultLayout>
		);
	}
}

Page404.propTypes = {
	location: PropTypes.object,
};

export default Page404;
