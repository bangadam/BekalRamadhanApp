import React from 'react';
import {View, Modal, Text, Button, ScrollView, StyleSheet} from 'react-native';

const BekalDetail = props => {
	return (
		<Modal
          animationType="slide"
          visible={props.selected}
          onRequestClose={() => null}
         >
	         <View style={{margin: 22}}>
		         <ScrollView>
		         	<View>
		      			<Text>{props.description}</Text>
		      		</View>
		      		<View style={{marginTop: 10}}>
			      		<Button title="Tutup" style={styles.button} onPress={props.onModalClose}/>
		      		</View>
	      		</ScrollView>
	      	</View>
        </Modal>
	)
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'flex-end',
	    position: 'absolute',
	    bottom: 35
	}
})

export default BekalDetail;