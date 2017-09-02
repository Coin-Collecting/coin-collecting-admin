import React, { PropTypes } from "react";
import DefaultLayout from '../../layouts/default';

class Edges extends React.Component {

  render() {
    let { location } = this.props;

    return (
      <DefaultLayout location={location}>
        <section className="edges-section">
          <h1>Edges</h1>
        </section>
      </DefaultLayout>
    );
  }
}

Edges.propTypes = {
  location: PropTypes.object,
};

export default Edges;
