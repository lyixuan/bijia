import React, {Component} from 'react';
import {FlatList,StyleSheet,ActivityIndicator, Text, View} from 'react-native';
import {showapi_appid,showapi_sign} from '../util/config';
import {urlEncode} from '../util/tool';
type Props = {}

export default class List extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      dataSource: [],
      params:{
        showapi_appid,
        showapi_sign,
        keyWords:'电视'
      }
    };
  }
  componentDidMount(){
    console.log(3333);
    this.query();
  };

  query = ()=>{
    console.log(122222);
    const {params = {}} = this.state;
    return fetch('https://route.showapi.com/1615-1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncode(params).slice(1),
      })
      .then((response) => {

        console.log(1,response)
        this.setState({
          isLoading: false,
          dataSource: response.movies,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  };
  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => item.showapi_res_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
