import React, {Component} from 'react';
import {List, ListItem, Left, Right, Icon, Text} from 'native-base';

export default class FiqihList extends Component {
	render() {
		return (
			<List>
	            <ListItem button onPress={this.props.onModalShow}>
	              <Left>
	                <Text>{this.props.number + '. ' + this.props.title}</Text>
	              </Left>
	              <Right>
	                <Icon name="arrow-forward" />
	              </Right>
	            </ListItem>
	        </List>
		)
	}
}