import React, { PropTypes } from "react";
import { graphql, gql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import { CreateCoinMutation } from '../../mutations';
import Spinner from '../../components/spinner';
import AddCoin from '../../components/add-coin';
const FontAwesome = require('react-fontawesome');

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
		createCoin(this.state).then(res => this.props.data.refetch());
	}

	render() {
		const { data, browser } = this.props;
		const { coins } = data;
		let classes = ['coins-page', browser.mediaType];

		return (
			<section className={classes.join(' ')}>
				<article className="create-coin-article">
					<h3>Create A New Coin</h3>
					<AddCoin
						sizeOverride={browser.greaterThan.medium ? 'small' : null}
						onSubmit={() => this.props.data.refetch()}
					/>
				</article>
				<article className="main-article">
					<h3>Find an Coin</h3>
					<div className="filters clearfix">
						<input type="text" placeholder="Search"/>
						<div className="sort-by">
							<div className="select-wrapper">
								<select>
									<option value="oldest">Oldest First</option>
									<option value="newest">Newest First</option>
									<option value="variety">Variety</option>
									<option value="mint">Mint</option>
									<option value="mintage">Mintage</option>
								</select>
							</div>
						</div>
					</div>
					<p className="results-header clearfix">
						<span>Results ({coins ? coins.length : 0} of {coins ? coins.length : 0})</span>
					</p>
					<ul className="coins-list">
						{ coins && coins.length > 0 ?
							coins.map(coin => {
								return (
									<li key={'coin:' + coin.id}>
										<p>
											<FontAwesome name="pencil"/>
											<a
												className="ebay"
												target="_blank"
												href={`https://www.ebay.com/sch/i.html?_nkw=${coin.year}+${coin.mint.mark}+${coin.variety.name.replace(/ /g, '+')}&LH_BIN=1&_sop=15`}
											>
												<FontAwesome name="legal"/>
											</a>
											<span className="year">
												{ coin.year + '-' + coin.mint.mark }
											</span>
											<span className="name">{ coin.variety.issue.name + ' ' + coin.variety.name }</span>
											<span className="mintage">Minted: {coin.mintage}</span>
											<span className="description">{coin.description}</span>
										</p>
									</li>
								)
							})
							:
							<p className="empty">Make a coin or two, there are none!</p>
						}
					</ul>
				</article>
			</section>
		);
	}
}

Coins.propTypes = {
	data: PropTypes.object,
	createCoin: PropTypes.func,
};

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

// UPDATE an existing fundraiser
const addCoinMutation = graphql(CreateCoinMutation, {
	props: ({ mutate }) => ({
		createCoin: ({variety, year, mint, mintage, keyDate, description}) => mutate({
			variables: { variety, year, mint, mintage, keyDate, description },
		}),
	}),
});

export default compose(
	connect(mapStateToProps),
	graphql(gql`
	query {
		coins {
			id
			variety {
				id
				name
				issue {
					name
					denomination {
						kind
					}
				}
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
`),
	addCoinMutation,
)(Coins);
