import React, { PropTypes } from "react";
import { gql } from 'react-apollo';
import './style.scss';

class DesignerSelect extends React.Component {
	render() {
		const { onChange, designer, designers } = this.props;

		return (
			<aside className="designer-select">
				<select onChange={onChange} value={designer}>
					<option value="">Designer</option>
					{ designers && designers.map(designer => {
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
	designer: PropTypes.string,
	designers: PropTypes.array,
	onChange: PropTypes.func,
};

DesignerSelect.fragments = {
	entry: gql`
		fragment DesignerSelectDesigner on Designer {
			id
			name
		}
	`,
};

export default DesignerSelect;
