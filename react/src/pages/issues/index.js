import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import AddIssue from '../../components/add-issue';
import './style.scss';
const FontAwesome = require('react-fontawesome');

class Issues extends React.Component {
	render() {
		const { data, browser } = this.props;
		const { issues } = data;
		let classes = ['issues-page', browser.mediaType];

		return (
			<section className={classes.join(' ')}>
				<article className="create-issue-article">
					<h3>Create A New Issue</h3>
					<AddIssue
						sizeOverride={browser.greaterThan.medium ? 'small' : null}
						onSubmit={() => this.props.data.refetch()}
					/>
				</article>
				{ issues ?
					<article className="main-article">
						<h3>Find an Issue</h3>
						<div className="filters clearfix">
							<input type="text" placeholder="Search"/>
							<div className="sort-by">
								<div className="select-wrapper">
										<select>
											<option value="oldest">Oldest First</option>
											<option value="newest">Newest First</option>
											<option value="alphabetical">Alphabetical</option>
											<option value="denomination">Denomination</option>
										</select>
								</div>
							</div>
						</div>
						<p className="results-header clearfix">
							<span>Results ({issues.length} of {issues.length})</span>
						</p>
						<ul className="issues-list">
							{ issues.length > 0 ?
								issues.map(issue => {
									return (
										<li key={'issue:' + issue.id}>
											<p>
												<FontAwesome name="pencil"/>
												<span className="name">{ issue.name }</span>
												<span className="denomination">
												{ issue.denomination.kind.replace('_', ' ').toLowerCase() }
											</span>
												<span className="year start-year">{ issue.startYear }</span>
												<span className="year end-year">{ issue.endYear }</span>

												<span className="description">{ issue.description }</span>
											</p>
										</li>
									)
								})
								:
								<p className="empty">Man, it's hard to find someone without issues...</p>
							}
						</ul>
					</article>
				: null }
			</section>
		);
	}
}

Issues.propTypes = {
	data: PropTypes.object,
	addIssue: PropTypes.func,
};

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

export default compose(
	connect(mapStateToProps),
	graphql(gql`
		query {
			issues {
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
		}
	`),
)(Issues);
