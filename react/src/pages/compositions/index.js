import React, { PropTypes } from "react";
import { compose, graphql, gql } from 'react-apollo';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import './style.scss';
const FontAwesome = require('react-fontawesome');
import AddComposition from '../../components/add-composition';
import { getCompositionString } from '../../util';

class Compositions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editIndex: null,
		};
	}

	render() {
		const { data, browser } = this.props;
		const { compositions } = data;
		let classes = ['compositions-page', browser.mediaType];

		return (
			<section className={classes.join(' ')}>
				<article className="create-composition-article">
					<h3>Add a composition</h3>
					<AddComposition
						sizeOverride={browser.greaterThan.medium ? 'extraSmall' : null}
						onSubmit={() => data.refetch()}
					/>
				</article>
					<article className="main-article">
						<p className="results-header clearfix">
							<span>Results ({compositions ? compositions.length : 0} of {compositions ? compositions.length : 0})</span>
						</p>
						<ul className="compositions-list">
							{ compositions && compositions.length > 0 ?
								compositions.map((composition, index) => {
									return (
										<li key={'composition:' + composition.id} className="composition-list-item">
											<p>
												<FontAwesome
													name="pencil"
													onClick={() => {
														this.setState({
															editIndex: this.state.editIndex === index ? null : index,
														})
													}}
												/>
												<span className="name">{getCompositionString(composition)}</span>
											</p>
											{ this.state.editIndex === index ?
												<AddComposition
													sizeOverride={browser.greaterThan.small ? 'medium' : 'extraSmall'}
													onSubmit={() => {
														data.refetch();
														this.setState({
															editIndex: null,
														})
													}}
													composition={composition}
												/>
											: null }
										</li>
									)
								})
								:
								<p className="empty">Time to start composing!</p>
							}
						</ul>
					</article>
			</section>
		);
	}
}

Compositions.propTypes = {
	data: PropTypes.object,
};

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

export default compose(
	connect(mapStateToProps),
	graphql(gql`
		query {
			compositions {
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
		}
	`),
)(Compositions);
