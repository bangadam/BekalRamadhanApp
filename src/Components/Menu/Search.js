import React, {Component} from 'react';
import {Text} from 'react-native';
import axios from 'axios';
import {Form, Icon, Item, Input, Button} from 'native-base';

export default class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tempat: "",
			data: null
		}

		this.getInput = this.getInput.bind(this)
		this.submitButton = this.submitButton.bind(this)
		this.getDataApi = this.getDataApi.bind(this)
	}

	getInput(val) {
		this.setState({
			tempat: val
		})

	}

	getDataApi(url) {
		// return console.log(url)
		// return
	}

	submitButton() {
		const api = "http://muslimsalat.com/london/daily.json?key=1fe1a93dd5bc67b9ce23899a8c472b6f&jsoncallback=?";

		// this.getDataApi(api)
		axios.get(api).then(function (response) {
			this.setState({data: response})
		})
		.catch(function (error) {
			console.log(error)
		})

		if (this.state.tempat === "") {
			return;
		}


		this.props.setInput(this.state.data);
	}

	render() {
		return (
			<Form>
				<Item last>
					<Input placeholder='Cari Kota' value={this.state.tempat} onChangeText={this.getInput}/>
				</Item>
				<Button primary full onPress={this.submitButton}>
					<Icon name="search"/>
				</Button>
			</Form>
		)
	}
}