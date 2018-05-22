import React, {Component} from 'react';
import {View, Modal, Text, Button, StyleSheet} from 'react-native';

class FiqihDetail extends Component {
	render() {
		return (
			<Modal
	          animationType="slide"
	          visible={this.props.selected}
	          onRequestClose={() => null}
	         >
		         <View style={{margin: 22}}>
		         	<View>
		      			<Text style={{fontSize: 15, fontWeight: 'bold'}}>
		      				{
		      					this.props.doa != "" ? this.props.doa[0][0] + "\n\n" + this.props.doa[0][1] : ''
		      				}
		      			</Text>
		      		</View>
		      		<View style={{marginTop: 10}}>
			      		<Button title="Tutup" style={styles.button} onPress={this.props.onModalClose}/>
		      		</View>
		      	</View>
	        </Modal>
		)
	}
}


const styles = StyleSheet.create({
	button: {
		alignSelf: 'flex-end',
	    position: 'absolute',
	    bottom: 35
	}
})

export default FiqihDetail;