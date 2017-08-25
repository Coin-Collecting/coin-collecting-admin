import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import Spinner from '../../components/spinner';
import AddIssue from '../../components/add-issue';
import './style.scss';

class Issues extends React.Component {
	render() {
		const { data } = this.props;
		const { issues, denominations } = data;

		return (
			<section className="issues-page">
				<h1>Issue Page</h1>
				<article>
					<h3>Create New Issue</h3>
					<AddIssue
						denominations={denominations}
						onSubmit={() => this.props.data.refetch()}
					/>
				</article>
				<article>
					<h3>Issues</h3>
					<table className="branded-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Denomination</th>
								<th>From</th>
								<th>To</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
						{ data.loading ?
							<tr className="loading-row"><td colSpan="9"><Spinner/></td></tr>
						: null }
						{ issues && issues.length > 0 ?
							issues.map(issue => {
								return (
									<tr key={'issue:' + issue.id}>
										<td>{ issue.name }</td>
										<td>{ issue.denomination.kind }</td>
										<td>{ issue.startYear }</td>
										<td>{ issue.endYear }</td>
										<td>{ issue.description }</td>
									</tr>
								)
							})
							:
							<tr className="empty-row">
								<td colSpan="7">What, nobody issued any coins?</td>
							</tr>
						}
						</tbody>
					</table>
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
