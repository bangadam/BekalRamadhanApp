import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class JadwalList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tableHead: ['Tanggal', 'Shubuh', 'Syuruq', 'Zhuhur', 'Maghrib', 'Isya'],
      		widthArr: [80, 80, 80, 80, 80, 80]
		}
	}
	render() {
		return(
			<View>
		       <Text>{this.props.kota}</Text>
	          <ScrollView horizontal={true}>
	            <View style={{marginTop: 10}}>
	              <Table borderStyle={{borderColor: '#C1C0B9'}}>
	                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
	              </Table>
	              <ScrollView style={styles.dataWrapper}>
	                <Table borderStyle={{borderColor: '#C1C0B9'}}>
		              </Table>
		            </ScrollView>
		          </View>
		        </ScrollView>
		      </View>
		)
	}
}

const styles = StyleSheet.create({
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});