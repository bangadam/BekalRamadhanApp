import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Search from './Search';
import JadwalList from './JadwalList';

export default class JadwalSholat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: [],
      data: ''
    }

    this.setInput = this.setInput.bind(this)

  }

  setInput(value) {
    this.setState({
      data: value
    })
  }

  render() {
    return (
    <View style={styles.container}>
      	<Search setInput={this.setInput}/>
        <Text>{this.state.data}</Text>
        <JadwalList/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 }
});

// widthArr={state.widthArr}
// style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
// textStyle={styles.text}