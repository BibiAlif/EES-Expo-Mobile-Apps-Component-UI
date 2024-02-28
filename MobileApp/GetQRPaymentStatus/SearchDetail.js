import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import CheckBox from 'expo-checkbox';


const SearchDetail = () => {
  const navigation = useNavigation();

//ThickBox Post -------------------------------------------------------------------------
const [isCheckedAgree, setCheckedAgree] = useState(false);
//ThickBox Post -------------------------------------------------------------------------


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>TRAVELLING PASS APPLICATION</Text>
              <View style={styles.blue_line}></View>


            <Text>{"\n"}</Text>
            <Card.Content style={{ backgroundColor: '#FFE2D2', borderRadius: 5 }}>
            <Text>{"\n"}</Text>
            <Text style={styles.TextNoteredCenter}>
             Please make your payment and Click Pay Now button. (Click Payment Status (link to https://login.bdnsw.gov.bn/schemecardrevenue/login/login.jsf) to check payment status. Select "Search" and enter the bill reference)
            </Text>
            <Text>{"\n"}</Text>
            </Card.Content>
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


              <Text>{"\n"}*Vehicle License Expiry Date</Text>
              <TextInput
              id='txtVehicleLicenseExpiry'
              name='txtVehicleLicenseExpiry'
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
              
              <Text>{"\n"}</Text>

              <Text>Applicant Details</Text>
              <View style={styles.blue_line}></View>


              <Text>{"\n"}*Name.</Text>
              <TextInput
              id='txtName'
              name='txtName'
              style={styles.InputStyleDissable}
              editable={false}
              />


              <Text>{"\n"}*Passport No.</Text>
              <TextInput
              id='txtPassportNo'
              name='txtPassportNo'
              style={styles.InputStyleDissable}
              editable={false}
              />

            
            <Text>{"\n"}</Text>
            <Card.Content style={{ backgroundColor: '#E5E5E5', borderRadius: 5, alignItems:'center' }}>
            <Text>{"\n"}</Text>
            <Text style={styles.TextNoteredCenter}>
             I Agree and confirm that the information given in this form is true and accurate. I understand making incorrect declaration and falsifying documents is an offence under Section 138, Customs Order (2006) and Section 144, Excise Order (2006) subject to a fine not exceeding BND40,000, imprisonment for a term not exceeding 1 year or both.
            <Text>{"\n"}</Text>
            </Text>
        

            <View style={{ flexDirection: 'row' }}>
            <CheckBox 
              style={styles.GapBetweenthick}
              value={isCheckedAgree}
              onValueChange={setCheckedAgree}
              color={isCheckedAgree ? '#4630EB' : undefined}
            />
            <Text style={styles.TextNoteredCenter}>*I Agree</Text>
            <Text>{"\n"}</Text>
            </View>
            </Card.Content>

            <Text>{"\n"}</Text>
    
            <TouchableOpacity id='btnPayNow' name='btnPayNow' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>PAY NOW</Text>
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
  TextNoteredCenter:{
    color: '#FF0000',
    textAlign: 'center',
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

export default SearchDetail;
