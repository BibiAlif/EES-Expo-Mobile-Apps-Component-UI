import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Footer from '../MobileApp/Component_MA/Footer';

const Blank_Template = () => {

const navigation = useNavigation();

//Your btn_create_acc logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Login'); // Replace 'AnotherScreen' with the actual screen name
};

const handleback_to_login = () => {
Alert.alert('Alert Title', 'Button Back To Login Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_create_acc logic here-------------------------------------------------------

  return (

  <ScrollView style={styles.scroll}>

  <View style={styles.container}>

  <Text>{"\n"}</Text>

  <View style={styles.blue_line}></View>


  <Card style={{ width:'95%'}}>
  <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius:10}}>
  <Text style={styles.text_header}>Blank_Template</Text>

  <Text style={styles.text_mandatory}>{"\n"}*Mandatory</Text>
      
  <Text>{"\n"}*Email Address{"\n"}</Text>
  
  <TextInput
      style={styles.input_email}
      //placeholder='Email'
      id='txt_email'
      name='txt_email'
  />

  <TouchableOpacity id='btn_create_acc' name='btn_create_acc' onPress={handleback_to_login} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
  </TouchableOpacity>


  </Card.Content>
  </Card>
  <StatusBar style="auto" />

  <Footer/>

  </View>
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

  blue_line: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 10,
  },
  text_header: {
    textAlign: 'center',
  },
  text_mandatory: {
    color: '#FC0404',
  },
  input_email: {
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
  scroll: {
    backgroundColor: '#064D82',
  },
  
});

export default Blank_Template;