import React, { PropTypes } from "react";
import { graphql, gql, compose } from 'react-apollo';
import {connect} from 'react-redux';
import { CreateCoinMutation } from '../../mutations';
import Spinner from '../../components/spinner';
import AddCoin from '../../components/add-coin';
const FontAwesome = require('react-fontawesome');
import DefaultLayout from '../../layouts/default';
import queryString from 'query-string';

import './style.scss';

const DEFAULT_COIN_COUNT = 25;

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
			isLoading: false,
			coinCount: 5,
		}
	}

	componentWillMount() {
    let { history, location } = this.props;
    let { count } = queryString.parse(location.search);
    if (!count) this.updateCount();
	}

	updateCount(count) {
		if (!count) count = DEFAULT_COIN_COUNT;
    let { history } = this.props;
    history.push({
      search: '?count=' + count,
    });
	}

	loadMore() {
		let { data, location } = this.props;
		let { edges } = data.coins;
    let { count } = queryString.parse(location.search);

		this.setState({isLoading: true});

    data.fetchMore({
      variables: {
        cursor: edges[edges.length - 1].cursor,
        count,
        offset: 0,
      },
      updateQuery(previousResult, {fetchMoreResult}) {
        return {
          coins: {
            edges: [
              ...previousResult.coins.edges,
              ...fetchMoreResult.coins.edges,
            ],
            pageInfo: fetchMoreResult.coins.pageInfo,
            totalCount: fetchMoreResult.coins.totalCount,
          },
        };
      },
    }).then(() => this.setState({isLoading: false}));
	}

	render() {
		const { data, browser, location, me } = this.props;
    let { count } = queryString.parse(location.search);
		const { coins } = data;
		let classes = ['coins-page', browser.mediaType];

		return (
			<DefaultLayout location={location}>
				<section className={classes.join(' ')}>
          { me.admin ?
						<article className="create-coin-article">
							<h3>Create A New Coin</h3>
							<AddCoin
								sizeOverride={browser.greaterThan.medium ? 'small' : null}
								onSubmit={() => this.props.data.refetch()}
							/>
						</article>
					: null }
					<article className={me.admin ? "main-article" : "main-article-no-admin"}>
						<h3>Coins</h3>
						{/*<div className="filters clearfix">
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
						</div>*/}
						<div className="sub-filters">
							<p className="results-header clearfix">
								<span>Results ({coins ? coins.edges.length : 0} of {coins ? coins.totalCount : 0})</span>
							</p>
							<div className="count-select-wrapper">
								<span className="label">Per Page:</span>
								<div className="select-wrapper">
									<select
										onChange={e => this.updateCount(e.target.value)}
										value={count}
									>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
								</div>
							</div>
						</div>
						<ul className="coins-list">
							{ coins && coins.edges.length && !data.loading > 0 ?
								coins.edges.map(({ node }) => {
									return (
										<li key={'coin:' + node.id}>
											<p>
                        { me.admin ?
													<FontAwesome name="pencil"/>
                          : null }
												<a
													className="ebay"
													target="_blank"
													href={`https://www.ebay.com/sch/i.html?_nkw=${node.year}+${node.mint.mark}+${node.variety.name.replace(/ /g, '+')}&LH_BIN=1&_sop=15`}
												>
													<FontAwesome name="legal"/>
												</a>
												<span className="year">
													{ node.year + '-' + node.mint.mark }
												</span>
												<span className="name">{ node.variety.issue.name + ' ' + node.variety.name }</span>
												<span className="mintage">Minted: {node.mintage}</span>
												<span className="description">{node.description}</span>
											</p>
										</li>
									)
								})
								:
								<p className="empty">Make a coin or two, there are none!</p>
							}
						</ul>
            { data.loading || this.state.isLoading ? <Spinner/> : null }
            { coins && !data.loading && coins.pageInfo.hasNextPage ?
							<div className="load-more-container">
								<button onClick={() => this.loadMore()} disabled={this.state.isLoading}>Load More</button>
							</div>
              : null }
					</article>
				</section>
			</DefaultLayout>
		);
	}
}

Coins.propTypes = {
	location: PropTypes.object,
	data: PropTypes.object,
	createCoin: PropTypes.func,
	me: PropTypes.object,
};

function mapStateToProps(state){
	return {
		browser: state.browser,
		me: state.reducers.me,
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

let CoinsQuery = gql`
    query ($count: Int, $cursor: String, $offset: Int)
		{
        coins(count: $count, cursor: $cursor, offset: $offset) {
            totalCount
            edges {
                node {
                    id
                    variety {
                        id
                        name
                        issue {
                            id
                            name
                            denomination {
                                id
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
                cursor
            }
            pageInfo {
                startCursor
                endCursor
                hasNextPage
            }
        }
    }
`;

let coinQueryWithData = graphql(CoinsQuery, {
  options: (props) => {
  	let { count } = queryString.parse(props.location.search);
  	return {
			variables: {
				count: parseInt(count),
			}
  	}
  }
});

export default compose(
	connect(mapStateToProps),
	coinQueryWithData,
	addCoinMutation,
)(Coins);
