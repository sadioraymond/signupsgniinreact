import React from 'react';
import {Text,
        View,
        Image,
        ScrollView,
        StyleSheet,
        AsyncStorage,
    } from 'react-native';
import Login from './Login';
 export default class Logout extends React.Component{

  constructor(props){
    super(props); 
    this.deconnect();
  }
  deconnect(){
    AsyncStorage.removeItem('user');
    alert('Vous êtes Déconnectés.'); 
  }
  static navigationOptions = ({ navigation }) => ({
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/logout.jpeg')}
        style={styles.icon}
      />
    ),
});
        render(){
            return (
              <Login/>
              );
        }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'#455a64',
          flexDirection:'column',
          justifyContent: 'center',
        },
        text:{
            color:'#fff'
        },
        scrollContainer: {
          flex: 1,
          marginBottom: 100
      },
      tacheText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
      }, 
      icon: {
        width: 24,
        height: 24,
    },
    });