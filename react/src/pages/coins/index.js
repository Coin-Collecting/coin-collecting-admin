import React, { PropTypes } from "react";
import { graphql, gql } from 'react-apollo';

import './style.scss';

class Coins extends React.Component {
	render() {
		const { data } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { coins } = data;
		console.log({coins});
		return (
			<article className="coins-page">
				<h1>Coins</h1>
				<hr/>
				<h3>Create New Coin</h3>
				<p>Not yet implemented</p>
				<hr/>
				<table>
					<thead>
						<tr>
							<th>Variety</th>
							<th>Year</th>
							<th>Mint</th>
							<th>Mintage</th>
							<th>KeyDate</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
					{ coins.map(coin => {
						return (
							<tr key={'issue:' + coin.id}>
								<td>{ coin.variety.name }</td>
								<td>{ coin.year }</td>
								<td>{ coin.mint.mark }</td>
								<td>{ coin.mintage }</td>
								<td>{ coin.keyDate }</td>
								<td>{ coin.description }</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</article>
		);
	}
}

Coins.propTypes = {
	data: PropTypes.object,
};

export default graphql(gql`
	query {
		coins {
			id
			variety {
				id
				name
			}
			year
			mint {
				id
				mark
			}
			mintage
			keyDate
			description
		}
	}

`)(Coins);
