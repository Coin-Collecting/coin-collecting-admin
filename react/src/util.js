export function getCompositionString(composition) {
	const {
		brass,
		copper,
		gold,
		nickel,
		silver,
		steel,
		tin,
		zinc,
	} = composition;
	let compString = '';

	Object.keys(composition).forEach(key => {
		if (composition[key] && key !== 'id' && key !== '__typename') {
			compString += `${Math.floor(composition[key] * 100)}% ${key} `
		}
	});

	return compString;
}
