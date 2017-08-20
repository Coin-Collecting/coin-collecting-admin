import React, { PropTypes } from "react";

class MyCoins extends React.Component {
	render() {
		return (
			<div>
				<h1>My Coins</h1>
			</div>
		);
	}
}

MyCoins.propTypes = {
	data: PropTypes.object,
};

export default MyCoins;
