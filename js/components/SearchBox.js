import React, {Component} from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';
type Props = {}

export default class SearchBox extends Component<Props> {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HomePage!</Text>
        <Button title={'go to page1'} onPress={()=>{
          navigation.navigate('Page1',{name:'动态的'})
        }}/>
        <Button title={'go to page2'} onPress={()=>{
          navigation.navigate('Page2')
        }}/>
        <Button title={'go to page3'} onPress={()=>{
          navigation.navigate('Page3',{name:'DevIo'})
        }}/>
        <Button title={'go to top'} onPress={()=>{
          navigation.navigate('Top')
        }}/>
        <Button title={'go to bottom'} onPress={()=>{
          navigation.navigate('Bottom')
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
