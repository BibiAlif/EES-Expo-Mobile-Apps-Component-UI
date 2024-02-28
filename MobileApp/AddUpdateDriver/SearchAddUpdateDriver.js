import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import CheckBox from 'expo-checkbox';


const SearchAddUpdateDriver = () => {
  const navigation = useNavigation();

//Your btn_Edit logic here -----------------------------------------------------
const handleOKPress1 = () => {
  // You can navigate to another template (screen) here
  //navigation.navigate(''); // Replace 'AnotherScreen' with the actual screen name
};

const btnSearch = () => { 
Alert.alert('Alert Title', 'Button Edit Is Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress1 },
   
  ]);
  };
 //Your btn_Edit logic here-------------------------------------------------------

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>ADD/UPDATE DRIVER</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>

            <Text>Vehicle Details</Text>
            <View style={styles.blue_line}></View>
              
              <Text>{"\n"}*Registration No.</Text>
              <TextInput
              id='txtRegistrationNo'
              name='txtRegistrationNo'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Make & Model</Text>
              <TextInput
              id='txtMakeModel'
              name='txtMakeModel'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Engine No.</Text>
              <TextInput
              id='txtEngineNo'
              name='txtEngineNo'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Colour</Text>
              <TextInput
              id='txtColor'
              name='txtColor'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Vehicle License Expiry Date</Text>
              <TextInput
              id='txtVehicleLicenseExpiryDate'
              name='txtVehicleLicenseExpiryDate'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Vehicle Only</Text>
              <TextInput
              id='txtVehicleOnly'
              name='txtVehicleOnly'
              style={styles.InputStyleDissable}
              editable={false}
              />
              

              <Text>{"\n"}*Letter Registration No</Text>
              <TextInput
              id='txtLetterRegNo'
              name='txtLetterRegNo'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Total Amount(BND)</Text>
              <TextInput
              id='txtTotalAmount'
              name='txtTotalAmount'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Bill Reference No.</Text>
              <TextInput
              id='txtBillReferenceNo'
              name='txtBillReferenceNo'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Bill Status.</Text>
              <TextInput
              id='txtBillStatus'
              name='txtBillStatus'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*EES Reference No.</Text>
              <TextInput
              id='txtESSReferenceNo'
              name='txtESSReferenceNo'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Applicant Name</Text>
              <TextInput
              id='txtApplicantName'
              name='txtApplicantName'
              style={styles.InputStyleDissable}
              editable={false}
              />
            
            
              <Text>{"\n"}* Passport No.</Text>
              <TextInput
              id='txtPassportNo'
              name='txtPassportNo'
              style={styles.InputStyleDissable}
              editable={false}
              />

            <Text>{"\n"}</Text>
    
            <TouchableOpacity onPress={btnSearch} id='btnPayNow' name='btnPayNow' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnPayNow' name='btnPayNow' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CANCEL</Text>
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
  InputStyleDissable: {
    flex: 1,
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#BDBDBD',
    borderRadius: 5, // Border radius for the input
    //fontSize: 16, // Text font size
  },
  GapBetweenthick: {
    marginRight: 15, // Adjust the value to set the desired space
  },
});

export default SearchAddUpdateDriver;
