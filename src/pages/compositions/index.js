import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
const FontAwesome = require('react-fontawesome');
import AddComposition from '../../components/add-composition';
import { getCompositionString } from '../../util';
import DefaultLayout from '../../layouts/default';

class Compositions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editIndex: null,
		};
	}

	render() {
		const { data, browser, location, me } = this.props;
		const { compositions } = data;
		let classes = ['compositions-page', browser.mediaType];

		return (
			<DefaultLayout location={location}>
				<section className={classes.join(' ')}>
					{ me.admin ?
						<article className="create-composition-article">
							<h3>Add a composition</h3>
							<AddComposition
								sizeOverride={browser.greaterThan.medium ? 'extraSmall' : null}
								onSubmit={() => data.refetch()}
							/>
						</article>
					: null }
						<article className={me.admin ? "main-article" : "main-article-no-admin"}>
							<p className="results-header clearfix">
								<span>Results ({compositions ? compositions.length : 0} of {compositions ? compositions.length : 0})</span>
							</p>
							{ data.loading ? <Spinner/> : null }
							<ul className="compositions-list">
								{ compositions && compositions.length && !data.loading > 0 ?
									compositions.map((composition, index) => {
										return (
											<li key={'composition:' + composition.id} className="composition-list-item">
												<p>
													{ me.admin ?
														<FontAwesome
															name="pencil"
															onClick={() => {
                                this.setState({
                                  editIndex: this.state.editIndex === index ? null : index,
                                })
                              }}
														/>
													: null }
													<span className="name">{getCompositionString(composition)}</span>
												</p>
												{ this.state.editIndex === index ?
													<AddComposition
														sizeOverride={browser.greaterThan.small ? 'medium' : 'extraSmall'}
														onSubmit={() => {
															data.refetch();
															this.setState({
																editIndex: null,
															})
														}}
														composition={composition}
													/>
												: null }
											</li>
										)
									})
									:
									<p className="empty">Time to start composing!</p>
								}
							</ul>
						</article>
				</section>
			</DefaultLayout>
		);
	}
}

Compositions.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
	me: PropTypes.object,
};

function mapStateToProps(state){
	return {
		browser: state.browser,
		me: state.reducers.me,
	}
}

export default compose(
	connect(mapStateToProps),
	graphql(gql`
		query {
			compositions {
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
		}
	`),
)(Compositions);
