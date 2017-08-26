import React, { PropTypes } from "react";
import { gql } from 'react-apollo';

import './style.scss';

class MintSelect extends React.Component {
	render() {
		const { onChange, mint, mints } = this.props;
		return (
			<aside className="mint-select">
				<select onChange={onChange} value={mint}>
					<option value="">Mint</option>
					{ mints && mints.length > 0 ?
						mints.map(mint => {
							return (
								<option
									value={mint.id}
									key={'mint:' + mint.id}
								>
									{ mint.name.replace(/_/g, ' ').toLowerCase() + ' - ' + mint.mark }
								</option>
							)
						})
					: null }
				</select>
			</aside>
		);
	}
}

MintSelect.propTypes = {
	mint: PropTypes.string,
	mints: PropTypes.array,
	onChange: PropTypes.func,
};

MintSelect.fragments = {
	entry: gql`
		fragment MintSelectMint on Mint {
			id
			mark
			name
		}
	`,
};

export default MintSelect;
