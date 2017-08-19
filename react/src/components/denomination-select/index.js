import React, { PropTypes } from "react";
import { gql, graphql } from 'react-apollo';

class DenominationSelect extends React.Component {
	render() {
		const { data } = this.props;
		const { denominations } = data;
		if (data.loading) return (<h3>Loading...</h3>);
		console.log(denominations);
		return (
			<aside>
				<select>
					<option value="">Denomination</option>
					{ denominations.map(den => {
						return (
							<option
								value={den.id}
								key={'denom:' + den.id}
							>
								{ den.kind }
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

DenominationSelect.propTypes = {
	data: PropTypes.object,
};

export default graphql(gql`
	query {
		denominations {
			id
			kind
			val
		}
	}

`)(DenominationSelect);
