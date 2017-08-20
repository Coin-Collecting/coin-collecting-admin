import React, { PropTypes } from "react";
import { gql, graphql } from 'react-apollo';

class DenominationSelect extends React.Component {
	render() {
		const { data, onChange, denomination } = this.props;
		const { denominations } = data;
		if (data.loading) return (<h3>Loading...</h3>);
		console.log(denominations);
		return (
			<aside>
				<select onChange={onChange} value={denomination}>
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
	denomination: PropTypes.string,
	onChange: PropTypes.func,
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
