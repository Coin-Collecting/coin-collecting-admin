import React, { PropTypes } from "react";
import { graphql, compose, gql } from 'react-apollo';
import DenominationSelect from '../../components/select-boxes/denomination-select';
import { CreateIssueMutation } from '../../mutations';
import Spinner from '../../components/spinner';

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
		addIssue(this.state).then(res => this.props.data.refetch());
	}

	render() {
		const { data } = this.props;
		const { issues, denominations } = data;

		return (
			<section className="issues-page">
				<h1>Issue Page</h1>
				<article>
					<h3>Create New Issue</h3>
					{ !data.loading ?
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
									denominations={denominations}
									onChange={e => this.setState({
										denomination: e.target.value,
									})}
								/>
							</li>
							<li>
								<input
									placeholder="From Year"
									type="text"
									maxLength={4}
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
									maxLength={4}
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
					: null }
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

// UPDATE an existing fundraiser
const addIssueMutation = graphql(CreateIssueMutation, {
	props: ({ mutate }) => ({
		addIssue: ({name, description, denomination, startYear, endYear}) => mutate({
			variables: {
				name, description, denomination, startYear, endYear,
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
			denominations {...DenominationSelectDenomination}
		}
		${DenominationSelect.fragments.entry}
	`),
	addIssueMutation,
)(Issues);
