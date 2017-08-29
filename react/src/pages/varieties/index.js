import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import { graphql, compose, gql } from 'react-apollo';
import { getCompositionString } from '../../util';
import { CreateVarietyMutation } from '../../mutations';
import Spinner from '../../components/spinner';
import AddVariety from '../../components/add-variety';
const FontAwesome = require('react-fontawesome');

import './style.scss';

class Varieties extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: undefined,
			description: undefined,
			mass: undefined,
			diameter: undefined,
			issue: undefined,
			edge: undefined,
			composition: undefined,
			designer: undefined,
		}
	}

	addVariety() {
		const { addVariety } = this.props;
		addVariety(this.state).then(res => this.props.data.refetch());
	}

	render() {
		const { data, browser } = this.props;
		const { varieties } = data;
		let classes = [
			"varieties-page",
			browser.mediaType,
		];

		return (
			<div className={classes.join(' ')}>
				<article className="create-variety-article">
					<h3>Create New Variety</h3>
					<AddVariety
						sizeOverride={browser.greaterThan.medium ? 'small' : null}
						onSubmit={() => this.props.data.refetch()}
					/>
				</article>
				<article className="main-article">
					<h3>Find an Variety</h3>
					<div className="filters clearfix">
						<input type="text" placeholder="Search"/>
						<div className="sort-by">
							<div className="select-wrapper">
								<select>
									<option value="alphabetical">Alphabetical</option>
									<option value="issue">Issue</option>
									<option value="designer">Designer</option>
									<option value="mass">Mass</option>
									<option value="diameter">Diameter</option>
									<option value="edge">Edge</option>
								</select>
							</div>
						</div>
					</div>
					<p className="results-header clearfix">
						<span>Results ({varieties? varieties.length : 0} of {varieties ? varieties.length : 0})</span>
					</p>
					{ data.loading ? <Spinner/> : null }
					<ul className="varieties-list">
						{ varieties && varieties.length > 0 ?
							varieties.map((variety, index) => {
								return (
									<li key={'variety:' + variety.id} className="varieties-list-item">
										<p>
											<FontAwesome
												name="pencil"
												onClick={() => {
													this.setState({
														editIndex: this.state.editIndex === index ? null : index,
													})
												}}
											/>
											<span className="name">
												{ variety.name + ' ' + variety.issue.name }
												</span>
											<span>{ variety.edge.type + ' edge' }</span>
											<span>{ getCompositionString(variety.composition) }</span>
											<span>{ variety.designer.name }</span>
											<span>{ variety.mass + 'g / ' + variety.diameter + 'mm' }</span>
											<span className="description">{ variety.description }</span>
										</p>
										{ this.state.editIndex === index ?
											<AddVariety
												sizeOverride={browser.greaterThan.small ? 'small' : 'extraSmall'}
												onSubmit={() => {
													data.refetch();
													this.setState({
														editIndex: null,
													})
												}}
												variety={variety}
											/>
											: null }
									</li>
								)
							})
							:
							<p className="empty">You need more variety in your life...</p>
						}
					</ul>
				</article>
			</div>
		);
	}
}

Varieties.propTypes = {
	data: PropTypes.object,
	addVariety: PropTypes.func,
};

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

// UPDATE an existing fundraiser
const addVarietyMutation = graphql(CreateVarietyMutation, {
	props: ({ mutate }) => ({
		addVariety: ({
			name, description, mass, diameter, issue, edge, composition, designer,
		}) => mutate({
			variables: {
				name, description, mass, diameter, issue, edge, composition, designer,
			},
		}),
	}),
});

export default compose(
	connect(mapStateToProps),
	graphql(gql`
		query {
			varieties {
				id
				name
				description
				mass
				diameter
				issue {
					id
					name
					startYear
					endYear
					description
					denomination {
						id
						kind
						val
					}
				}
				edge {
					id
					type
				}
				composition {
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
				designer {
					id
					name
				}
				images {
					id
					obverse
					reverse
				}
			}
		}
	`),
	addVarietyMutation,
)(Varieties);
