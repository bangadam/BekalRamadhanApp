import React, {Component} from 'react';
import {Image, Text,StyleSheet, Linking} from 'react-native';
import {Content, Card, Icon, CardItem, Right} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

export default class Tentang extends Component {
	render() {
		return(
			<Content>
				<Card style={styles.image}>
					<CardItem cardBody>
						<Image

							style={{width: 150, height: 150, borderRadius: 150/2, borderWidth: 1, borderColor: '#F44336', marginTop: 20, marginBottom: 20}}
							source={{uri: "https://avatars2.githubusercontent.com/u/18278184?s=460&v=4"}}
						/>
					</CardItem>
					<CardItem bordered>
						<Text style={{fontSize: 20, fontWeight: 'bold' }}>Muhammad Meganata Adam S</Text>
					</CardItem>
					<CardItem button onPress={() => Linking.openURL("https://github.com/bangadam")}>
		              <Icon active name="logo-github" />
		              <Text>Github</Text>
		              <Right>
		                <Icon name="arrow-forward" />
		              </Right>
		             </CardItem>
		             <CardItem button onPress={() => Linking.openURL("https://www.instagram.com/bangadam.dev/")}>
		              <Icon active name="logo-instagram" style={{color: "#B70C8F"}} />
		              <Text>Instagram</Text>
		              <Right>
		                <Icon name="arrow-forward" />
		              </Right>
		             </CardItem>
		             <CardItem button onPress={() => Linking.openURL("https://www.facebook.com/bangadam.dev")}>
		              <Icon active name="logo-facebook" style={{color: "#2854ED"}} />
		              <Text>Facebook</Text>
		              <Right>
		                <Icon name="arrow-forward" />
		              </Right>
		             </CardItem>
				</Card>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})