import React, { PropTypes } from "react";
import { graphql, gql } from 'react-apollo';
import { getCompositionString } from '../../util';

import './style.scss';

class Varieties extends React.Component {
	render() {
		const { data } = this.props;
		if (data.loading) return (<div>Loading...</div>);
		const { varieties } = data;
		console.log({varieties});
		return (
			<article className="varieties-page">
				<h1>Varieties</h1>
				<hr/>
				<h3>Create New Variety</h3>
				<p>Not yet implemented</p>
				<hr/>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Mass</th>
							<th>Diameter</th>
							<th>Issue</th>
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
								<td>{ variety.description }</td>
								<td>{ variety.mass }</td>
								<td>{ variety.diameter }</td>
								<td>{ variety.issue.name }</td>
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
		);
	}
}

Varieties.propTypes = {
	data: PropTypes.object,
};

export default graphql(gql`
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

`)(Varieties);
