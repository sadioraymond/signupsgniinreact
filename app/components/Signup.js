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

export default class Signup extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            email:'',
            name:'',
            data: [],
        }
    }
  render() {
    return (
        <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        onChangeText={ (name)=>this.setState({name}) }
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Name"
        placeholderTextColor = "#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"

        />
        <TextInput style={styles.inputBox} 
        onChangeText={ (username)=>this.setState({username}) }
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Username"
        placeholderTextColor = "#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"

        />
        <TextInput style={styles.inputBox} 
            onChangeText={ (email)=>this.setState({email}) }
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"

            />
        <TextInput style={styles.inputBox} 
            onChangeText={ (password)=>this.setState({password}) }
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#ffffff"
            />  
         <TouchableOpacity style={styles.button} onPress={this.signup}>
           <Text style={styles.buttonText}>Valider</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.signupButton}>Déja un compte</Text>
         </TouchableOpacity>     
        </View>
    );
  }
  signup=async()=>{
    // fetch('https://my-json-server.typicode.com/dioufprince/apiprincedemo/users',{
    //     method: 'POST',
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json',
    //     },
    //     body: JSON.stringify({
    //         name:this.state.name,
    //         username: this.state.username,
    //         email:this.email,
    //         password:this.state.password,
    //     })
    // }).then((response)=>response.json()).then((res)=>{
    //     if(res.success===true){
    //         this.props.navigation.navigate('Home');
    //     }
    //     else{
    //         alert(res.message);
    //     }
    // }).done();  
    axios.post('https://my-json-server.typicode.com/dioufprince/apiprincedemo/users', {
            name:this.state.name,
            username: this.state.username,
            email:this.state.email,
            password:this.state.password,
    })
    .then(function (response) {
      console.log('réponse bi',response.data.email)
      AsyncStorage.setItem('email',response.data.email);
    })
    .catch(function (error) {
      console.log(error);
    });

    var value= await AsyncStorage.getItem('email');
    if(value!==null){
      if(value===this.state.email){
          console.log('bou leer',value);
             this.props.navigation.navigate('Home');
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