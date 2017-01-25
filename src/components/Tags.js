/**
 * Created by liubin on 2017/1/25.
 */
import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

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
	block: {
		flexBasis: "100%",
		display: "flex",
		flexWrap: "wrap",
	},
};

export default class DateRange extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div style={styles.box}>
				<h3 style={styles.item}>First Tags</h3>
				<div style={styles.block}>
					<Checkbox
						label="Tag 1"
						style={styles.item}
					/>
					<Checkbox
						label="Tag 2"
						style={styles.item}
						checked={true}
					/>
					<Checkbox
						label="Tag 3"
						style={styles.item}
						checked={true}
					/>
					<Checkbox
						label="Tag 4"
						style={styles.item}
					/>
					<Checkbox
						label="Tag 5"
						style={styles.item}
						checked={true}
					/>
					<Checkbox
						label="Tag 6"
						style={styles.item}
					/>
					<Checkbox
						label="Tag 7"
						style={styles.item}
						checked={true}
					/>
				</div>

				<h3 style={styles.item}>Second Tags</h3>
				<div style={styles.block}>
					<Checkbox
						checkedIcon={<ActionFavorite />}
						uncheckedIcon={<ActionFavoriteBorder />}
						label="Tag 8"
						style={styles.item}
					/>
					<Checkbox
						checkedIcon={<ActionFavorite />}
						uncheckedIcon={<ActionFavoriteBorder />}
						label="Tag 9"
						style={styles.item}
					/>
					<Checkbox
						checkedIcon={<ActionFavorite />}
						uncheckedIcon={<ActionFavoriteBorder />}
						label="Tag 10"
						style={styles.item}
					/>
					<Checkbox
						checkedIcon={<ActionFavorite />}
						uncheckedIcon={<ActionFavoriteBorder />}
						label="Tag 11"
						style={styles.item}
					/>
				</div>
			</div>
		);
	}
}
