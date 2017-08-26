import React, { PropTypes } from "react";
import { store } from '../../app';
import { closeSlideMenu } from '../../actions/slide-menu';
import './style.scss';

class SlideMenu extends React.Component {
	render() {
		const { isOpen } = this.props;
		let classes = ['slide-menu'];
		if (isOpen) classes.push('open');

		return (
			<div className={classes.join(' ')}>
				<aside>
					SLIDE MENU
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
};

export default SlideMenu;
