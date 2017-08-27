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
			error: [],
		}
	}

	addComposition() {
		const { addComposition, onSubmit } = this.props;
		addComposition(this.state)
			.then(() => {
				this.setState({
					gold: '',
					silver: '',
					copper: '',
					nickel: '',
					brass: '',
					zinc: '',
					steel: '',
					tin: '',
					error: [],
				});
				onSubmit();
			})
			.catch(e => {
				let { graphQLErrors } = e;
				this.setState({error: graphQLErrors});
			});
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
						<button onClick={() => this.addComposition()}>
							Add
						</button>
						{ error.length > 0 ? <p className="error-msg">{error[0].message}</p> : null }
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
