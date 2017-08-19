import React, { PropTypes } from "react";
import CoinBar from '../../components/coin-bar';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<CoinBar/>
			</div>
		);
	}
}

HomePage.propTypes = {
	data: PropTypes.object,
};

export default HomePage;
