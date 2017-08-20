import React, { PropTypes } from "react";
import { graphql, compose } from 'react-apollo';
import { CompositionsQuery } from '../../queries';
import './style.scss';
import { getCompositionString } from '../../util';

class CompositionSelect extends React.Component {
	render() {
		const { data, onChange, composition } = this.props;
		const { compositions } = data;
		if (data.loading) return (<span/>);

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
	data: PropTypes.object,
	composition: PropTypes.string,
	onChange: PropTypes.func,
};

export default compose(
	graphql(CompositionsQuery),
)(CompositionSelect);
