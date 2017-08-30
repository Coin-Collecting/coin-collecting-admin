import React, { PropTypes } from "react";
import { graphql, gql, compose } from 'react-apollo';
import {connect} from 'react-redux';
const FontAwesome = require('react-fontawesome');
import { Redirect } from 'react-router'

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChanged: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.me.loggedIn) {
      this.setState({
        userChanged: true,
      })
    }
  }

  render() {
    const { me, children } = this.props;
    const { userChanged } = this.state;

    // TODO: Change this to "me" from GraphQl and look at "admin" property
    if (userChanged && !me.loggedIn) {
      return (<Redirect to="/login"/>)
    } else if (!me.loggedIn) {
      return (<Redirect to="/login"/>)
    }
    return (<div>{children}</div>);
  }
}

Auth.propTypes = {
  data: PropTypes.object,
  me: PropTypes.object,
};

function mapStateToProps(state){
  return {
    me: state.reducers.me,
  }
}

export default compose(
  connect(mapStateToProps),
)(Auth);
