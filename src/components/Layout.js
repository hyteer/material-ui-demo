/**
 * Created by liubin on 2017/1/24.
 */

import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SwipeableTabs from './SwipeableTabs'

const styles = {
	box: {
		flexWrap: "wrap",
	},
};

export default class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Logged = (props) => (
			<IconMenu
				{...props}
				iconButtonElement={
					<IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			>
				<MenuItem primaryText="Refresh" />
				<MenuItem primaryText="Help" />
				<MenuItem primaryText="Sign out" />
			</IconMenu>
		);

		Logged.muiName = 'IconMenu';

		return (
			<AppBar
				title="Hello World!"
				iconElementRight={<Logged />}
				showMenuIconButton={false}
				children={<SwipeableTabs/>}
				style={styles.box}
			/>
		);
	}
}