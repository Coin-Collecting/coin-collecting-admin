import React, { PropTypes } from "react";
import { graphql, compose, gql } from 'react-apollo';
import { getCompositionString } from '../../util';
import { VarietiesQuery, IssuesQuery, CreateVarietyQuery } from '../../queries';
import IssueSelect from '../../components/issue-select';
import EdgeSelect from '../../components/edge-select';
import CompositionSelect from '../../components/composition-select';
import DesignerSelect from '../../components/designer-select';

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
		const { data } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { varieties, issues } = data;

		return (
			<div className="varieties-page">
				<h1>Variety Page</h1>
				<article>
				<h3>Create New Variety</h3>
				<ul className="input-list">
					<li>
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={e => this.setState({
								name: e.target.value,
							})}
						/>
					</li>
					<li>
						<IssueSelect
							issue={this.state.issue}
							issues={issues}
							onChange={e => this.setState({
								issue: e.target.value,
							})}
						/>
					</li>
					<li>
						<EdgeSelect
							issue={this.state.edge}
							onChange={e => this.setState({
								edge: e.target.value,
							})}
						/>
					</li>
					<li>
						<CompositionSelect
							issue={this.state.composition}
							onChange={e => this.setState({
								composition: e.target.value,
							})}
						/>
					</li>
					<li>
						<DesignerSelect
							issue={this.state.designer}
							onChange={e => this.setState({
								designer: e.target.value,
							})}
						/>
					</li>
					<li>
						<input
							type="text"
							placeholder="Description"
							value={this.state.description}
							onChange={e => this.setState({
								description: e.target.value,
							})}
						/>
					</li>
					<li>
						<input
							type="text"
							placeholder="Mass"
							value={this.state.mass}
							onChange={e => this.setState({
								mass: e.target.value,
							})}
						/>
					</li>
					<li>
						<input
							type="text"
							placeholder="Diameter"
							value={this.state.diameter}
							onChange={e => this.setState({
								diameter: e.target.value,
							})}
						/>
					</li>
					<li>
						<button onClick={() => this.addVariety()}>Add Variety</button>
					</li>
				</ul>
				</article>
				<article>
					<h3>Varieties</h3>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Issue</th>
								<th>Description</th>
								<th>Mass</th>
								<th>Diameter</th>
								<th>Edge</th>
								<th>Composition</th>
								<th>Designer</th>
								<th>Images</th>
							</tr>
						</thead>
						<tbody>
						{ varieties.map(variety => {
							return (
								<tr key={'variety:' + variety.id}>
									<td>{ variety.name }</td>
									<td>{ variety.issue.name }</td>
									<td>{ variety.description }</td>
									<td>{ variety.mass }</td>
									<td>{ variety.diameter }</td>
									<td>{ variety.edge.type }</td>
									<td>{ getCompositionString(variety.composition) }</td>
									<td>{ variety.designer.name }</td>
									<td>{ variety.images.obverse } <br/> { variety.images.reverse}</td>
								</tr>
							)
						})}
						</tbody>
					</table>
				</article>
			</div>
		);
	}
}

Varieties.propTypes = {
	data: PropTypes.object,
	addVariety: PropTypes.func,
};

// UPDATE an existing fundraiser
const addVarietyMutation = graphql(CreateVarietyQuery, {
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
			issues {
				...IssueSelectIssue
			}
		}
		${IssueSelect.fragments.entry}
	`),
	addVarietyMutation,
)(Varieties);
