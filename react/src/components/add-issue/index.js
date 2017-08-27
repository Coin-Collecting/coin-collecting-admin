import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import { graphql, compose, gql } from 'react-apollo';
import './style.scss';
import { CreateIssueMutation, UpdateIssueMutation } from '../../mutations';
import DenominationSelect from '../select-boxes/denomination-select';

class AddIssue extends React.Component {
	constructor(props) {
		super(props);
		if (props.issue) {
			let {
				name, denomination, startYear, endYear, description, id,
			} = props.issue;
			this.state = {
				name: name ? name : '',
				denomination: denomination ? denomination.id : '',
				startYear: startYear ? startYear : '',
				endYear: endYear ? endYear : '',
				description: description ? description : '',
				id,
				error: [],
			}
		} else {
			this.state = {
				name: '',
				denomination: '',
				startYear: '',
				endYear: '',
				description: '',
				error: [],
			}
		}
	}

	addIssue() {
		const { addIssue, onSubmit } = this.props;
		addIssue(this.state)
			.then(() => {
				this.setState({
					name: '',
					denomination: '',
					startYear: '',
					endYear: '',
					description: '',
					error: [],
				});
				onSubmit();
			})
			.catch(e => {
				let { graphQLErrors } = e;
				this.setState({error: graphQLErrors});
			});
	}

	updateIssue() {
		const { updateIssue, onSubmit } = this.props;
		updateIssue(this.state)
			.then(() => onSubmit())
			.catch(e => {
				let { graphQLErrors } = e;
				this.setState({error: graphQLErrors});
			});
	}

	render() {
		let { data, browser, sizeOverride, issue } = this.props;
		let { error } = this.state;
		let { denominations } = data;
		let classes = [
			'add-issue-component',
			sizeOverride ? sizeOverride : browser.mediaType,
			error ? 'error' : null,
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
					<li className="denomination">
						<div className="select-wrapper">
							<DenominationSelect
								denomination={this.state.denomination}
								denominations={denominations}
								onChange={e => this.setState({
									denomination: e.target.value,
								})}
							/>
						</div>
					</li>
					<li className="from-year">
						<input
							placeholder="From Year"
							type="text"
							maxLength={4}
							value={this.state.startYear}
							onChange={e => this.setState({
								startYear: e.target.value,
							})}
						/>
					</li>
					<li className="to-year">
						<input
							placeholder="To Year"
							type="text"
							maxLength={4}
							value={this.state.endYear}
							onChange={e => this.setState({
								endYear: e.target.value,
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
						{ issue ?
							<button onClick={() => this.updateIssue()}>
								Edit
							</button>
							:
							<button onClick={() => this.addIssue()}>
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

AddIssue.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	breakpoint: PropTypes.object,
	sizeOverride: PropTypes.string,
	issue: PropTypes.object,
	addIssue: PropTypes.func,
	updateIssue: PropTypes.func,
};

// UPDATE an existing fundraiser
const addIssueMutation = graphql(CreateIssueMutation, {
	props: ({ mutate }) => ({
		addIssue: ({name, description, denomination, startYear, endYear}) => mutate({
			variables: {
				name, description, denomination, startYear, endYear,
			},
		}),
	}),
});

// UPDATE an existing fundraiser
const updateIssueMutation = graphql(UpdateIssueMutation, {
	props: ({ mutate }) => ({
		updateIssue: ({id, name, description, denomination, startYear, endYear}) => mutate({
			variables: {
				id, name, description, denomination, startYear, endYear,
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
			denominations {...DenominationSelectDenomination}
		}
		${DenominationSelect.fragments.entry}
	`),
	addIssueMutation,
	updateIssueMutation,
)(AddIssue);
