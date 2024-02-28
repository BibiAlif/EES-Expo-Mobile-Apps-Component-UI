import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Footer from './ComponentMA/Footer';

const ActivationAccMA = () => {

const navigation = useNavigation();

//Your btn_back_to_login logic here -----------------------------------------------------
const btnhandleConfirm = () => {
Alert.alert('Alert Title', 'Button Confirm is Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', },
   
  ]);
  }
//Your btn_back_to_login logic here-------------------------------------------------------

//Your btn_back_to_login logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Login'); // Replace 'AnotherScreen' with the actual screen name
};

const handleBackToLogin = () => {
Alert.alert('Alert Title', 'Button Close Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_back_to_login logic here-------------------------------------------------------

 //Password Hide or unhide------------------------------------------------------------------
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const togglePasswordVisibility = () => {
   setIsPasswordVisible(!isPasswordVisible);
 };

 //Password Hide or unhide------------------------------------------------------------------


  return (

  <ScrollView style={styles.scroll}>

  <View style={styles.container}>

  <Text>{"\n"}</Text>

  <Card style={{ width:'95%'}}>
  <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius:10}}>

  <Text style={styles.text_header}>Account Activation Through One Time Password</Text>
  <View style={styles.blue_line}></View>

  <Text>{"\n"}*Email Address</Text>
  <TextInput
      style={styles.input_style}
      //placeholder='Email'
      id='txtemail'
      name='txtemail'
  />

  <Text>{"\n"}*Please enter OTP that you have received in your activation email</Text>


  <View style={styles.inputContainer}>
    <TextInput
        style={styles.input_style}
        placeholder='Password'
        id='txtotp'
        name='txtotp'
        secureTextEntry={!isPasswordVisible}
    />
    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
    <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={25} style={styles.icon_eye} />
    </TouchableOpacity>
    </View>



 

  <TouchableOpacity id='btnconfirm' onPress={btnhandleConfirm} name='btnconfirm' style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CONFIRM</Text>
  </TouchableOpacity>

  <TouchableOpacity id='btnbacktologin' onPress={handleBackToLogin} name='btnbacktologin' style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CLOSE</Text>
  </TouchableOpacity>

  </Card.Content>
  </Card>
  <StatusBar style="auto" />

  </View>
  <Footer/>

  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064D82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 10,
  },
  text_header: {
    textAlign: 'center',
  },
  input_style: {
    flex: 1,
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5, // Border radius for the input
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_eye: {
    color: '#012B4A',
  },
  iconContainer: {
    position: 'absolute',
    padding: 10,
    flexDirection: 'row',
    zIndex: 1, // Ensure the icon is above the TextInput
    right: 5,
  },
  scroll: {
    backgroundColor: '#064D82',
  },

});

export default ActivationAccMA;