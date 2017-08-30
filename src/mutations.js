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

export const UpdateIssueMutation = gql`
	mutation (
		$id: String!,
		$name: String!,
		$description: String,
		$denomination: String!,
		$startYear: String!,
		$endYear: String!,
	) {
		updateIssue(
			id: $id,
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

export const UpdateVarietyMutation = gql`
	mutation (
		$id: String!,
		$name: String!,
		$description: String,
		$mass: String!,
		$diameter: String!,
		$issue: String!,
		$edge: String!,
		$composition: String!,
		$designer: String!,
	) {
		updateVariety(
			id: $id,
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

//gold, silver, copper, nickel, brass, zinc, steel, tin,
export const CreateCompositionMutation = gql`
	mutation (
		$gold: Float,
		$silver: Float,
		$copper: Float,
		$nickel: Float,
		$brass: Float,
		$zinc: Float,
		$steel: Float,
		$tin: Float,
	) {
		createComposition (
			gold: $gold,
			silver: $silver,
			copper: $copper,
			nickel: $nickel,
			brass: $brass,
			zinc: $zinc,
			steel: $steel,
			tin: $tin,
		) {
			id
		}
	}
`;

export const UpdateCompositionMutation = gql`
	mutation (
		$id: String!,
		$gold: Float,
		$silver: Float,
		$copper: Float,
		$nickel: Float,
		$brass: Float,
		$zinc: Float,
		$steel: Float,
		$tin: Float,
	) {
		updateComposition (
			id: $id,
			gold: $gold,
			silver: $silver,
			copper: $copper,
			nickel: $nickel,
			brass: $brass,
			zinc: $zinc,
			steel: $steel,
			tin: $tin,
		) {
			id
		}
	}
`;

export const LoginMutation = gql`
	mutation (
		$username: String!,
		$password: String!,
	) {
		loginUser (
			username: $username,
			password: $password,
		)
	}
`;