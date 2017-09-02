import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
import DefaultLayout from '../../layouts/default';

class Denominations extends React.Component {
  render() {
    const { data, browser, location, me } = this.props;
    const { denominations } = data;
    let classes = ['denominations-page', browser.mediaType];

    return (
      <DefaultLayout location={location}>
        <section className={classes.join(' ')}>
          <article className={"main-article-no-admin"}>
            <p className="results-header clearfix">
              <span>Results ({denominations ? denominations.length : 0} of {denominations ? denominations.length : 0})</span>
            </p>
            { data.loading ? <Spinner/> : null }
            <ul className="denominations-list">
              { denominations && denominations.length && !data.loading > 0 ?
                denominations.map(denomination => {
                  return (
                    <li key={'denomination:' + denomination.id} className="denomination-list-item">
                      <p>
                        <span className="name">
                          { denomination.kind.toLowerCase().replace(/_/g, ' ') }
                        </span>
                      </p>
                    </li>
                  )
                })
                :
                <p className="empty">Time to start making denominations!</p>
              }
            </ul>
          </article>
        </section>
      </DefaultLayout>
    );
  }
}

Denominations.propTypes = {
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
      denominations {
        id
        kind
        val
      }
    }
  `),
)(Denominations);
