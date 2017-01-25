/**
 * Created by liubin on 2017/1/25.
 */
import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
	box: {
		display: "flex",
		flexWrap: "wrap",
	},
	item: {
		marginBottom: 16,
		marginLeft: 16,
		maxWidth: 150,
	},

	fullWidthItem: {
		marginBottom: 16,
		marginLeft: 16,
	},
	block: {
		flexBasis: "100%",
		display: "flex",
		flexWrap: "wrap",
	},
};

const items = [];
for (let i = 0; i < 100; i++) {
	items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
}

export default class Conditions extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 6,
		};
	}

	handleChange(event, index, value) {
		this.setState({value});
	};

	render() {
		return (
			<div style={styles.box}>
				<h3 style={styles.item}>1st Condition</h3>
				<RadioButtonGroup name="first-condition" defaultSelected="light" style={styles.block}>
					<RadioButton
						value="Condition1"
						label="Condition 1"
						style={styles.item}
					/>
					<RadioButton
						value="not_light"
						label="Condition 2"
						style={styles.item}
					/>
					<RadioButton
						value="light"
						label="Condition 3"
						checkedIcon={<ActionFavorite />}
						uncheckedIcon={<ActionFavoriteBorder />}
						style={styles.item}
					/>
				</RadioButtonGroup>

				<h3 style={styles.item}>2nd Condition</h3>
				<RadioButtonGroup name="Second-condition" defaultSelected="Condition4" style={styles.block}>
					<RadioButton
						value="Condition4"
						label="Condition 4"
						disabled={true}
						style={styles.item}
					/>
					<RadioButton
						value="Condition5"
						label="Condition 5"
						disabled={true}
						style={styles.item}
					/>
				</RadioButtonGroup>

				<h3 style={styles.item}>3rd Condition</h3>
				<div style={styles.block}>
					<SelectField
						value={this.state.value}
						onChange={(event, index, value) => this.handleChange(event, index, value)}
						maxHeight={200}
					  style={styles.fullWidthItem}
					>
						{items}
					</SelectField>
				</div>
			</div>
		);
	}
}
