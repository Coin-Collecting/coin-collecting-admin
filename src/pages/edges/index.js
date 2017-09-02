import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
import DefaultLayout from '../../layouts/default';

class Edges extends React.Component {
  render() {
    const { data, browser, location, me } = this.props;
    const { edges } = data;
    let classes = ['edges-page', browser.mediaType];

    return (
      <DefaultLayout location={location}>
        <section className={classes.join(' ')}>
          <article className={"main-article-no-admin"}>
            <p className="results-header clearfix">
              <span>Results ({edges ? edges.length : 0} of {edges ? edges.length : 0})</span>
            </p>
            { data.loading ? <Spinner/> : null }
            <ul className="edges-list">
              { edges && edges.length && !data.loading > 0 ?
                edges.map(edge => {
                  return (
                    <li key={'edge:' + edge.id} className="edge-list-item">
                      <p>
                        <span className="name">{ edge.type.toLowerCase() }</span>
                      </p>
                    </li>
                  )
                })
                :
                <p className="empty">Time to start making edges!</p>
              }
            </ul>
          </article>
        </section>
      </DefaultLayout>
    );
  }
}

Edges.propTypes = {
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
      edges {
        id
        type
        note
      }
    }
  `),
)(Edges);
