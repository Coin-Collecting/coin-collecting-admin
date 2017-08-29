import React, { PropTypes } from "react";
import { gql } from 'react-apollo';
import './style.scss';

class EdgeSelect extends React.Component {
	render() {
		const { onChange, edge, edges } = this.props;

		return (
			<aside className="edge-select">
				<select onChange={onChange} value={edge}>
					<option value="">Edge</option>
					{ edges && edges.map(edge => {
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
	edge: PropTypes.string,
	edges: PropTypes.array,
	onChange: PropTypes.func,
};

EdgeSelect.fragments = {
	entry: gql`
		fragment EdgeSelectEdge on Edge {
			id
			type
			note
		}
	`,
};

export default EdgeSelect;
