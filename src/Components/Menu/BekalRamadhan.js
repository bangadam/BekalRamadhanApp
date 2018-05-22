import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Content} from 'native-base';

import BekalList from './BekalList';
import BekalDetail from './BekalDetail';
import bekal from '../../storage/bekal.json';

export default class BekalRamadhan extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: bekal,
			selected: false,
			description: ''
		}

		// this.onModalShow = this.onModalShow.bind(this)
		this.onModalClose = this.onModalClose.bind(this)
	}

	onModalShow(value) {
		this.setState({
			selected: true,
			description: value
		})
	}

	onModalClose() {
		this.setState({
			selected: false
		})
	}

	render() {
		// console.log(this.state.data)
		return(
			<Content>
				<ScrollView>
					{
						this.state.data.map((value, i) =>
								<BekalList
									key={i}
									onModalShow={this.onModalShow.bind(this, value.description)}
									title={value.title}
									profile_img={value.profile_img}
									ustadz={value.ustadz}
									image={value.image}
									description={value.description}
								/>
						)
					}

				<BekalDetail
					selected={this.state.selected}
					onModalClose={this.onModalClose}
					description={this.state.description}
				/>
				</ScrollView>
			</Content>
		)
	}
}