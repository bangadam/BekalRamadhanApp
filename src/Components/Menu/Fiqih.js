import React, {Component} from 'react';
import {View} from 'react-native';
import {List, Text, Right, ListItem, Left, Icon} from 'native-base';

import FiqihDetail from './FiqihDetail';
import FiqihList from './FiqihList';
import doa from '../../storage/doa.json';

export default class Fiqih extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: false,
			data: doa,
			doa: []
		}

		this.onModalClose = this.onModalClose.bind(this);
	}

	onModalShow(value) {
		this.setState({
			selected: true,
			doa: [value]

		})
	}

	onModalClose() {
		this.setState({
			selected: false
		})
	}

	render() {
		return(
			<View>
				<FiqihDetail
					selected={this.state.selected}
					onModalClose={this.onModalClose}
					doa={this.state.doa}
				/>
				{
					this.state.data.map((value, i) =>
						<FiqihList
							onModalShow={this.onModalShow.bind(this,[value.arab,value.keterangan])}
							key={i}
							number={++i}
							title={value.title}
							arab={value.arab}
							keterangan={value.keterangan}
						/>
					)
				}
			</View>
		)
	}
}