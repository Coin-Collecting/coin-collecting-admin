import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import { graphql, compose, gql } from 'react-apollo';
import './style.scss';
import { CreateVarietyMutation, UpdateVarietyMutation } from '../../mutations';
import IssueSelect from '../select-boxes/issue-select';
import EdgeSelect from '../select-boxes/edge-select';
import CompositionSelect from '../select-boxes/composition-select';
import DesignerSelect from '../select-boxes/designer-select';

class AddVariety extends React.Component {
	constructor(props) {
		super(props);
		if (props.variety) {
			let {
				name, issue, edge,
				composition, designer, description,
				mass, diameter, id,
			} = props.variety;
			this.state = {
				name: name ? name : '',
				issue: issue ? issue.id : '',
				edge: edge ? edge.id : '',
				composition: composition ? composition.id : '',
				designer: designer ? designer.id : '',
				description: description ? description : '',
				mass: mass ? mass : '',
				diameter: diameter ? diameter : '',
				id,
				error: [],
			}
		} else {
			this.state = {
				name: '',
				issue: '',
				edge: '',
				composition: '',
				designer: '',
				description: '',
				mass: '',
				diameter: '',
				error: [],
			}
		}
	}

	// TODO: Move validation to server
	isValid() {
		let {
			name,
			issue,
			edge,
			composition,
			designer,
			mass,
			diameter,
		} = this.state;

		return !!name &&
			!!issue &&
			!!edge &&
			!!composition &&
			!!designer &&
			!!mass &&
			!!diameter;
	}

	addVariety() {
		const { addVariety, onSubmit } = this.props;
		if (this.isValid()) {
			addVariety(this.state).then(() => {
				this.setState({
					name: '',
					issue: '',
					edge: '',
					composition: '',
					designer: '',
					description: '',
					mass: '',
					diameter: '',
					error: [],
				});
				onSubmit();
			});
		}
	}

	updateVariety() {
		const { updateVariety, onSubmit } = this.props;
		updateVariety(this.state)
			.then(() => onSubmit())
			.catch(e => {
				let { graphQLErrors } = e;
				this.setState({error: graphQLErrors});
			});
	}

	render() {
		let { data, browser, sizeOverride, variety } = this.props;
		let { error } = this.state;
		let { issues, edges, compositions, designers } = data;
		let classes = [
			'add-variety-component',
			sizeOverride ? sizeOverride : browser.mediaType,
		];

		return (
			<div className={classes.join(' ')}>
				<ul className="input-list">
					<li className="name">
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={e => this.setState({
								name: e.target.value,
							})}
						/>
					</li>
					<li className="issue">
						<div className="select-wrapper">
							<IssueSelect
								issue={this.state.issue}
								issues={issues}
								onChange={e => this.setState({
									issue: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="edge">
						<div className="select-wrapper">
							<EdgeSelect
								edge={this.state.edge}
								edges={edges}
								onChange={e => this.setState({
									edge: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="composition">
						<div className="select-wrapper">
							<CompositionSelect
								composition={this.state.composition}
								compositions={compositions}
								onChange={e => this.setState({
									composition: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="designer">
						<div className="select-wrapper">
							<DesignerSelect
								designer={this.state.designer}
								designers={designers}
								onChange={e => this.setState({
									designer: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="description">
						<input
							type="text"
							placeholder="Description"
							value={this.state.description}
							onChange={e => this.setState({
								description: e.target.value,
							})}
						/>
					</li>
					<li className="mass">
						<input
							type="text"
							placeholder="Mass"
							value={this.state.mass}
							onChange={e => this.setState({
								mass: e.target.value,
							})}
						/>
					</li>
					<li className="diameter">
						<input
							type="text"
							placeholder="Diameter"
							value={this.state.diameter}
							onChange={e => this.setState({
								diameter: e.target.value,
							})}
						/>
					</li>
					<li className="button">
						{ variety ?
							<button onClick={() => this.updateVariety()}>
								Edit
							</button>
							:
							<button onClick={() => this.addVariety()}>
								Add
							</button>
						}
					</li>
					{ error.length > 0 ?
						<li className="error-item">
							<p className="error-msg">{error[0].message}</p>
						</li>
						: null }
				</ul>
			</div>
		);
	}
}

AddVariety.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	breakpoint: PropTypes.object,
	sizeOverride: PropTypes.string,
	variety: PropTypes.object,
	addVariety: PropTypes.func,
	updateVariety: PropTypes.func,
};

// UPDATE an existing fundraiser
const addVarietyMutation = graphql(CreateVarietyMutation, {
	props: ({ mutate }) => ({
		addVariety: ({ name, issue, edge,
								 composition, designer, description,
								 mass, diameter,
							 }) => mutate({
			variables: {
				name, issue, edge,
				composition, designer, description,
				mass: parseFloat(mass),
				diameter: parseFloat(diameter),
			},
		}),
	}),
});

// UPDATE an existing fundraiser
const updateVarietyMutation = graphql(UpdateVarietyMutation, {
	props: ({ mutate }) => ({
		updateVariety: ({ name, issue, edge,
									 composition, designer, description,
									 mass, diameter, id,
								 }) => mutate({
			variables: {
				name, issue, edge,
				composition, designer, description,
				mass: parseFloat(mass), diameter: parseFloat(diameter), id,
			},
		}),
	}),
});

function mapStateToProps(state){
	return {
		browser: state.browser
	}
}

export default compose(
	connect(mapStateToProps),
	graphql(gql`
		query {
			issues {...IssueSelectIssue}
			edges {...EdgeSelectEdge}
			compositions {...CompositionSelectComposition}
			designers {...DesignerSelectDesigner}
		}
		${IssueSelect.fragments.entry}
		${EdgeSelect.fragments.entry}
		${CompositionSelect.fragments.entry}
		${DesignerSelect.fragments.entry}
	`),
	addVarietyMutation,
	updateVarietyMutation,
)(AddVariety);
