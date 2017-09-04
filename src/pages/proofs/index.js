import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import './style.scss';
import DefaultLayout from '../../layouts/default';

class Proofs extends React.Component {
  render() {
    const { data, browser, location } = this.props;
    let classes = ['proofs-page', browser.mediaType];

    return (
      <DefaultLayout location={location}>
        <section className={classes.join(' ')}>
          <article className={"main-article-no-admin"}>
            <h3>Proofs</h3>

          </article>
        </section>
      </DefaultLayout>
    );
  }
}

Proofs.propTypes = {
  location: PropTypes.object,
  me: PropTypes.object,
};

function mapStateToProps(state){
  return {
    browser: state.browser,
    me: state.reducers.me,
  }
}

export default compose(
  connect(mapStateToProps),
)(Proofs);
