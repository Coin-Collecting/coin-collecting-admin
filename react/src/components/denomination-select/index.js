import React, { PropTypes } from "react";
import { gql } from 'react-apollo';
import './style.scss';

class DenominationSelect extends React.Component {
	render() {
		const { onChange, denomination, denominations } = this.props;

		return (
			<aside className="denomination-select">
				<select onChange={onChange} value={denomination}>
					<option value="">Denomination</option>
					{ denominations && denominations.map(den => {
						return (
							<option
								value={den.id}
								key={'denom:' + den.id}
							>
								{ den.kind.replace(/_/g, ' ').toLowerCase() }
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

DenominationSelect.propTypes = {
	denomination: PropTypes.string,
	denominations: PropTypes.array,
	onChange: PropTypes.func,
};

DenominationSelect.fragments = {
	entry: gql`
		fragment DenominationSelectDenomination on Denomination {
			id
			kind
			val
		}
	`,
};

export default DenominationSelect;
