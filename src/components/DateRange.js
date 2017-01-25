/**
 * Created by liubin on 2017/1/24.
 */
import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	box: {
		display: "flex",
		alignItems: "flex-end",
	},
	item: {
		margin: 16,
	}
};

export default class DateRange extends Component {

	constructor(props) {
		super(props);

		const [minDate, maxDate] = this.getRecentMonth(2);

		this.state = {
			minDate: minDate,
			maxDate: maxDate,
			autoOk: false,
			disableYearSelection: false,
		};
	}

	getRecentMonth(n) {
		const minDate = new Date();
		const maxDate = new Date();
		minDate.setFullYear(minDate.getFullYear());
		minDate.setFullYear(minDate.getFullYear());
		minDate.setMonth(maxDate.getMonth() - n);
		maxDate.setMonth(maxDate.getMonth());
		minDate.setHours(0, 0, 0, 0);
		maxDate.setHours(0, 0, 0, 0);

		return [minDate, maxDate];
	}

	handleClick(event) {
		const [minDate, maxDate] = this.getRecentMonth(1);
		this.setState({minDate: minDate});
		this.setState({maxDate: maxDate});
	}

	handleChangeMinDate(event, date) {
		this.setState({
			minDate: date,
		});
	};

	handleChangeMaxDate(event, date) {
		this.setState({
			maxDate: date,
		});
	};

	render() {
		return (
			<div style={styles.box}>
				<DatePicker
					onChange={(event, date) => this.handleChangeMinDate(event, date)}
					floatingLabelText="Min Date"
					container="inline"
					mode="landscape"
					autoOk={true}
					style={styles.item}
					value={this.state.minDate}
				/>
				<DatePicker
					onChange={(event, date) => this.handleChangeMaxDate(event, date)}
					floatingLabelText="Max Date"
					container="inline"
					mode="landscape"
					autoOk={true}
					style={styles.item}
					value={this.state.maxDate}
				/>
				<div style={styles.item}>
					<RaisedButton
						label="Last Month"
						secondary={true}
						style={styles.item}
						onClick={e => this.handleClick(e)}
					/>
				</div>
			</div>
	);
	}
}
