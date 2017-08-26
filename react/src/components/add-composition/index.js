import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import { graphql, compose } from 'react-apollo';
import './style.scss';
import { CreateCompositionMutation } from '../../mutations';

class AddComposition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gold: '',
			silver: '',
			copper: '',
			nickel: '',
			brass: '',
			zinc: '',
			steel: '',
			tin: '',
		}
	}

	// TODO: Move validation to server
	isValid() {
		let { gold, silver, copper, nickel, brass, zinc, steel, tin } = this.state;

		let equalOne =
			parseFloat(gold || 0) +
			parseFloat(silver || 0) +
			parseFloat(copper || 0) +
			parseFloat(nickel || 0) +
			parseFloat(brass || 0) +
			parseFloat(zinc || 0) +
			parseFloat(steel || 0) +
			parseFloat(tin || 0) === 1;

		if (!equalOne) {
			this.setState({
				error: 'Total must equal 1',
			});
		}

		let atLeastOne = gold || silver || copper || nickel || brass || zinc || steel || tin;
		return equalOne && atLeastOne;
	}

	addComposition() {
		const { addComposition, onSubmit } = this.props;
		if (this.isValid()) {
			this.setState({error: null});
			addComposition(this.state).then(() => {
				this.setState({
					gold: '',
					silver: '',
					copper: '',
					nickel: '',
					brass: '',
					zinc: '',
					steel: '',
					tin: '',
				});
				onSubmit();
			});
		}

	}

	render() {
		let { data, browser, sizeOverride } = this.props;
		let { error } = this.state;
		let classes = [
			'add-composition-component',
			sizeOverride ? sizeOverride : browser.mediaType,
			error ? 'error' : null,
		];

		return (
			<div className={classes.join(' ')}>
				<ul className="input-list">
					<li className="gold">
						<input
							type="text"
							placeholder="Gold"
							value={this.state.gold}
							onChange={e => this.setState({
								gold: e.target.value,
							})}
						/>
					</li>
					<li className="silver">
						<input
							type="text"
							placeholder="silver"
							value={this.state.silver}
							onChange={e => this.setState({
								silver: e.target.value,
							})}
						/>
					</li>
					<li className="copper">
						<input
							type="text"
							placeholder="copper"
							value={this.state.copper}
							onChange={e => this.setState({
								copper: e.target.value,
							})}
						/>
					</li>
					<li className="nickel">
						<input
							type="text"
							placeholder="nickel"
							value={this.state.nickel}
							onChange={e => this.setState({
								nickel: e.target.value,
							})}
						/>
					</li>
					<li className="brass">
						<input
							type="text"
							placeholder="brass"
							value={this.state.brass}
							onChange={e => this.setState({
								brass: e.target.value,
							})}
						/>
					</li>
					<li className="zinc">
						<input
							type="text"
							placeholder="zinc"
							value={this.state.zinc}
							onChange={e => this.setState({
								zinc: e.target.value,
							})}
						/>
					</li>
					<li className="steel">
						<input
							type="text"
							placeholder="steel"
							value={this.state.steel}
							onChange={e => this.setState({
								steel: e.target.value,
							})}
						/>
					</li>
					<li className="tin">
						<input
							type="text"
							placeholder="tin"
							value={this.state.tin}
							onChange={e => this.setState({
								tin: e.target.value,
							})}
						/>
					</li>
					<li className="button">
						{ error ? <p className="error-msg">{error}</p> : null }
						<button onClick={() => this.addComposition()}
						>Add</button>
					</li>
				</ul>
			</div>
		);
	}
}

AddComposition.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	breakpoint: PropTypes.object,
	sizeOverride: PropTypes.string,
};


// UPDATE an existing fundraiser
const addCompositionMutation = graphql(CreateCompositionMutation, {
	props: ({ mutate }) => ({
		addComposition: ({gold, silver, copper, nickel, brass, zinc, steel, tin}) => mutate({
			variables: {
				gold: parseFloat(gold),
				silver: parseFloat(silver),
				copper: parseFloat(copper),
				nickel: parseFloat(nickel),
				brass: parseFloat(brass),
				zinc: parseFloat(zinc),
				steel: parseFloat(steel),
				tin: parseFloat(tin),
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
	addCompositionMutation,
)(AddComposition);
