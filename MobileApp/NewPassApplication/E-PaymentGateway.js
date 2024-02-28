import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const EPaymentGateway = () => {

//Your btn_login logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('PayNow'); // Replace 'AnotherScreen' with the actual screen name
};

const btnback = () => {
Alert.alert('Alert Title', 'Button Back To Page Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_login logic here-------------------------------------------------------




  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
     <Image style={styles.tinyLogo}
       source={require('../../assets/Screenshot - 2_27_2024 , 1_55_07 PM.png')}
      /> 

    <TouchableOpacity id='btnback' name='btnback' onPress={btnback} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Back To Page</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center'
  },
  tinyLogo: {
    width: '100%',
    height: 300,
    marginRight: 5, // Adjust the margin as needed
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
});

export default EPaymentGateway;
