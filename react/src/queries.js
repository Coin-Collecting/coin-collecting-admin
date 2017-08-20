import { gql } from 'react-apollo';

export const DesignersQuery = gql`
	query {
		designers {
			id
			name
		}
	}
`;

export const CompositionsQuery = gql`
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
`;

export const EdgesQuery = gql`
	query {
		edges {
			id
			type
			note
		}
	}
`;

export const DenominationsQuery = gql`
	query {
		denominations {
			id
			kind
			val
		}
	}
`;

export const CreateIssueQuery = gql`
	mutation (
	$name: String!,
	$description: String,
	$denomination: String!,
	$startYear: String!,
	$endYear: String!,
	) {
		createIssue(
			name: $name,
			description: $description,
			denomination: $denomination,
			startYear: $startYear,
			endYear: $endYear
		) {
			id
		}
	}
`;

export const IssuesQuery = gql`
	query {
		issues {
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
	}
`;

export const CreateVarietyQuery = gql`
	mutation (
	$name: String!,
	$description: String,
	$mass: String!,
	$diameter: String!,
	$issue: String!,
	$edge: String!,
	$composition: String!,
	$designer: String!,
	) {
		createVariety(
			name: $name,
			description: $description
			mass: $mass,
			diameter: $diameter,
			issue: $issue
			edge: $edge
			composition: $composition
			designer: $designer
			images: "1",
		) {
			id
		}
	}
`;

export const VarietiesQuery = gql`
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
`;
