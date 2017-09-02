import React, { PropTypes } from "react";
import DefaultLayout from '../../layouts/default';

class Designers extends React.Component {

  render() {
    let { location } = this.props;

    return (
      <DefaultLayout location={location}>
        <section className="designers-section">
          <h1>Designers</h1>
        </section>
      </DefaultLayout>
    );
  }
}

Designers.propTypes = {
  location: PropTypes.object,
};

export default Designers;
