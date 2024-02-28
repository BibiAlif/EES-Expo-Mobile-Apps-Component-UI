import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import SelectDropdown from 'react-native-select-dropdown';

const CountryOfVehicleRegistration = [
  "BRUNEI",
  "Indonesia",
  "Malaysia",
  "Lain-lain / Other"
]

const TravellingPassApplication = () => {

   //Your btn_search_vehicle logic here-------------------------------------------------------
   const handleSearchVehicle = () => {

    const handleOKPress = () => {
      // You can navigate to another template (screen) here
      navigation.navigate('VehicleDetail'); // Replace 'AnotherScreen' with the actual screen name
    };

    Alert.alert('Alert Title', 'Button Search Vehicle Press', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    
      { text: 'OK', onPress: handleOKPress },
       
      ]);
      };
     //Your btn_search_vehicle logic here-------------------------------------------------------

  const navigation = useNavigation();

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
              
              <Text>Vehicle Details</Text>

              <View style={styles.blueLine}></View>

              <Text>{"\n"}*Country of Vehicle Registration</Text>

              <SelectDropdown 
              data={CountryOfVehicleRegistration}
              defaultButtonText="SILA PILIH / PLEASE SELECT" // Set the default text
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
              borderWidth: 1,// Border width
              borderColor: '#000000',// Border color
              }}
              buttonStyle={{
              backgroundColor: '#FFFFFF', // Background color of the button
              borderRadius: 5,  
              borderWidth: 1,  
              width: '100%',
              height: 40
              }}
              buttonTextStyle={{
              color: '#000000',// Text color of the button
              fontSize: 15, 
              }}
              />

              <Text>{"\n"}*Vehicle Registration No</Text>

              <View style={styles.inputContainer}>
              <TextInput
              style={styles.InputStyle}
              id='txtVehicleNo'
              name='txtVehicleNo'
              />
              </View>

              <Text>{"\n"}</Text>

            <TouchableOpacity onPress={handleSearchVehicle} id='btnclear' name='btnclear' style={styles.btnSearch}>
            <Text style={styles.btnSearchFont}>Search</Text>
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
  btnSearchFont: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  btnSearch: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
});

export default TravellingPassApplication;
