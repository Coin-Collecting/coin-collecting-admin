import React, { PropTypes } from "react";
import { gql } from 'react-apollo';

import './style.scss';

class VarietySelect extends React.Component {
	render() {
		const { onChange, variety, varieties } = this.props;
		return (
			<aside className="variety-select">
				<select onChange={onChange} value={variety}>
					<option value="">Variety</option>
					{ varieties && varieties.length > 0 ?
						varieties.map(variety => {
							return (
								<option
									value={variety.id}
									key={'variety:' + variety.id}
								>
									{
										variety.issue.name.replace(/_/g, ' ').toLowerCase() + ' ' +
										variety.name.replace(/_/g, ' ').toLowerCase() + ' - ' +
										variety.issue.denomination.kind.replace(/_/g, ' ').toLowerCase()
									}
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
	variety: PropTypes.string,
	varieties: PropTypes.array,
	onChange: PropTypes.func,
};

VarietySelect.fragments = {
	entry: gql`
		fragment VarietySelectVariety on Variety {
			id
			name
			issue {
				id
				name
				denomination {
					id
					kind
				}
			}
		}
	`,
};

export default VarietySelect;
