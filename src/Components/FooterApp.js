import React, {Component} from 'react';
import {Button, Text, Icon, Footer, FooterTab  } from "native-base";
import {TabNavigator} from 'react-navigation';

// import JadwalSholat from './Menu/JadwalSholat';
import Fiqih from './Menu/Fiqih';
import BekalRamadhan from './Menu/BekalRamadhan';
import Tentang from './Menu/Tentang';

export default (FooterApp = TabNavigator(
	{
		// JadwalSholat: {screen: JadwalSholat},
		BekalRamadhan: {screen: BekalRamadhan},
		Fiqih: {screen: Fiqih},
		Tentang: {screen: Tentang}

	},
	{
		tabBarPosition: "bottom",
		tabBarComponent: props => {
			return (
				<Footer>
		            <FooterTab style={{backgroundColor: "#69D2E7"}}>
		            	<Button vertical
		              	//active={props.navigationState.index === 0}
						onPress={() => props.navigation.navigate("BekalRamadhan")}
		              	>
		                <Icon name="briefcase" style={{color: 'white'}}/>
		                <Text style={{fontSize: 8, color: 'white'}}>Bekal Ramadhan</Text>
		              </Button>
		              {/*<Button vertical
		              	//active={props.navigationState.index === 0}
						onPress={() => props.navigation.navigate("JadwalSholat")}
		              >
		                <Icon name="calendar" style={{color: 'white'}}/>
		                <Text>Jadwal Sholat</Text>
		              </Button>*/}
		              <Button vertical
						//active={props.navigationState.index === 1}
						onPress={() => props.navigation.navigate("Fiqih")}
		              >
		                <Icon name="book" style={{color: 'white'}}/>
		                <Text style={{fontSize: 8, color: 'white'}}>Doa-Doa Ramadhan</Text>
		              </Button>
		              <Button vertical
						//active={props.navigationState.index === 2}
						onPress={() => props.navigation.navigate("Tentang")}
		              >
		                <Icon name="person" style={{color: 'white'}}/>
		                <Text style={{fontSize: 8, color: 'white'}}>Tentang Saya</Text>
		              </Button>
		            </FooterTab>
		          </Footer>
			)
		}
	}
))