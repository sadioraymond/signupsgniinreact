import React from 'react';
import {Text,View} from 'react-native';

import { TabNavigator } from "react-navigation";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

var MainScreenNavigator=TabNavigator({
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

MainScreenNavigator.navigationOptions={
    title:"Tab example"
};

export default MainScreenNavigator;