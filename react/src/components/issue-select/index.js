import React, { PropTypes } from "react";
import { graphql } from 'react-apollo';
import { IssuesQuery } from '../../queries';
import './style.scss';

class IssueSelect extends React.Component {
	render() {
		const { data, onChange, issue } = this.props;
		const { issues } = data;
		if (data.loading) return (<span/>);

		return (
			<aside className="issue-select">
				<select onChange={onChange} value={issue}>
					<option value="">Issue</option>
					{ issues.map(issue => {
						return (
							<option
								value={issue.id}
								key={'issue:' + issue.id}
							>
								{
									issue.name.replace(/_/g, ' ').toLowerCase() + ' - ' +
									issue.denomination.kind.replace(/_/g, ' ').toLowerCase()
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
	data: PropTypes.object,
	issue: PropTypes.string,
	onChange: PropTypes.func,
};

export default graphql(IssuesQuery)(IssueSelect);
