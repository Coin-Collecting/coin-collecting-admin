import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';

import { Helmet } from "react-helmet";

import './style.scss';

class DefaultLayout extends React.Component {
	render() {
		return (
			<div className="default-layout">
				<Helmet>
					<title>MyCoin Store</title>
					<link rel="apple-touch-icon" sizes="57x57" href={require("./favicon/apple-icon-57x57.png")} />
					<link rel="apple-touch-icon" sizes="60x60" href={require("./favicon/apple-icon-60x60.png")} />
					<link rel="apple-touch-icon" sizes="72x72" href={require("./favicon/apple-icon-72x72.png")}/>
					<link rel="apple-touch-icon" sizes="76x76" href={require("./favicon/apple-icon-76x76.png")}/>
					<link rel="apple-touch-icon" sizes="114x114" href={require("./favicon/apple-icon-114x114.png")}/>
					<link rel="apple-touch-icon" sizes="120x120" href={require("./favicon/apple-icon-120x120.png")}/>
					<link rel="apple-touch-icon" sizes="144x144" href={require("./favicon/apple-icon-144x144.png")}/>
					<link rel="apple-touch-icon" sizes="152x152" href={require("./favicon/apple-icon-152x152.png")}/>
					<link rel="apple-touch-icon" sizes="180x180" href={require("./favicon/apple-icon-180x180.png")}/>
					<link rel="icon" type="image/png" sizes="192x192"  href={require("./favicon/android-icon-192x192.png")}/>
					<link rel="icon" type="image/png" sizes="32x32" href={require("./favicon/favicon-32x32.png")}/>
					<link rel="icon" type="image/png" sizes="96x96" href={require("./favicon/favicon-96x96.png")}/>
					<link rel="icon" type="image/png" sizes="16x16" href={require("./favicon/favicon-16x16.png")}/>
				</Helmet>
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
