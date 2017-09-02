import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
import DefaultLayout from '../../layouts/default';

class Mints extends React.Component {
  render() {
    const { data, browser, location, me } = this.props;
    const { mints } = data;
    let classes = ['mints-page', browser.mediaType];

    return (
      <DefaultLayout location={location}>
        <section className={classes.join(' ')}>
          <article className={"main-article-no-admin"}>
            <p className="results-header clearfix">
              <span>Results ({mints ? mints.length : 0} of {mints ? mints.length : 0})</span>
            </p>
            { data.loading ? <Spinner/> : null }
            <ul className="mints-list">
              { mints && mints.length && !data.loading > 0 ?
                mints.map(mint => {
                  return (
                    <li key={'mint:' + mint.id} className="mint-list-item">
                      <p>
                        <span className="name">{ mint.mark + ' ' + mint.name }</span>
                      </p>
                    </li>
                  )
                })
                :
                <p className="empty">Time to start making mints!</p>
              }
            </ul>
          </article>
        </section>
      </DefaultLayout>
    );
  }
}

Mints.propTypes = {
  data: PropTypes.object,
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
  graphql(gql`
    query {
      mints {
        id
        mark
        name
      }
    }
  `),
)(Mints);
