import React, { PropTypes } from "react";
import { gql } from 'react-apollo';
import './style.scss';

class IssueSelect extends React.Component {
	render() {
		const { onChange, issue, issues } = this.props;

		return (
			<aside className="issue-select">
				<select onChange={onChange} value={issue}>
					<option value="">Issue</option>
					{ issues && issues.map(issue => {
						return (
							<option
								value={issue.id}
								key={'issue:' + issue.id}
							>
								{
									issue.name.replace(/_/g, ' ').toLowerCase() + ' - ' +
									issue.denomination.kind.replace(/_/g, ' ').toLowerCase() + ' ' +
									issue.startYear + '-' + issue.endYear
								}
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

IssueSelect.propTypes = {
	issue: PropTypes.string,
	issues: PropTypes.array,
	onChange: PropTypes.func,
};

IssueSelect.fragments = {
	entry: gql`
		fragment IssueSelectIssue on Issue {
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
	`,
};

export default IssueSelect;
