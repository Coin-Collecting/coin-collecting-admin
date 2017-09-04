import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
import DefaultLayout from '../../layouts/default';

class Designers extends React.Component {
  render() {
    const { data, browser, location, me } = this.props;
    const { designers } = data;
    let classes = ['designers-page', browser.mediaType];

    return (
      <DefaultLayout location={location}>
        <section className={classes.join(' ')}>
          <article className={"main-article-no-admin"}>
            <h3>Designers</h3>
            <p className="results-header clearfix">
              <span>Results ({designers ? designers.length : 0} of {designers ? designers.length : 0})</span>
            </p>
            { data.loading ? <Spinner/> : null }
            <ul className="designers-list">
              { designers && designers.length && !data.loading > 0 ?
                designers.map(designer => {
                  return (
                    <li key={'designer:' + designer.id} className="designer-list-item">
                      <p>
                        <span className="name">
                          { designer.name }
                        </span>
                      </p>
                    </li>
                  )
                })
                :
                <p className="empty">Time to start making designers!</p>
              }
            </ul>
          </article>
        </section>
      </DefaultLayout>
    );
  }
}

Designers.propTypes = {
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
          designers {
              id
              name
          }
      }
  `),
)(Designers);
