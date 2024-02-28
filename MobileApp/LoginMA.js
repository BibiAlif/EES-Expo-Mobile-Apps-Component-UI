import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';

const Login = () => {

const navigation = useNavigation();

//Your btn_login logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Homepage'); // Replace 'AnotherScreen' with the actual screen name
};

const handleLoginPress = () => {
Alert.alert('Alert Title', 'Button Login Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_login logic here-------------------------------------------------------



 //Your btn_registre logic here -----------------------------------------------------
 const handleOKPress_Registre = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Register'); // Replace 'AnotherScreen' with the actual screen name
};

const handleRegistrePress = () => {
Alert.alert('Alert Title', 'Button Registre Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress_Registre },
   
  ]);
  };
 //Your btn_registre logic here-------------------------------------------------------



//Your btn_acc_activation logic here -----------------------------------------------------
const handleOKPress_password = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('ForgotPassword'); // Replace 'AnotherScreen' with the actual screen name
};

const handleForgot_password = () => {
Alert.alert('Alert Title', 'Button Account Activation Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress_password },
   
  ]);
  };
 //Your btn_acc_activation logic here-------------------------------------------------------





 //Your btn_acc_activation logic here -----------------------------------------------------
const handleOKPress_Activation = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Actactivation'); // Replace 'AnotherScreen' with the actual screen name
};

const handleActivationPress = () => {
Alert.alert('Alert Title', 'Button Account Activation Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress_Activation },
   
  ]);
  };
 //Your btn_acc_activation logic here-------------------------------------------------------

 //Password Hide or unhide------------------------------------------------------------------
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const togglePasswordVisibility = () => {
   setIsPasswordVisible(!isPasswordVisible);
 };

 //Password Hide or unhide------------------------------------------------------------------

  return (
  
    <View style={styles.container}>

    <Card style={{ width:'95%'}} >
    <Card.Content style={{ backgroundColor: '#012B4A',  borderRadius:10}}>
    <View style={styles.rowContainer}>
        
    <Image style={styles.tinyLogo}
       source={require('../assets/ESS.png')}
    /> 
      
    <Text style={styles.text} >
      Jabatan Kastam dan Eksais Diraja {"\n"}
      Kementerian Kewangan dan Ekonomi  {"\n"}
      Royal Customs and Excise Department  {"\n"}
      Ministry of Finance and Economy {"\n"}
    </Text>
    </View>

    <Text style={{ color: 'white', textAlign: 'center' }}variant="bodyMedium">{"\n"}EXIT AND ENTRY SYSTEM (EES)</Text>
    <Text style={{ color: 'white', textAlign: 'center' }}variant="bodyMedium">Brunei Darussalam Exit and Entry Application{"\n"}</Text>



    <View style={styles.inputContainer}>
    <FontAwesome name="envelope" size={30} style={styles.icon} />
    <TextInput
        style={styles.input}
        placeholder='Email'
        id='txtemail'
        name='txtemail'
    />
    </View>


    <View style={styles.inputContainer}>
    <Entypo name="key" size={30} style={styles.icon} />
    <TextInput
        style={styles.input}
        placeholder='Password'
        id='txtpassword'
        name='txtpassword'
        secureTextEntry={!isPasswordVisible}
    />
    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
    <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={25} style={styles.iconEye} />
    </TouchableOpacity>
    </View>


    <TouchableOpacity id='btnlogin' name='btnlogin' onPress={handleLoginPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>


    <View style={styles.line}></View>


    <TouchableOpacity onPress={handleRegistrePress}>
    <Text style={styles.textColor} >
     {"\n"} Register Here
    </Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={handleForgot_password}>
    <Text style={styles.textColor} >
      Forgot password
    </Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={handleActivationPress}>
    <Text style={styles.textColor} >
      Account Activation {"\n"} 
    </Text>
    </TouchableOpacity>
    

    </Card.Content>
    </Card>

    <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064D82',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tinyLogo: {
    width: 80,
    height: 90,
    marginRight: 5, // Adjust the margin as needed
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center items vertically
    padding: 2,
  },
  input: {
    height: 46,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    paddingLeft: 60,
    flex: 1,
    //fontSize: 16, // Text font size
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  icon: {
    position: 'absolute',
    left: 5,
    zIndex: 1, // Ensure the icon is above the TextInput
    color:'#012B4A',
    backgroundColor: '#FFC312',
    padding: 7, // Padding inside the icon container
    paddingRight: 10,
    paddingLeft: 10,
    paddingVertical:8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {
    textAlign: 'center',
    color:'#FFC312',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFC312', // You can change the color as needed
    paddingBottom: 50,
  },
  iconEye: {
      color: '#012B4A',
  },
  iconContainer: {
    position: 'absolute',
    padding: 10,
    flexDirection: 'row',
    zIndex: 1, // Ensure the icon is above the TextInput
    right: 5,
  },
});

export default Login;