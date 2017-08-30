import React, { PropTypes } from "react";
import { store } from '../../app';
import { closeSlideMenu } from '../../actions/slide-menu';
import { NavList } from '../navbar';
import { logout } from '../../actions/me';

import './style.scss';

class SlideMenu extends React.Component {
	render() {
		const { isOpen, location } = this.props;
		let classes = ['slide-menu'];
		if (isOpen) classes.push('open');

		return (
			<div className={classes.join(' ')}>
				<aside>
					<NavList
						location={location}
					  onLogout={() => store.dispatch(logout())}
					/>
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

export default SlideMenu;
