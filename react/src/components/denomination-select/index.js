import React, { PropTypes } from "react";
import { graphql } from 'react-apollo';
import { DenominationsQuery } from '../../queries';
import './style.scss';

class DenominationSelect extends React.Component {
	render() {
		const { data, onChange, denomination } = this.props;
		const { denominations } = data;
		if (data.loading) return (<span/>);

		return (
			<aside className="denomination-select">
				<select onChange={onChange} value={denomination}>
					<option value="">Denomination</option>
					{ denominations.map(den => {
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
	data: PropTypes.object,
	denomination: PropTypes.string,
	onChange: PropTypes.func,
};

export default graphql(DenominationsQuery)(DenominationSelect);
