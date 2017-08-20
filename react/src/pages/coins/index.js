import React, { PropTypes } from "react";
import { graphql, gql, compose } from 'react-apollo';
import { CreateCoinMutation } from '../../mutations';

import VarietySelect from '../../components/variety-select';
import MintSelect from '../../components/mint-select';

import './style.scss';

class Coins extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			variety: undefined,
			year: undefined,
			mint: undefined,
			mintage: undefined,
			keyDate: false,
			description: undefined,
		}
	}

	addCoin() {
		const { createCoin } = this.props;
		console.log(this.state);
		createCoin(this.state).then(res => this.props.data.refetch());
	}

	render() {
		const { data } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { coins, varieties, mints } = data;

		return (
			<div className="coins-page">
				<h1>Coin Page</h1>
				<article>
					<h3>Create New Coin</h3>
					<ul className="input-list">
						<li>
							<VarietySelect
								variety={this.state.variety}
								varieties={varieties}
								onChange={e => this.setState({
									variety: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								type="text"
								placeholder="Year"
								value={this.state.year}
								onChange={e => this.setState({
									year: e.target.value,
								})}
							/>
						</li>
						<li>
							<MintSelect
								mint={this.state.mint}
								mints={mints}
								onChange={e => this.setState({
									mint: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								type="text"
								placeholder="Mintage"
								value={this.state.mintage}
								onChange={e => this.setState({
									mintage: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								type="text"
								placeholder="Description"
								value={this.state.description}
								onChange={e => this.setState({
									description: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								id="chkKeyDate"
								type="checkbox"
								value={this.state.keyDate}
								onChange={e => this.setState({
									keyDate: e.target.value,
								})}
							/> <label htmlFor="chkKeyDate">Key Date</label>
						</li>
						<li>
							<button onClick={() => this.addCoin()}>Add Coin</button>
						</li>
					</ul>
				</article>
				<article>
					<h3>Coins</h3>
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
						{ coins && coins.length > 0 ?
							coins.map(coin => {
								return (
									<tr key={'issue:' + coin.id}>
										<td>{ coin.variety.name }</td>
										<td>{ coin.year }</td>
										<td>{ coin.mint.mark }</td>
										<td>{ coin.mintage }</td>
										<td>{ coin.keyDate ? 'Y' : '' }</td>
										<td>{ coin.description }</td>
									</tr>
								)
							})
						: null }
						</tbody>
					</table>
				</article>
			</div>
		);
	}
}

Coins.propTypes = {
	data: PropTypes.object,
	createCoin: PropTypes.func,
};

// UPDATE an existing fundraiser
const addCoinMutation = graphql(CreateCoinMutation, {
	props: ({ mutate }) => ({
		createCoin: ({variety, year, mint, mintage, keyDate, description}) => mutate({
			variables: { variety, year, mint, mintage, keyDate, description },
		}),
	}),
});

export default compose(graphql(gql`
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
		varieties {...VarietySelectVariety}
		mints {...MintSelectMint}
	}
	${VarietySelect.fragments.entry}
	${MintSelect.fragments.entry}
`),
	addCoinMutation,
)(Coins);
