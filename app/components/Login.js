import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
var axios =require('axios');

export default class Login extends React.Component {
       constructor(props){
        super(props);
         this.state={
        password:'',
        username:'',
        data: [],
    }
    }
    componentDidMount(){
        this._loadInitialState().done();
    }
    _loadInitialState=async()=>{
        var value= await AsyncStorage.getItem('user');
        if(value!==null){
            this.props.navigation.navigate('Profile');
        }else{
            AsyncStorage.setItem('user',null);
        }
    }
     navigate(){
        this.props.navigation.navigate('Profile');
     }
  render() {
    return (
        <View style={styles.container}>
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="username"
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={ (username)=>this.setState({username}) }

            />
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#ffffff"
            onChangeText={ (password)=>this.setState({password}) }
            />  
        <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignupScreen')}>
        <Text style={styles.signupButton}>Creer un Compte</Text>
       </TouchableOpacity>
        </View>
    );
  }
   login=async()=>{
       console.log(this.state.username);
       console.log(this.state.password);

  const verif=axios.get('https://my-json-server.typicode.com/dioufprince/apiprincedemo/users', {
    params: {
        username: this.state.username,
        password:this.state.password,
    }
  })
  .then(function (response) {
    console.log('requete',response.data[0]);
    AsyncStorage.setItem('user',response.data[0].username);
  })
  .catch(function (error) {
    AsyncStorage.setItem('user',null);
  });
  var value= await AsyncStorage.getItem('user');
  if(value!==null){
    if(value===this.state.username){
        console.log('bou leer',value);
           this.props.navigation.navigate('Profile');
    }else{
        alert("User introuvable");
    }
  }
    
}
}

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
  
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
      color:'rgba(255,255,255,0.6)',
      fontSize:16
    },
    signupButton: {
      color:'#ffffff',
      fontSize:16,
      fontWeight:'500'
    }
    
  });