import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';
import GlobalFooter from '../../components/global-footer';
import { compose } from 'react-apollo';
import {connect} from 'react-redux';
import SlideMenu from '../../components/slide-menu';

import './style.scss';

class DefaultLayout extends React.Component {
	render() {
		const { location, slideMenu } = this.props;
		let classes = ["default-layout"];
		if (slideMenu.open) classes.push('slid-left');

		return (
			<div className={classes.join(' ')}>
				<SlideMenu
					isOpen={slideMenu.open}
					location={location}
				/>
				<NavBar
					location={location}
				/>
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
	slideMenu: PropTypes.object,
};

function mapStateToProps(state){
	return {
		slideMenu: state.reducers.slideMenu
	}
}

export default compose(
	connect(mapStateToProps),
)(DefaultLayout);
