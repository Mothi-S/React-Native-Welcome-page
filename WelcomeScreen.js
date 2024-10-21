import React from 'react';
import {  View, 
          Text,
          Button,
          StyleSheet,
          TouchableOpacity, 
          Image} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image} 
        source={require('./Limat-Logo.png')}/>
      <Text style={styles.title}>WELCOME TO LIMAT TECHNOLOGY</Text>
      
    <View style ={styles.buttoncontainer}>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Guest')}>
          <Text style={styles.buttonText}>Guest Mode</Text>
      </TouchableOpacity>
      
    </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffdab9",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"black",
    marginBottom:30,
  },
  buttoncontainer:{
    flexDirection:"row",
    justifyContent: "space-between",   
    flexDirection: 'row',
    width:'50%',
    paddingTop:"60%",
  },
  image:{
    width:350,
    height:150,
    margin:20,
  },
  button:{
    backgroundColor:"orange",
    paddingVertical:15,
    borderRadius:8,
    width:80,

  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  }

});

export default WelcomeScreen;
