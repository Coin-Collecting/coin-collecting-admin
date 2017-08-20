import React, { PropTypes } from "react";
import { graphql, gql, compose } from 'react-apollo';
import DenominationSelect from '../../components/denomination-select';

import './style.scss';

class Issues extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: undefined,
			denomination: undefined,
			startYear: undefined,
			endYear: undefined,
			description: undefined,
		}
	}

	addIssue() {
		const { addIssue } = this.props;

		addIssue(this.state).then(res => {
			console.log(res);
		})
	}

	render() {
		const { data, addIssue } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { issues } = data;
		console.log({issues});

		return (
			<div className="issues-page">
				<h1>Issue Page</h1>
				<article>
					<h3>Create New Issue</h3>
					<ul className="input-list">
						<li>
							<input
								type="text"
								placeholder="Name"
								value={this.state.name}
								onChange={e => this.setState({
									name: e.target.value,
								})}
							/>
						</li>
						<li>
							<DenominationSelect
								denomination={this.state.denomination}
								onChange={e => this.setState({
									denomination: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								placeholder="From Year"
								type="text"
								value={this.state.startYear}
								onChange={e => this.setState({
									startYear: e.target.value,
								})}
							/>
						</li>
						<li>
							<input
								placeholder="To Year"
								type="text"
								value={this.state.endYear}
								onChange={e => this.setState({
									endYear: e.target.value,
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
							<button onClick={() => this.addIssue()}>Add Issue</button>
						</li>
					</ul>
				</article>
				<article>
					<h3>Issues</h3>
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
			</div>
		);
	}
}

Issues.propTypes = {
	data: PropTypes.object,
	addIssue: PropTypes.func,
};


// UPDATE an existing fundraiser
const addIssueMutation = graphql(
	gql`
		mutation (
			$name: String!,
			$description: String,
			$denomination: String!,
			$startYear: String!,
			$endYear: String!,
		) {
			createIssue(
				name: $name,
				description: $description,
				denomination: $denomination,
				startYear: $startYear,
				endYear: $endYear
			) {
				id
			}
		}
 `, {
	props: ({ mutate }) => ({
		addIssue: ({name, description, denomination, startYear, endYear}) => mutate({
			variables: {
				name,
				description,
				denomination,
				startYear,
				endYear,
			},
		}),
	}),
});

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
	addIssueMutation,
)(Issues);
