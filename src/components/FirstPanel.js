/**
 * Created by liubin on 2017/1/24.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import DateRange from './DateRange';
import Tags from './Tags';
import Conditions from './Conditions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
	slide: {
		padding: 10,
	},
};

export default class FirstPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	handleOpen() {
		this.setState({open: true});
	};

	handleClose() {
		this.setState({open: false});
	};

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={() => this.handleClose()}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={() => this.handleClose()}
			/>,
		];

		return (
			<div>
				<DateRange />
				<div style={styles.slide}>
					<Paper
						zDepth={1}
						children={<Tags />}
					/>
				</div>
				<div style={styles.slide}>
					<Paper
						zDepth={1}
						children={<Conditions />}
					/>
				</div>
				<div style={styles.slide}>
					<RaisedButton label="Confirm" primary={true} onTouchTap={() => this.handleOpen()} />
					<Dialog
						title="Dialog With Actions"
						actions={actions}
						modal={true}
						open={this.state.open}
					>
						Only actions can close this dialog.
					</Dialog>
				</div>
			</div>
		);
	}
}