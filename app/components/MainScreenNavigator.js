import React, {Component} from 'react';
import {Text,View,StyleSheet,Button,Image} from 'react-native';
import { TabNavigator, DrawerNavigator,DrawerItems, SafeAreaView } from "react-navigation";
import { Container, Content, Icon, Header, Body } from 'native-base';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import CustomHeader from './CustomHeader';

export default class MainScreenNavigator extends React.Component{
    constructor(props) {
        super(props);
      } 
      static navigationOptions = ({ navigation }) => ({
        title: "Produits",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Produits',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/produits.jpg')}
            style={styles.icon}
          />
        ),
    });
      render() {
        return (
            <Container>
            <CustomHeader drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
          <MainScreen />
          </Container>
        )
      }
}

const MainScreen=TabNavigator({
    Tab1: {screen: FirstScreen},
    Tab2:{screen:SecondScreen}
},{
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions:{
        activeTintColor: 'white',
        activeBackgroundColor: 'darkgreen',
        inactiveTintColor: 'black',
        inactiveBackgroundColor:'blue',
        labelStyle:{
            fontSize: 16,
            padding:0
        }
    }
});

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