import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';


import Footer from './ComponentMA/Footer';

//Input DropDown
const countries = [
  "Apakah makanan Kegemaran anda?",
  "What is Your favourite food?",

  "Apakah nama haiwan kesayangan anda",
  "What is your pet's name?", 

  "Apakah nama buku kegemaran anda?",
  "What is Your favourite book?",

  "Apakah nama sukan kegemaran anda?",
  "What is Your favourite sports?"
]

const Forgot_pass_MA = () => {

const navigation = useNavigation();

//Your btn_back_to_login logic here -----------------------------------------------------
const btnHandleConfirm = () => {
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

const btnhandlebackToLogin = () => {
Alert.alert('Alert Title', 'Button Back To Login Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_back_to_login logic here-------------------------------------------------------

  return (

  <ScrollView style={styles.scroll}>

  <View style={styles.container}>

  <Text>{"\n"}</Text>


  <Card style={{ width:'95%'}}>
  <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius:10}}>

  <Text style={styles.textHeader}>PASSWORD SECURITY QUESTION AND ANSWER</Text>
  <View style={styles.blueLine}></View>

  <Text>{"\n"}*Email Address</Text>
  <TextInput
      style={styles.inputStyle}
      //placeholder='Email'
      id='txtemail'
      name='txtemail'
  />

  <Text>{"\n"}*Select Question</Text>

  <SelectDropdown 
   data={countries}
   defaultButtonText="PILIH SOALAN/SELECT QUESTION" // Set the default text
   onSelect={(selectedItem, index) => {
    console.log(selectedItem, index);
   }}
  buttonTextAfterSelection={(selectedItem, index) => {
    return selectedItem;
   }}
   rowTextForSelection={(item, index) => {
    return item;
   }}
  dropdownStyle={{
    backgroundColor: '#FFFFFF', // Background color of the dropdown
    borderWidth: 1,            // Border width
    borderColor: '#000000',       // Border color
  }}
  buttonStyle={{
    backgroundColor: '#FFFFFF', // Background color of the button
    borderRadius: 5,  
    borderWidth: 1,  
    width: '100%',
    height: 40
  }}
  buttonTextStyle={{
    color: '#000000',             // Text color of the button
    fontSize: 15, 
  }}
  />

  <Text>{"\n"}*Answer</Text>

  <TextInput
    style={styles.inputStyle}
    //placeholder='Question'
    id='txtquestion'
    name='txtquestion'
  />

  <Text>{"\n"}</Text>

  <TouchableOpacity id='btnconfirm' onPress={btnHandleConfirm} name='btnconfirm' style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CONFIRM</Text>
  </TouchableOpacity>

  <TouchableOpacity id='btnbacktologin' onPress={btnhandlebackToLogin} name='btnbacktologin' style={styles.buttonContainer}>
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
  blueLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 10,
  },
  textHeader: {
    textAlign: 'center',
  },
  inputStyle: {
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
  }
});

export default Forgot_pass_MA;