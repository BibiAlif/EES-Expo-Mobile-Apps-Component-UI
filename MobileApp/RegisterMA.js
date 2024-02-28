import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Footer from './ComponentMA/Footer';

const RegisterMA = () => {

const navigation = useNavigation();

  //Your btn_create_acc logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('RegisterForUser'); // Replace 'AnotherScreen' with the actual screen name
};

const handleCreateAccPress = () => {
Alert.alert('Alert Title', 'Button Create Account Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_create_acc logic here-------------------------------------------------------

 //Your btn_back_to_login logic here -----------------------------------------------------
const handlebacklogin = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Login'); // Replace 'AnotherScreen' with the actual screen name
};
 //Your btn_back_to_login logic here-------------------------------------------------------

  return (
  <ScrollView style={styles.scroll}>

  <View style={styles.container}>

  <Text>{"\n"}</Text>

  <Card style={{ width:'95%'}}>
    <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius:10}}>
      <Text style={styles.textHeader}>USER REGISTRATION</Text>
      <View style={styles.blueLine}></View>
      <Text> {"\n"} {"\n"} User ID</Text>
      <View style={styles.blueLine}></View>

      <Text style={styles.textMandatory}>{"\n"}*Mandatory</Text>
      <Text>{"\n"}*Email Address{"\n"}</Text>
      <TextInput
        style={styles.inputEmail}
        //placeholder='Email'
        id='txtemail'
        name='txtemail'
      />
  <Text style={styles.textNotice}>{"\n"}Please enter a valid email address as the One Time Password(OTP) for account activation and QR code will be sent to your registered email{"\n"}</Text>
    
  <TouchableOpacity id='btncreateacc' name='btn_createacc' onPress={handleCreateAccPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
  </TouchableOpacity>

  <TouchableOpacity id='btnbacktologin' name='btnbacktologin' onPress={handlebacklogin} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>BACK TO LOGIN</Text>
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
  textHeader: {
    textAlign: 'center',
  },
  blueLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 10,
  },
  textMandatory: {
    color: '#FC0404',
  },
  inputEmail: {
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5, // Border radius for the input
    //fontSize: 16, // Text font size
  },
  textNotice: {
    color: '#FC0404',
    textAlign: 'center',
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
  scroll: {
    backgroundColor: '#064D82',
  },
});

export default RegisterMA;