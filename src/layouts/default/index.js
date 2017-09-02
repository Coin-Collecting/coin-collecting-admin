import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';
import GlobalFooter from '../../components/global-footer';
import {connect} from 'react-redux';
import { graphql, gql, compose } from 'react-apollo';
import SlideMenu from '../../components/slide-menu';
import { store } from '../../app';
import { closeSlideMenu } from '../../actions/slide-menu';
import { updateMe } from '../../actions/me';
import { withRouter } from 'react-router-dom'

import './style.scss';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotMe: false,
    }
  }

	componentWillReceiveProps(nextProps) {
		let { data, history, me } = nextProps;
    // New Data from GraphQL Came Back
		if (!data.loading && !me.loggedIn) {
			if (data.me !== null) {
        store.dispatch(updateMe(data.me));
      } else {
        history.push('/login');
      }
		}

		if (window.previousLocation && window.previousLocation.pathname !== nextProps.location.pathname && this.props.slideMenu.open) {
		  store.dispatch(closeSlideMenu());
    }
	}

	render() {
		const { location, slideMenu, children, data} = this.props;

		let classes = ["default-layout"];

		if (slideMenu.open) classes.push('slid-left');

		if (data.loading) return null;

		return (
			<div className={classes.join(' ')}>
				<SlideMenu
					isOpen={slideMenu.open}
					location={location}
				/>
				<NavBar location={location}/>
				<div className="default-section">
					{ children }
				</div>
				<GlobalFooter/>
			</div>
		);
	}
}

DefaultLayout.propTypes = {
	location: PropTypes.object,
	data: PropTypes.object,
	slideMenu: PropTypes.object,
  me: PropTypes.object,
};

function mapStateToProps(state){
  console.log(state.reducers);
	return {
		slideMenu: state.reducers.slideMenu,
    me: state.reducers.me,
	}
}

export default compose(
  withRouter,
	connect(mapStateToProps),
  graphql(gql`
		query {
			me {
				username
				email
				admin
				}
		}
	`, {
    options: {
      fetchPolicy: 'network-only',
    }
  }),
)(DefaultLayout);
