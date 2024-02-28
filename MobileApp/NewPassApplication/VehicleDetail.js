import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Platform, Alert  } from 'react-native';
import { Card, Portal, Provider,  Modal, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'expo-checkbox';


const VehicleCategory = [
  "Kenderaan Penumpang, 1-7 Tempat Duduk",
  "Passengers vehicle 1-7 Seats",
  "Kenderaan Penumpang, 8-25 Tempat Duduk",
  "Passengers vehicle 8-25 Seats",
  "Kenderaan Penumpang, Lebih Daripada 25 Tempat Duduk",
  "Passengers vehicle More Than 25 Seats",
  "Kenderaan Komercial tidak melalui X-Ray",
  "Commercial Vehicle does not undergo undergo X-Ray",
  "Kenderaan Komercial melalui X-Ray",
  "Commercial Vehicle undergo X-Ray",
  "Motorsikal",
  "Motorcycle"
]

PassportIssungCountry = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]

FrequencyCommuterPassHolder = [
  "Yes / Ya",
  "No / Tidak"
]

const TravellingPassApplication = () => {

  const navigation = useNavigation();

  //Date Vehicle expiry Format Input--------------------------------------------------------------
  const [dateVehicleExpiry, setDateVehicleExpiry] = useState(new Date());
  const [showPickerVehicleExpiry, setShowPickerVehicleExpiry] = useState(false);
  const [textInputValueVehicleExpiry, setTextInputValueVehicleExpiry] = useState(dateVehicleExpiry.toDateString());

  const onChangeVehicleExpiry = (event, selectedDate) => {
    const currentDate = selectedDate || dateVehicleExpiry;
    setShowPickerVehicleExpiry(Platform.OS === 'ios');
    setDateVehicleExpiry(currentDate);
    setTextInputValueVehicleExpiry(currentDate.toDateString());
  };

  const showDatepickerVehicleExpiry = () => {
    setShowPickerVehicleExpiry(true);
  };
  //Date Vehicle expiry Format Input--------------------------------------------------------------


  //Date DOB Format Input--------------------------------------------------------------
  const [datedob, setDatedob] = useState(new Date());
  const [showPickerdob, setShowPickerdob] = useState(false);
  const [textInputValuedob, setTextInputValuedob] = useState(datedob.toDateString());

  const onChangedob = (event, selectedDate) => {
    const currentDate = selectedDate || datedob;
    setShowPickerdob(Platform.OS === 'ios');
    setDatedob(currentDate);
    setTextInputValuedob(currentDate.toDateString());
  };

  const showDatepickerdob = () => {
    setShowPickerdob(true);
  };
  //Date DOB Format Input--------------------------------------------------------------

//ThickBox application as driver -------------------------------------------------------------------------
const [isCheckedOwnerAsDriver, setCheckedOwnerAsDriver] = useState(false);
//ThickBox application as driver -------------------------------------------------------------------------


//ThickBox I agree  -------------------------------------------------------------------------
const [isCheckedIAgree, setCheckedIAgree] = useState(false);
//ThickBox I agree  -------------------------------------------------------------------------

 //Your can navigate to another template (screen) here---------------------------------------
 const [visible, setVisible] = React.useState(false);
 const showModal = () => setVisible(true);
 const hideModal = () => setVisible(false);
 const containerStyle = {backgroundColor: 'white', padding: 10, width:350, alignItems: 'flex-start', marginBottom:100, margin:23};
//Your btn_travel_reference logic here-------------------------------------------------------


 //Your btnnext logic here -----------------------------------------------------
 const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('TravelingPassDetail'); // Replace 'AnotherScreen' with the actual screen name
};

const btnnext = () => {
Alert.alert('Alert Title', 'Button Next Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btnnext logic here-------------------------------------------------------

  return (
    <View style={styles.container}>

<Provider>

<Portal>
<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>

<ScrollView>
  <Text style={styles.textmodal}>Information On Vehicle Category</Text>
  <Text>Charge Calculation Guide</Text>

  <Text>{"\n"}</Text>

  <Text style={styles.ModalText}>Note</Text>

  <Text style={styles.ModalText}>Charge Calculation Charge (One-Way per Control Post)</Text>

  <View style={styles.GapModalText}>
  <Text style={styles.bullet}>{"\u2022"}</Text>
  <Text style={styles.ModalText}>Passenger Vehicle, Maximum 7 Seats =$3.00.</Text>
  </View>

  <View style={styles.GapModalText}>
  <Text style={styles.bullet}>{"\u2022"}</Text>
  <Text style={styles.ModalText}>Passenger Vehicle, 8-25 Seats =$6.00.</Text>
  </View>
  
  <View style={styles.GapModalText}>
  <Text style={styles.bullet}>{"\u2022"}</Text>
  <Text style={styles.ModalText}>Passenger Vehicle, more than 25 Seats =$10.00.</Text>
  </View>
  
  <View style={styles.GapModalText}>
  <Text style={styles.bullet}>{"\u2022"}</Text>
  <Text style={styles.ModalText}>Commercial Vehicle does not undergo X-Ray = $6.00.</Text>
  </View>

  <View style={styles.GapModalText}>
  <Text style={styles.bullet}>{"\u2022"}</Text>
  <Text style={styles.ModalText}>Commercial Vehicle undergo X-Ray = $10.00.</Text>
  </View>

  <Text>{"\n"}</Text>

  <Text>Following are some of the commercial vehicles that do not require x-ray:</Text>
  <Text>- Oil tanker truck</Text>
  <Text>- Vehicles that are loaded with explosive materials</Text>
  <Text>- Towing trailer</Text>
  <Text>- Vehicles that bring live animals and eggs</Text>
  
  <Text>{"\n"}</Text>

  <TouchableOpacity visible={visible} onPress={hideModal} id='btnclear' name='btnclear' style={styles.btnstyle}>
    <Text style={styles.buttonCreatePass}>Close</Text>
  </TouchableOpacity>
</ScrollView>

</Modal>
</Portal>

      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.textHeader}>TRAVELLING PASS APPLICATION</Text>
              <View style={styles.blueLine}></View>

              <Text>{"\n"}</Text>
              
              <Text style={{textAlign: 'center'}}>Vehicle Details</Text>

              <View style={styles.blueLine}></View>

              <TouchableOpacity onPress={showModal} id='btn_travel_reference' name='btn_travel_reference' style={styles.buttonContainer}>
              <Text style={styles.buttonText}>!(Travelling Reference)</Text>
              </TouchableOpacity>

              <Text>{"\n"}1. Vehicle Category</Text>

              <View style={styles.blueLine}></View>

              <Text>{"\n"}</Text>

              <Text>{"\n"}Vehicle Category</Text>
              <SelectDropdown 
              data={VehicleCategory}
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
              id='txtVehicleRegistration'
              name='txtVehicleRegistration'
              />
              </View>

              <Text>{"\n"}2. Registration Details</Text>

              <View style={styles.blueLine}></View>

              <Text>{"\n"}*Vehicle Registration</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtVehicleNo'
              name='txtVehicleNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>


              <Text>{"\n"}*Country of Vehicle Registration</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtCountryofVehicleReg'
              name='txtCountryofVehicleReg'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>


              <Text>{"\n"}*Make & Model</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtMakeandModel'
              name='txtMakeandModel'
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


              <Text>{"\n"}*Colour</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtColour'
              name='txtColour'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>



              <Text>{"\n"}*Vehicle License Expiry Date</Text>

              <View>
              <TextInput
              style={styles.Inputdate}
              value={textInputValueVehicleExpiry}
              editable={false}
              />

              <TouchableOpacity onPress={showDatepickerVehicleExpiry} style={styles.button}>
              <Text style={styles.buttonText}>Select Date</Text>
              </TouchableOpacity>

              {showPickerVehicleExpiry && (
              <DateTimePicker
              testID="dateTimePickerVehicleExpiry"
              value={dateVehicleExpiry}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeVehicleExpiry}
              />
               )}
              </View>

              <Text>{"\n"}3. Owner Details</Text>

              <View style={styles.blueLine}></View>

              <Text>{"\n"}*Name</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtName'
              name='txtName'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Nationality</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtNationality'
              name='txtNationality'
              style={styles.InputStyle}
              />
              </View>

              <Text>{"\n"}*IC No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtICNo'
              name='txtICNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>


              <Text>{"\n"}*Date Of Birth</Text>
              <View>
              <TextInput
              style={styles.Inputdate}
              value={textInputValuedob}
              editable={false}
              />

              <TouchableOpacity onPress={showDatepickerdob} style={styles.button}>
              <Text style={styles.buttonText}>Select Date</Text>
              </TouchableOpacity>

              {showPickerdob && (
              <DateTimePicker
              testID="dateTimePickerdob"
              value={datedob}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangedob}
              />
               )}
              </View>


              <Text>{"\n"}*Passport No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtPassportNo'
              name='txtPassportNo'
              style={styles.InputStyle}
              />
              </View>

              <Text>{"\n"}*Passport Issuing Country</Text>
              <SelectDropdown 
              data={PassportIssungCountry}
              defaultButtonText="BRUNEI DARUSSALAM" // Set the default text
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


              <Text>{"\n"}*Address</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtAddress'
              name='txtAddress'
              style={styles.Inputfortextarea}
              />
              </View>

              <Text>{"\n"}*Zip/Postal Code</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtZipPostalCode'
              name='txtZipPostalCode'
              style={styles.InputStyle}
              />
              </View>

            <Text>{"\n"}</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text>*Owner As Driver</Text>

            <CheckBox 
              style={styles.checkbox}
              value={isCheckedOwnerAsDriver}
              onValueChange={setCheckedOwnerAsDriver}
              color={isCheckedOwnerAsDriver ? '#4630EB' : undefined}
              />
            </View>


            <Text>{"\n"}*Frequent Commuter Pass Holder?</Text>
              <SelectDropdown 
              data={FrequencyCommuterPassHolder}
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

            <Text>{"\n"}</Text>

            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text></Text>
            <Text style={[styles.TextNoteRedCenter, { fontWeight: 'bold' }, , { fontSize: 16 } ]}>Note{"\n"}</Text>
            <Text style={styles.TextNoteRedCenter}>Vehicles shall be owned by the applicant and has valid vehicle license for travelling. For vehicles not belonging to the applicant, applicant must obtain permission letter from the owner. </Text>
            <Text style={styles.TextNoteRedCenter}>{"\n"}PLEASE ENSURE AUTHORIZE LETTER IS PROVIDED IF OWNER IS NOT TRAVELLING.</Text>
            <Text style={styles.TextNoteRedCenter}>{"\n"}Temporary outward approval for foreign vehicles may be re-use in any Customs Control Posts for such period not exceeding 3 months from the date of its issuance. This form must be shown to Customs Officer before departure from and upon arrival at such control post.
Every applicant and vehicle used for temporary outward purposes must meet the enforced Brunei Darussalam Road Traffic Act.</Text>
            <Text style={styles.TextNoteRedCenter}>{"\n"}Any modification and alteration to parts and equipment of the said vehicle whilst being abroad must be declared to Customs Officer upon arrival.
I Agree and confirm that the information given in this form is true and accurate. </Text>
            <Text style={styles.TextNoteRedCenter}>{"\n"}I understand making incorrect declaration and falsifying documents is an offence under Section 138, Customs Order (2006) and Section 144, Excise Order (2006) subject to a fine not exceeding BND40,000, imprisonment for a term not exceeding 1 year or both.</Text>


            <Text>{"\n"}</Text>

            <View style={{ alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

            <CheckBox 
              style={styles.checkbox}
              value={isCheckedIAgree}
              onValueChange={setCheckedIAgree}
              color={isCheckedIAgree ? '#4630EB' : undefined}
              />
              
            <Text style={styles.TextNoteRedCenter}>I Agree</Text>
            </View>
            </View>


            <Text>{"\n"}</Text>
            </Card.Content>


             <Text>{"\n"}</Text>

            <TouchableOpacity id='btnback' name='btnback' style={styles.btnstyle}>
            <Text style={styles.btnFont}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={btnnext} id='btnnext' name='btnnext' style={styles.btnstyle}>
            <Text style={styles.btnFont}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnclear' name='btnclear' style={styles.btnstyle}>
            <Text style={styles.btnFont}>Clear</Text>
            </TouchableOpacity>

            </Card.Content>
          </Card>

          <StatusBar style="auto" />

          <Footer />
        </View>
      </ScrollView>

      <View style={styles.bottom_tab_position}><Bottom_tab/></View>
     
      </Provider>
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
  Inputdate: {
    color: 'black', // Text color
    flex: 1,
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
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
    height: 100
    //fontSize: 16, // Text font size
  },
  checkbox: {
    marginRight: 8, // Adjust the value to set the desired space
  },
  TextNoteRedCenter:{
    color: '#FF0000',
    textAlign: 'center',
  },
  textmodal: { // Modal
    color: 'white',
    borderWidth: 0,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#021883',
    borderRadius: 5,
    padding: 10, // Increase the padding to make the border longer
    paddingRight: 'auto',
  },
  bullet: {
    fontSize: 30,
    marginRight: 5,
    color: '#17a2b8', // Text color
    paddingRight: 10,
  },
  ModalText: {
    color: '#17a2b8', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
    marginTop: 10,
  },
  GapModalText: {
    alignItems: 'flex-start',
    marginBottom: 1,
    flexDirection: 'row',
  },
});

export default TravellingPassApplication;
