/**
 * Created by liubin on 2017/1/23.
 */
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import FirstPanel from 'FirstPanel';
import SecondPanel from 'SecondPanel';
import ThirdPanel from 'ThirdPanel';

const styles = {
  slide: {
    padding: 10,
  },
  tab: {
	  flexBasis: "100%",
  },
};

export default class SwipeableTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div style={styles.tab}>
        <Tabs
          onChange={value => this.handleChange(value)}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={value => this.handleChange(value)}
        >
          <div style={styles.slide}>
            <Paper
              zDepth={2}
              children={<FirstPanel />}
            />
          </div>
          <div style={styles.slide}>
            <Paper
              zDepth={2}
              children={<SecondPanel />}
            />
          </div>
          <div style={styles.slide}>
            <Paper
              zDepth={2}
              children={<ThirdPanel />}
            />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}