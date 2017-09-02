import React from "react";
import { compose } from 'react-apollo';
import { store } from '../../app';
import { logout } from '../../actions/token';
import { withRouter } from 'react-router-dom'

class Logout extends React.Component {
  componentWillMount() {
    let { history } = this.props;
    store.dispatch(logout());
    history.push('/login');
  }

  render() {return null}

}

Logout.propTypes = {};

export default compose(
  withRouter,
)(Logout);
