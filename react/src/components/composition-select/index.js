import React, { PropTypes } from "react";
import { gql } from 'react-apollo';
import './style.scss';
import { getCompositionString } from '../../util';

class CompositionSelect extends React.Component {
	render() {
		const { onChange, composition, compositions } = this.props;

		return (
			<aside className="composition-select">
				<select onChange={onChange} value={composition}>
					<option value="">Composition</option>
					{ compositions.map(composition => {
						return (
							<option
								value={composition.id}
								key={'composition:' + composition.id}
							>
								{ getCompositionString(composition) }
							</option>
						)
					})}
				</select>
			</aside>
		);
	}
}

CompositionSelect.propTypes = {
	composition: PropTypes.string,
	compositions: PropTypes.array,
	onChange: PropTypes.func,
};

CompositionSelect.fragments = {
	entry: gql`
		fragment CompositionSelectComposition on Composition {
			id
			gold
			steel
			silver
			copper
			zinc
			nickel
			tin
			brass
		}
	`,
};

export default CompositionSelect;
