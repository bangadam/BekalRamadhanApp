import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const BekalList = props => {
	return (
		<Card style={{marginBottom: 10}}>
            <CardItem>
              <Left>
              <Thumbnail source={{uri: props.profile_img}} />
                <Body>
                  <Text>{props.title}</Text>
                  <Text note>{props.ustadz}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: props.image}} resizeMode="stretch" style={{height: 300, width: null, flex: 1, margin: 5}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button full button style={{backgroundColor: "#FA6900"}} onPress={props.onModalShow}>
                  <Icon active name="search" />
                  <Text>Lihat Penjelasan</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
	)
}

export default BekalList;