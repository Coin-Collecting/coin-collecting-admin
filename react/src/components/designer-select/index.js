import React, { PropTypes } from "react";
import { graphql, compose } from 'react-apollo';
import { DesignersQuery } from '../../queries';
import './style.scss';

class DesignerSelect extends React.Component {
	render() {
		const { data, onChange, designer } = this.props;
		const { designers } = data;
		if (data.loading) return (<span/>);

		return (
			<aside className="designer-select">
				<select onChange={onChange} value={designer}>
					<option value="">Designer</option>
					{ designers.map(designer => {
						return (
							<option
								value={designer.id}
								key={'designer:' + designer.id}
							>
								{ designer.name }
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

DesignerSelect.propTypes = {
	data: PropTypes.object,
	designer: PropTypes.string,
	onChange: PropTypes.func,
};

export default compose(
	graphql(DesignersQuery),
)(DesignerSelect);
