import React, { PropTypes } from "react";
import { graphql, gql } from 'react-apollo';

import './style.scss';

class Issues extends React.Component {
	render() {
		const { data } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { issues } = data;
		console.log({issues});
		return (
			<article className="issues-page">
				<h1>Issues</h1>
				<hr/>
				<h3>Create New Issue</h3>
				<p>Not yet implemented</p>
				<hr/>
				<table>
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
					{ issues.map(issue => {
						return (
							<tr key={'issue:' + issue.id}>
								<td>{ issue.name }</td>
								<td>{ issue.denomination.kind }</td>
								<td>{ issue.startYear }</td>
								<td>{ issue.endYear }</td>
								<td>{ issue.description }</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</article>
		);
	}
}

Issues.propTypes = {
	data: PropTypes.object,
};

export default graphql(gql`
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

`)(Issues);
