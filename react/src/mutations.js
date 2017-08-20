import { gql } from 'react-apollo';

export const CreateCoinMutation = gql`
	mutation (
		$variety: String!,
		$year: String!,
		$mint: String!,
		$mintage: Float!,
		$keyDate: Boolean!,
		$description: String,
	) {
		createCoin(
			variety: $variety,
			year: $year,
			mint: $mint,
			mintage: $mintage,
			keyDate: $keyDate,
			description: $description
		) {
			id
		}
	}
`;

export const CreateIssueMutation = gql`
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

export const CreateVarietyMutation = gql`
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
