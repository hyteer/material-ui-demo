/**
 * Created by liubin on 2017/1/25.
 */
import React, {Component} from 'react';
import DateRange from './DateRange';
import ResultTable from './ResultTable';

const styles = {
	slide: {
		padding: 10,
	},
	title: {
		borderLeft: "4px solid #00BCD4",
		paddingLeft: 8,
	}
};

export default class SecondPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DateRange />
				<div style={styles.slide}>
					<h2 style={styles.title}>Header</h2>
					<ResultTable />
				</div>
			</div>
		);
	}
}
