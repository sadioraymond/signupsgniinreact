import React, { Component } from 'react';
import {Text,View,StyleSheet,Button,Image} from 'react-native';

import { TabNavigator, DrawerNavigator,DrawerItems, SafeAreaView } from "react-navigation";
import { Container, Content, Icon, Header, Body } from 'native-base';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import CustomHeader from './CustomHeader';
import Logout from './Logout'; 
import MainScreenNavigator from './MainScreenNavigator';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <MyDrawerNavigator />
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../images/shop.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyDrawerNavigator = DrawerNavigator({
  tabnav :
  {
      screen: MainScreenNavigator,
  },
  Logout:{
    screen: Logout,
  }
}, {
  initialRouteName: 'tabnav',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})