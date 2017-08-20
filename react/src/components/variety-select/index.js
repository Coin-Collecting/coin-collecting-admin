import React, { PropTypes } from "react";
import { gql } from 'react-apollo';

import './style.scss';

class VarietySelect extends React.Component {
	render() {
		const { data, onChange, variety, varieties } = this.props;
		return (
			<aside className="variety-select">
				<select onChange={onChange} value={variety}>
					<option value="">Variety</option>
					{ varieties.length > 0 ?
						varieties.map(variety => {
							return (
								<option
									value={variety.id}
									key={'variety:' + variety.id}
								>
									{ variety.name.replace(/_/g, ' ').toLowerCase() }
								</option>
							)
						})
					: null }
				</select>
			</aside>
		);
	}
}

VarietySelect.propTypes = {
	data: PropTypes.object,
	variety: PropTypes.string,
	varieties: PropTypes.array,
	onChange: PropTypes.func,
};

VarietySelect.fragments = {
	entry: gql`
		fragment VarietySelectVariety on Variety {
			id
			name
		}
	`,
};

export default VarietySelect;
