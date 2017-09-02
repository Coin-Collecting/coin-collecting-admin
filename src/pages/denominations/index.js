import React, { PropTypes } from "react";
import DefaultLayout from '../../layouts/default';

class Denominations extends React.Component {

  render() {
    let { location } = this.props;

    return (
      <DefaultLayout location={location}>
        <section className="denominations-section">
          <h1>Denominations</h1>
        </section>
      </DefaultLayout>
    );
  }
}

Denominations.propTypes = {
  location: PropTypes.object,
};

export default Denominations;
