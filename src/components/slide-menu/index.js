import React, { PropTypes } from "react";
import { store } from '../../app';
import { closeSlideMenu } from '../../actions/slide-menu';
import { NavList } from '../navbar';
import { compose } from 'react-apollo';

import './style.scss';

class SlideMenu extends React.Component {
	render() {
		const { isOpen, location, history } = this.props;
		let classes = ['slide-menu'];
		if (isOpen) classes.push('open');

		return (
			<div className={classes.join(' ')}>
				<aside>
					<NavList location={location}/>
				</aside>
				<div
					onClick={() => store.dispatch(closeSlideMenu())}
					className="underlay"
				/>
			</div>
		);
	}
}

SlideMenu.propTypes = {
	isOpen: PropTypes.bool,
	location: PropTypes.object,
};

export default compose()(SlideMenu);
