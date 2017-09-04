import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import AddIssue from '../../components/add-issue';
import './style.scss';
const FontAwesome = require('react-fontawesome');
import DefaultLayout from '../../layouts/default';

class Issues extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editIndex: null,
		};
	}

	render() {
		const { data, browser, location, me } = this.props;
		const { issues } = data;
		let classes = ['issues-page', browser.mediaType];

		return (
			<DefaultLayout location={location}>
				<section className={classes.join(' ')}>
					{ me.admin ?
						<article className="create-issue-article">
							<h3>Create A New Issue</h3>
							<AddIssue
								sizeOverride={browser.greaterThan.medium ? 'small' : null}
								onSubmit={() => this.props.data.refetch()}
							/>
						</article>
					: null }
					<article className={me.admin ? "main-article" : "main-article-no-admin"}>
						<h3>Issues</h3>
						{/* <div className="filters clearfix">
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
						</div> */}
						<p className="results-header clearfix">
							<span>Results ({issues ? issues.length : 0} of {issues ? issues.length : 0})</span>
						</p>
						{ data.loading ? <Spinner/> : null }
						<ul className="issues-list">
							{ issues && issues.length && !data.loading > 0 ?
								issues.map((issue, index) => {
									return (
										<li key={'issue:' + issue.id} className="issue-list-item">
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
												<span className="name">{ issue.name }</span>
												<span className="denomination">
												{ issue.denomination.kind.replace('_', ' ').toLowerCase() }
											</span>
												<span className="year start-year">{ issue.startYear }</span>
												<span className="year end-year">{ issue.endYear }</span>

												<span className="description">{ issue.description }</span>
											</p>
											{ this.state.editIndex === index ?
												<AddIssue
													sizeOverride={browser.greaterThan.small ? 'small' : 'extraSmall'}
													onSubmit={() => {
														data.refetch();
														this.setState({
															editIndex: null,
														})
													}}
													issue={issue}
												/>
												: null }
										</li>
									)
								})
								:
								<p className="empty">Man, it's hard to find someone without issues...</p>
							}
						</ul>
					</article>
				</section>
			</DefaultLayout>
		);
	}
}

Issues.propTypes = {
	data: PropTypes.object,
	me: PropTypes.object,
	location: PropTypes.object,
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
