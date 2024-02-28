import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import CheckBox from 'expo-checkbox';

const TravellingPassApplication = () => {

//ThickBox Post -------------------------------------------------------------------------
const [isCheckedAgree, setCheckedAgree] = useState(false);
//ThickBox Post -------------------------------------------------------------------------

const navigation = useNavigation();

//Your btn_PayNow logic here -----------------------------------------------------
const handleOKPress1 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('EPaymentGateway'); // Replace 'AnotherScreen' with the actual screen name
};

const btnPayNow = () => {
Alert.alert('Alert Title', 'Button Pay Now Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress1 },
   
  ]);
  };
 //Your btn_PayNow logic here-------------------------------------------------------

 //Your btn_PayLater logic here -----------------------------------------------------
const handleOKPress2 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('PayLater'); // Replace 'AnotherScreen' with the actual screen name
};

const btnPayLater = () => {
Alert.alert('Alert Title', 'Button Pay Later Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress2 },
   
  ]);
  };
 //Your btn_PayLater logic here-------------------------------------------------------

  return (
<View style={styles.container}>

      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.textHeader}>TRAVELLING PASS APPLICATION</Text>
              <View style={styles.blueLine}></View>

              <Text>{"\n"}</Text>
              
              <Text>Section 1: Mode of Travelling</Text>

              <View style={styles.blueLine}></View>


              <Text>{"\n"}Travelers(Click to view detail of applicant and driver)</Text>
              <Text>{"\n"}</Text>

              <Text>Vehicle Details</Text>
              <View style={styles.blueLine}></View>

              <Text>{"\n"}</Text>

              <Text>{"\n"}*Registration No</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtRegistrationNo'
              name='txtRegistrationNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Make & Model</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtMakeModel'
              name='txtMakeModel'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Engine No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtEngineNo'
              name='txtEngineNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Chasis No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtChasisNo'
              name='txtChasisNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Colour.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtColour'
              name='txtColour'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Vehicle License Expiry Date.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtVehicleLicenseExpiry'
              name='txtVehicleLicenseExpiry'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Vehicle Category.</Text>
              <View style={styles.Inputfortextarea}>
              <TextInput
              id='txtVehicleLicenseExpiry'
              name='txtVehicleLicenseExpiry'
              editable={false}
              />
              </View>

              <Text>{"\n"}*Vehicle Only</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtVehicleOnly'
              name='txtVehicleOnly'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Letter Registration No</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtLetterRegNo'
              name='txtLetterRegNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Total Amount(BND)</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtTotalAmount'
              name='txtTotalAmount'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Route Of Travel</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtRouteOfTravel'
              name='txtRouteOfTravel'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Selected Post.</Text>
              <View style={styles.Inputfortextarea}>
              <TextInput
              id='txtSelectedPost'
              name='txtSelectedPost'
              editable={false}
              />
              </View>

              <Text>{"\n"}*Return Selected Post.</Text>
              <View style={styles.Inputfortextarea}>
              <TextInput
              id='txtReturnPost'
              name='txtReturnPost'
              editable={false}
              />
              </View>

              <Text>{"\n"}*Driver Name</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtDriverName'
              name='txtDriverName'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Driver Passport No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtDriverPassport'
              name='txtDriverPassport'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>


            <Text>{"\n"}</Text>

            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text></Text>
            
            <Text style={styles.TextNoteRedCenter}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isCheckedAgree}
              onValueChange={setCheckedAgree}
              color={isCheckedAgree ? '#4630EB' : undefined}
              />
            <Text></Text>
            </View>
            
            
            I Agree and confirm that the information given in this form is true and accurate. I understand making incorrect declaration and falsifying documents is an offence under Section 138, Customs Order (2006) and Section 144, Excise Order (2006) subject to a fine not exceeding BND40,000, imprisonment for a term not exceeding 1 year or both. Please ensure your application is correct before you proceed with payment. Amount paid is NOT REFUNDABLE.</Text>
           

            <Text>{"\n"}</Text>
            </Card.Content>


             <Text>{"\n"}</Text>

            <TouchableOpacity onPress={btnPayNow} id='btnPayNow' name='btnPayNow' style={styles.btnstyle}>
            <Text style={styles.btnFont}>PAY NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={btnPayLater} id='btnPayLater' name='btnPayLater' style={styles.btnstyle}>
            <Text style={styles.btnFont}>PAY LATER</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnCancel' name='btnCancel' style={styles.btnstyle}>
            <Text style={styles.btnFont}>CANCEL</Text>
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
  blueLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8',
    paddingBottom: 10,
  },
  textHeader: {
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#EAEAEA',
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
  btnFont: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  btnstyle: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#17a2b8',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
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
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: '#064D82',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  Inputfortextarea : {
    flex: 1,
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingBottom: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5, // Border radius for the input
    height: 80,
    backgroundColor: '#BDBDBD',
    //fontSize: 16, // Text font size
  },
  checkbox: {
    marginRight: 8, // Adjust the value to set the desired space
  },
  TextNoteRedCenter:{
    color: '#FF0000',
    textAlign: 'center',
  },
});

export default TravellingPassApplication;
