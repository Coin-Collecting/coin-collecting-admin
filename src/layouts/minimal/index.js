import React, { PropTypes } from "react";
import NavBar from '../../components/navbar';
import GlobalFooter from '../../components/global-footer';

import './style.scss';

class MinimalLayout extends React.Component {
  render() {
    const { location, children} = this.props;

    let classes = ["minimal-layout"];

    return (
      <section className={classes.join(' ')}>
        <NavBar/>
        <div className="minimal-section">
          { children }
        </div>
        <GlobalFooter/>
      </section>
    );
  }
}

MinimalLayout.propTypes = {
  location: PropTypes.object,
};

export default MinimalLayout;
