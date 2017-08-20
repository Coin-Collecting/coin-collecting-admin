import React, { PropTypes } from "react";
import { graphql, compose } from 'react-apollo';
import { EdgesQuery } from '../../queries';
import './style.scss';

class EdgeSelect extends React.Component {
	render() {
		const { data, onChange, edge } = this.props;
		const { edges } = data;
		if (data.loading) return (<span/>);

		return (
			<aside className="edge-select">
				<select onChange={onChange} value={edge}>
					<option value="">Edge</option>
					{ edges.map(edge => {
						return (
							<option
								value={edge.id}
								key={'edge:' + edge.id}
							>
								{ edge.type.replace(/_/g, ' ').toLowerCase() }
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

EdgeSelect.propTypes = {
	data: PropTypes.object,
	edge: PropTypes.string,
	onChange: PropTypes.func,
};

export default compose(
	graphql(EdgesQuery),
)(EdgeSelect);
