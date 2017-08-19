import React, { PropTypes } from "react";
import { gql, graphql } from 'react-apollo';

class CoinBar extends React.Component {

	getCompositionString(composition) {
		const {
			brass,
			copper,
			gold,
			nickel,
			silver,
			steel,
			tin,
			zinc,
		} = composition;
		let compString = '';

		Object.keys(composition).forEach(key => {
			if (composition[key] && key !== 'id' && key !== '__typename') {
				compString += `${Math.floor(composition[key] * 100)}% ${key} `
			}
		});

		return compString;
	}

	render() {
		const { data } = this.props;
		const { varieties } = data;
		if (data.loading) return (<h3>Loading...</h3>);
		console.log({varieties});
		return (
			<aside>
				<ul>
				{ varieties.map(variety => {
					return (
						<li key={'variety:' + variety.id}>
							{variety.name}
						</li>
					)
				})}
				</ul>
			</aside>
		);
	}
}

CoinBar.propTypes = {
	data: PropTypes.object,
};

export default graphql(gql`
	query {
		varieties {
			id
			name
			description
			mass
			diameter
			issue {
				id
				name
				startYear
				endYear
				description
				denomination {
					id
					kind
					val
				}
			}
			edge {
				id
				type
			}
			composition {
				id
				gold
				steel
				silver
				copper
				zinc
				nickel
				tin
				brass
			}
			designer {
				id
				name
			}
			images {
				id
				obverse
				reverse
			}
		}
	}

`)(CoinBar);
