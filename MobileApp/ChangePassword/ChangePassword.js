import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChangePassword = () => {
  const navigation = useNavigation();


  //Password Hide or unhide------------------------------------------------------------------
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const togglePasswordVisibility = () => {
   setIsPasswordVisible(!isPasswordVisible);
 };
 //Password Hide or unhide------------------------------------------------------------------

//Password Hide or unhide------------------------------------------------------------------
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

const togglePasswordVisibility2 = () => {
   setIsPasswordVisible2(!isPasswordVisible2);
 };
 //Password Hide or unhide------------------------------------------------------------------


    //Your btn_Search logic here -----------------------------------------------------
const handleOKPress1 = () => {
  // You can navigate to another template (screen) here
  //navigation.navigate('SearchAddUpdateDriver'); // Replace 'AnotherScreen' with the actual screen name
};

const btnchangepassword = () => { 
Alert.alert('Alert Title', 'Button Change Password Is Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress1 },
   
  ]);
  };
 //Your btn_Search logic here-------------------------------------------------------

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>CHANGE PASSWORD</Text>
              <View style={styles.blue_line}></View>
              
              <Text style={styles.fontred}>*Mandatory</Text>

              <Text>{"\n"}*New Password</Text>
              <View style={styles.inputContainer}>
              <TextInput
              style={styles.input}
              id='txtNewPassword'
              name='txtNewPassword'
              secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
              <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={25} style={styles.iconEye} />
              </TouchableOpacity>
              </View>


            <Text>{"\n"}</Text>

            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text style={styles.textNoteColor}>{"\n"}Note:</Text>
            <Text style={styles.textNoteColor}>Note Please enter not less than 8 character</Text>
            <Text>{"\n"}</Text>
            </Card.Content>

            <Text>{"\n"}</Text>

            <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            id='txtReenterpassword'
            name='txtReenterpassword'
            secureTextEntry={!isPasswordVisible2}
            />
            <TouchableOpacity onPress={togglePasswordVisibility2} style={styles.iconContainer}>
            <FontAwesome name={isPasswordVisible2 ? 'eye' : 'eye-slash'} size={25} style={styles.iconEye} />
            </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={btnchangepassword} id='btnchangepassword' name='btnchangepassword' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
            </TouchableOpacity>

            </Card.Content>
          </Card>

          <StatusBar style="auto" />

          <Footer />
        </View>

      </ScrollView>

      <View style={styles.bottom_tab_position}><Bottom_tab/></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064D82',
  },
  scroll: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    paddingBottom: '20%', // Adjust this value as needed to accommodate the Bottom_tab
  },
  blue_line: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8',
    paddingBottom: 10,
  },
  text_header: {
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom_tab_position: {
    width: '100%',
    position: 'absolute',
    bottom: 0, //Here is the trick
  },
  fontred: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  InputStyle: {
    flex: 1,
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5, // Border radius for the input
    //fontSize: 16, // Text font size
  },
  textNoteColor: {
    color: '#17a2b8',
  },
  input: {
    height: 46,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
    flex: 1,
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius for the input
    //fontSize: 16, // Text font size
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChangePassword;
