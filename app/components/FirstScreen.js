import React from 'react';
import {Text,
        View,
        Image,
        ScrollView,
        StyleSheet,
    } from 'react-native';
    import Produit from './Produit';
    import { Icon, Button, Container, Header, Content, Left } from 'native-base';
    export default class FirstScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
      chaussure:[],
  }; 
  }
  componentWillMount() {
    this.fetchData(); 
  }

  fetchData = async () => {
    const response = await fetch("https://my-json-server.typicode.com/dioufprince/apiprincedemo/produits");
      const json = await response.json();
      this.setState({ data: json});
      const tab =[];
      this.state.data.forEach(element => {
          if(element.category==="Chaussure"){
              tab.push(element);
          }
      });
      console.log('tableau bi ni',tab);
      this.setState({chaussure:tab});
};
        static navigationOptions={
            headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
            tabBarLabel:'Chaussure',
            tabBarIcon:({tintColor})=>(
                <Image
                   source={require('../images/chaussure.jpeg')}
                   style={styles.icon}
                   >
                </Image>
            )
        }
        render(){
            let chaussures = this.state.chaussure.map((val, key)=>{
                return <Produit key={key} keyval={key} val={val}/>
            });
            return (
                <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                {chaussures}
                </ScrollView>
          </View>
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