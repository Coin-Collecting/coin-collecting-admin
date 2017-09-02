import React, { PropTypes } from "react";
import { graphql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import MinimalLayout from '../../layouts/minimal';
import { LoginMutation } from '../../mutations';
import { store } from '../../app';
import { login } from '../../actions/token';
import { withRouter, Redirect } from 'react-router-dom'

import './style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
      redirect: false,
    }
  }

  dispatchLogin(token) {
    store.dispatch(login(token));
    this.props.history.push(window.previousLocation ? window.previousLocation.pathname : '/');
  }

  _login() {
    const { login } = this.props;
    login(this.state)
      .then(({data: { loginUser }}) => this.dispatchLogin(loginUser))
      .catch(e => {
        this.setState({
          error: e.message,
        })
      })
  }

  render() {
    let classes = ["login-page"];

    if (this.props.me.loggedIn) {
      return (<Redirect to={window.previousLocation ? window.previousLocation.pathname : '/'}/>)
    }

    return (
      <MinimalLayout>
        <section className={classes.join(' ')}>
          <article className="login-window">
            <header>
              <h3>Login to MyCoin Store Admin</h3>
            </header>
            <ul>
              <li>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({
                      username: e.target.value,
                      error: null,
                    })
                  }}
                />
              </li>
              <li>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({
                      password: e.target.value,
                      error: null,
                    })
                  }}
                />
              </li>
              <li>
                <button onClick={() => this._login()}>Login</button>
                { this.state.error ?
                  <p>{this.state.error}</p>
                : null }
              </li>
            </ul>
          </article>
        </section>
      </MinimalLayout>
    );
  }
}

Login.propTypes = {
  me: PropTypes.object,
  login: PropTypes.func,
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

// UPDATE an existing fundraiser
const loginMutationQuery = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: ({username, password}) => {
      return mutate({
        variables: {username, password},
      });
    }
  }),
});

function mapStateToProps(state){
  return {
    me: state.reducers.me,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps),
  loginMutationQuery,
)(Login);
