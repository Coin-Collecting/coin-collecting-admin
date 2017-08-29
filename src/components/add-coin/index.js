import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import { graphql, compose, gql } from 'react-apollo';
import './style.scss';
import { CreateCoinMutation } from '../../mutations';
import VarietySelect from '../select-boxes/variety-select';
import MintSelect from '../select-boxes/mint-select';

class AddCoin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			variety: '',
			year: '',
			mint: '',
			mintage: '',
			description: '',
			keyDate: false,
		}
	}

	// TODO: Move validation to server
	isValid() {
		let { variety, year, mint } = this.state;
		return !!variety && !!year && !!mint;
	}

	addCoin() {
		const { addCoin, onSubmit } = this.props;
		if (this.isValid()) {
			addCoin(this.state).then(() => {
				this.setState({
					year: '',
					mintage: '',
					description: '',
					keyDate: false,
				});
				onSubmit();
			});
		}

	}

	render() {
		let { data, browser, sizeOverride } = this.props;
		let { varieties, mints } = data;
		let classes = [
			'add-coin-component',
			sizeOverride ? sizeOverride : browser.mediaType,
		];

		return (
			<div className={classes.join(' ')}>
				<ul className="input-list">
					<li className="variety">
						<div className="select-wrapper">
							<VarietySelect
								variety={this.state.variety}
								varieties={varieties}
								onChange={e => this.setState({
									variety: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="key-date">
						<div className="check-wrapper">
							<input
								id="chkKeyDate"
								type="checkbox"
								value={this.state.keyDate}
								onChange={e => this.setState({
									keyDate: e.target.value,
								})}
							/>
							<div className="note">Key Date</div>
							<label htmlFor="chkKeyDate">
								<span/>
							</label>
						</div>
					</li>
					<li className="year">
						<input
							type="text"
							placeholder="Year"
							value={this.state.year}
							onChange={e => this.setState({
								year: e.target.value,
							})}
						/>
					</li>
					<li className="mint">
						<div className="select-wrapper">
							<MintSelect
								mint={this.state.mint}
								mints={mints}
								onChange={e => this.setState({
									mint: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="mintage">
						<input
							type="text"
							placeholder="Mintage"
							value={this.state.mintage}
							onChange={e => this.setState({
								mintage: e.target.value,
							})}
						/>
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
					<li className="button">
						<button
							disabled={!this.isValid()}
							onClick={() => this.addCoin()}
						>Add</button>
					</li>
				</ul>
			</div>
		);
	}
}

AddCoin.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	breakpoint: PropTypes.object,
	sizeOverride: PropTypes.string,
};


// UPDATE an existing fundraiser
const addCoinMutation = graphql(CreateCoinMutation, {
	props: ({ mutate }) => ({
		addCoin: ({variety, year, mint, mintage, description, keyDate}) => mutate({
			variables: {
				variety, year, mint, mintage, description, keyDate,
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
			varieties {...VarietySelectVariety}
			mints {...MintSelectMint}
		}
		${VarietySelect.fragments.entry}
		${MintSelect.fragments.entry}
	`),
	addCoinMutation,
)(AddCoin);
