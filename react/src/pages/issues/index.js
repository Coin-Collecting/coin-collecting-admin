import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import Spinner from '../../components/spinner';
import AddIssue from '../../components/add-issue';
import './style.scss';
const FontAwesome = require('react-fontawesome');

class Issues extends React.Component {
	render() {
		const { data } = this.props;
		const { issues, denominations } = data;

		return (
			<section className="issues-page">
				{ issues ?
					<article>
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
								<p>What, nobody issued any coins?</p>
							}
						</ul>
					</article>
				: null }
				<article>
					<h3>Create A New Issue</h3>
					<AddIssue
						denominations={denominations}
						onSubmit={() => this.props.data.refetch()}
					/>
				</article>
			</section>
		);
	}
}

Issues.propTypes = {
	data: PropTypes.object,
	addIssue: PropTypes.func,
};

export default compose(
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
