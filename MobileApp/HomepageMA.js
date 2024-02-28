import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from './ComponentMA/Footer';
import Bottom_tab from './ComponentMA/BottomtabMA';


const Homepage_MA = () => {

  const navigation = useNavigation();

  //Your btn_new_pass_application logic here -----------------------------------------------------
const handleOKPress1 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('NewPassApp'); // Replace 'AnotherScreen' with the actual screen name
};

const handleNewPassApplication = () => { 
Alert.alert('Alert Title', 'Button New Pass Application Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress1 },
   
  ]);
  };
 //Your btn_new_pass_application logic here-------------------------------------------------------


 //Your btn_Get_QR_Payment_Status logic here -----------------------------------------------------
const handleOKPress2 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('GetQRPaymentStatus'); // Replace 'AnotherScreen' with the actual screen name
};

const handleGetQr = () => {
Alert.alert('Alert Title', 'Button Get QR Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress2 },
   
  ]);
  };
 //Your btn_Get_QR_Payment_Status logic here-------------------------------------------------------


//Your btn_handle_add_udate_driver logic here -----------------------------------------------------
const handleOKPress3 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('AddUpdateDriver'); // Replace 'AnotherScreen' with the actual screen name
};

const handleAddUdateDriver = () => {
Alert.alert('Alert Title', 'Button Add Update Driver Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress3 },
   
  ]);
  };
 //Your btn_handle_add_udate_driver logic here-------------------------------------------------------


 //Your btn_fcp logic here --------------------------------------------------------------------------
const handleOKPress4 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('FCP'); // Replace 'AnotherScreen' with the actual screen name
};

const handleFcp = () => {
Alert.alert('Alert Title', 'Button FCP Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress4 },
   
  ]);
  };
 //Your btn_fcp logic here---------------------------------------------------------------------------


//Your btn_land_cargo logic here --------------------------------------------------------------------------
const handleOKPress5 = () => {
  // You can navigate to another template (screen) here
   Linking.openURL('https://login.bdnsw.gov.bn/bdnsw/publicjsf/LTC/LTCDecCreate.jsf');// Replace 'AnotherScreen' with the actual screen name
};

const handleLandCargoTransit = () => {
Alert.alert('Alert Title', 'Button Land Cargo Transit Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress5 },
   
  ]);
  };
 //Your btn_land_cargo logic here---------------------------------------------------------------------------


 //Your btn_Change_Password logic here --------------------------------------------------------------------------
const handleOKPress6 = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('ChangePassword'); // Replace 'AnotherScreen' with the actual screen name
};

const handleChangePassword = () => {
Alert.alert('Alert Title', 'Button Change Password Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress6 },
   
  ]);
  };
 //Your btn_Change_Password logic here---------------------------------------------------------------------------



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>TRAVELLING PASS APPLICATION{"\n"}</Text>

              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>

              <TouchableOpacity onPress={handleNewPassApplication}  id='btnnewpassapplication' name='btnnewpassapplication' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>New Pass Application</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleGetQr} id='btngetqr' name='btngetqr' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Get QR /Check Payment Status</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleAddUdateDriver} id='btnaddupdatedriver' name='btnaddupdatedriver' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add / Update Driver</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleFcp} id='btnfcp' name='btnfcp' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Frequent Commuters Pass (FCP)</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLandCargoTransit} id='btncargotransit' name='btncargotransit' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Land Cargo Transit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleChangePassword} id='btnchangepassword' name='btnchangepassword' style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Change Password</Text>
              </TouchableOpacity>

              <Text>{"\n"}</Text>

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
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom_tab_position: {
    width: '100%',
    position: 'absolute',
    bottom: 0, //Here is the trick
  },
});

export default Homepage_MA;
