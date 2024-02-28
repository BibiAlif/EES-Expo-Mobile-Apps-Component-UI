import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';

const PayNow = () => {
  const navigation = useNavigation();

  const handleLinkPress1 = () => {
    // Open the link in the default browser
    Linking.openURL('https://www.google.com/');
  };

  const handleLinkPress2 = () => {
    // Open the link in the default browser
    Linking.openURL('https://www.google.com/');
  };

  //Your btnclosed logic here -----------------------------------------------------
 const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Homepage'); // Replace 'AnotherScreen' with the actual screen name
};

const btnclose = () => {
Alert.alert('Alert Title', 'Button Close Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btnclosed logic here-------------------------------------------------------

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>VEHICLE PASS</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>
              
              <Text style={styles.text_header}>Travelling Summary</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>

              <Text>Vehicle Detail</Text>
              <View style={styles.blue_line}></View>

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

              <Text>{"\n"}*Bill Reference No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtBillReferenceNo'
              name='txtBillReferenceNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*EES Reference No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtEESReferenceNo'
              name='txtEESReferenceNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*EES Reference No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtESSReferenceNo'
              name='txtESSReferenceNo'
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

            <TouchableOpacity onPress={btnclose} id='btnClose' name='btnClose' style={styles.btnstyle}>
            <Text style={styles.btnFont}>CLOSE</Text>
            </TouchableOpacity>

            <Text>{"\n"}</Text>

            <Text style={styles.stylefontlink} onPress={handleLinkPress1}>Generate QR & Download PDF</Text>
            <Text style={styles.stylefontlink} onPress={handleLinkPress2}>Land Cargo Transit</Text>

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
  stylefontlink: {
    textAlign: 'center',
    color: '#045F7E',
    fontSize: 20,
  },
});

export default PayNow;
