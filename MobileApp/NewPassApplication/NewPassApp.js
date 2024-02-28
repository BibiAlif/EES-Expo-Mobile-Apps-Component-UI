import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Card, Portal, Provider,  Modal} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottomtab from '../ComponentMA/BottomtabMA';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from 'expo-checkbox';

//Input DropDown
const ModeoftTravelling = [
  "Mengunakan Kenderaan / With Vehicle",
  "Kenderaan Khas / Priority Vehicle",
  "Kenderaan yang Ditunda / Car on Recovery Truck",
]

const TypeOfTraveling = [
  "Satu Hala / One Way",
  "Pulang Balik / Round Trip"
]

const RouteOfTravel = [
  "Entry and Exit",
  "Transit"
]

const PassportIssueCountry = [
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
];


const NewPassApp = () => {

  const navigation = useNavigation();

  //Your btn_create_pass logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('TravelingPassApplication'); // Replace 'AnotherScreen' with the actual screen name
};

const handleCreatePass = () => {
Alert.alert('Alert Title', 'Button Create Pass Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_create_pass logic here-------------------------------------------------------


  //Your btn_travel_reference logic here-------------------------------------------------------

    //Your can navigate to another template (screen) here---------------------------------------
      const [visible, setVisible] = React.useState(false);
      const showModal = () => setVisible(true);
      const hideModal = () => setVisible(false);
      const containerStyle = {backgroundColor: 'white', padding: 10, width:350, alignItems: 'flex-start', marginBottom:100, margin:23};
    //Your btn_travel_reference logic here-------------------------------------------------------

  //ThickBox Vehicle Owner Traveeling -------------------------------------------------------------------------
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleModeChange = (selectedItem, index) => {
    setShowCheckbox(selectedItem === "Mengunakan Kenderaan / With Vehicle");
  };
  //ThickBox Vehicle Owner Traveeling -------------------------------------------------------------------------

  //ThickBox Post -------------------------------------------------------------------------
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  //ThickBox Post -------------------------------------------------------------------------

   //ThickBox application as driver 6 Post -------------------------------------------------------------------------
   const [isChecked6, setChecked6] = useState(false);
   //ThickBox application as driver 6 Post -------------------------------------------------------------------------
 


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

      <Text style={styles.ModalText}>ONE-WAY TRAVEL</Text>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$3.00 per Vehicle with not more than 7 seaters including driver at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$6.00 per Vehicle with more than 7 up to 25 seaters including driver at each land Control Post.</Text>
      </View>
      
      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$10.00 per Vehicle with more than 25 seaters including driver at each land Control Post.</Text>
      </View>
      
      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$6.00 per Commercial Vehicle that does not require inspection through a scanner (x-ray machine) at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$10.00 per Commercial Vehicle that require inspection through a scanner (x-ray machine) at each land Control Post.</Text>
      </View>

      <Text>{"\n"}</Text>

      <Text style={styles.ModalText}>ROUND TRIP TRAVEL</Text>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$6.00 per Vehicle with not more than 7 seaters including driver at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$12.00 per Vehicle with more than 7 up to 25 seaters including driver at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$20.00 per Vehicle with more than 25 seaters including driver at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$12.00 per Commercial Vehicle that does not require inspection through a scanner (x-ray machine) at each land Control Post.</Text>
      </View>

      <View style={styles.GapModalText}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.ModalText}>BND$20.00 per Commercial Vehicle that require inspection through a scanner (x-ray machine) at each land Control Post.</Text>
      </View>

      <Text>{"\n"}</Text>

      <Text>Travelling Reference</Text>

      <Text>{"\n"}</Text>

      <Text>1. Destinasi ke Miri, Sarawak dari Negara Brunei Darussalam (atau sebaliknya) Destination to Miri, Sarawak from Brunei Darussalam (or vice versa)
            Pilih Pos Kawalan Keluar / Masuk / Select Control Posts for Entry/Exit - Sungai Tujuh, Kuala Belait
            Sila rujuk kadar yang dinyatakan di atas mengikut jenis Kenderaan bagi setiap pos kawalan.
      </Text>

      <Text>{"\n"}</Text>

      <Text>2. Destinasi ke Miri, Sarawak dari Limbang, Sarawak (atau sebaliknya) Destination to Miri, Sarawak from Limbang, Sarawak (or vice versa)
            Pilih Pos Kawalan Keluar/Masuk / Select Control Posts for Entry/Exit:
            a. Kuala Lurah, Bandar Seri Begawan dan Sungai Tujoh, Kuala Belait; atau
            b. Ujong Jalan, Temburong dan Sungai Tujoh, Kuala Belait
            Sila rujuk kadar yang dinyatakan di atas mengikut jenis Kenderaan bagi setiap pos kawalan.
      </Text>

      <Text>{"\n"}</Text>

      <Text>3. Destinasi ke Miri, Sarawak dari Lawas, Sarawak (atau sebaliknya) Destination to Miri, Sarawak from Lawas, Sarawak (or vice versa)
            Pilih Pos Kawalan Keluar/Masuk / Select Control Posts for Entry/Exit:
            a. Sungai Tujuh, Kuala Belait; Kuala Lurah, Bandar Seri Begawan; Ujung Jalan, Temburong dan/and Labu, Temburong; atau/or
            b. Sungai Tujoh, Kuala Belait dan/and Labu, Temburong
            Sila rujuk kadar yang dinyatakan di atas mengikut jenis Kenderaan bagi setiap pos kawalan.
      </Text>

      <Text>{"\n"}</Text>

      <Text>4. Destinasi ke Limbang, Sarawak dari Negara Brunei Darussalam (atau sebaliknya), Destination to Limbang, Sarawak from Brunei Darussalam (or vice versa)
            Pilih Pos Kawalan Keluar/Masuk / Select Control Posts for Entry/Exit:
            a. Kuala Lurah, Bandar Seri Begawan (jika dari Bandar Seri Begawan / if from Bandar Seri Begawan); atau/or
            b. Ujung Jalan, Temburong (jika dari Temburong / if from Temburong)
            Sila rujuk kadar yang dinyatakan di atas mengikut jenis Kenderaan bagi setiap pos kawalan.
      </Text>

      <Text>{"\n"}</Text>

      <Text>5. Destinasi ke Lawas, Sarawak dari Negara Brunei Darussalam (atau sebaliknya) Destination to Lawas, Sarawak from Brunei Darussalam (or vice versa)
            Pilih Pos Kawalan Keluar/Masuk / Select Control Posts for Entry/Exit:
            a. Kuala Lurah, Bandar Seri Begawan; Ujung Jalan, Temburong dan Labu, Temburong (jika dari Bandar Seri Begawan / if from Bandar Seri Begawan); atau / or
            b. Labu, Temburong (jika dari Temburong / if from Temburong
            Sila rujuk kadar yang dinyatakan di atas mengikut jenis Kenderaan bagi setiap pos kawalan.
      </Text>

      <Text>{"\n"}</Text>

      <Text>Following are some of the commercial vehicles that do not require x-ray:</Text>
      <Text>- Oil tanker truck</Text>
      <Text>- Vehicles that are loaded with explosive materials</Text>
      <Text>- Towing trailer</Text>
      <Text>- Vehicles that bring live animals and eggs</Text>
      

      <TouchableOpacity visible={visible} onPress={hideModal} id='btnclear' name='btnclear' style={styles.buttonButtonCreatepassStyle}>
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
              
              <Text>Section 1: Mode of Travelling</Text>
              <View style={styles.blueLine}></View>

              <Text>{"\n"}*Mode of Travelling</Text>

              <SelectDropdown 
              data={ModeoftTravelling}
              defaultButtonText="SILA PILIH / PLEASE SELECT"
              onSelect={handleModeChange}
              buttonTextAfterSelection={(selectedItem, index) => selectedItem}
              rowTextForSelection={(item, index) => item}

              dropdownStyle={{
              backgroundColor: '#FFFFFF',// Background color of the dropdown
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

              {showCheckbox && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>Vehicle Owner Traveling?  </Text>
                  <CheckBox 
                   style={styles.checkbox}
                   value={isChecked}
                   onValueChange={setChecked}
                   color={isChecked ? '#4630EB' : undefined}
                  />
                </View>
              )}

              <Text>{"\n"}*Type Of Traveling</Text>

              <SelectDropdown 
              data={TypeOfTraveling}
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


              <Text>{"\n"}*Route Of Travel</Text>

              <SelectDropdown
              data={RouteOfTravel}
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
            <Text style={styles.textNoteColor}>{"\n"}Note:</Text>
            <Text style={styles.textNoteColor}>For Mode of Travelling " Priority Vehicle" it is for Ambulance, Fire department, Government Official Vehicle, Diplomatic Vehicle & Hearse Vehicle{"\n"}</Text>
            </Card.Content>

            <Text>{"\n"}</Text>

            <Text onPress={() => Linking.openURL('https://login.bdnsw.gov.bn/ees/travelPass/showExmptionInfo')}>
            Please click here for details on exception of service charges (CaP)
            </Text>

            <Text>{"\n"}</Text>

            <Text>Section 2: Control Post for Exit / Entry</Text>
            <View style={styles.blueLine}></View>

            <Text style={styles.textNoteRed}>*Please select your route as per sequence of trip</Text>

            <TouchableOpacity id='btn_travel_reference' onPress={showModal} name='btn_travel_reference' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>!(Travelling Reference)</Text>
            </TouchableOpacity>

            <Text>{"\n"}</Text>

            <View style={styles.GapDistance}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked1}
              onValueChange={setChecked1}
              color={isChecked1 ? '#4630EB' : undefined}
              />
            <Text>Terminal Ferry Serasa</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked2}
              onValueChange={setChecked2}
              color={isChecked2 ? '#4630EB' : undefined}
              />
            <Text>Sungai Tujoh, Kuala Belait(Brunei - Miri, Sarawak)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked3}
              onValueChange={setChecked3}
              color={isChecked3 ? '#4630EB' : undefined}
              />
            <Text>Kuala Lurah, Bandar Seri Begawan (Brunei - Limbang, Sarawak)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked4}
              onValueChange={setChecked4}
              color={isChecked4 ? '#4630EB' : undefined}
              />
            <Text>Ujong Jalan, Temburong (Limbang, Sarawak - Brunei)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked5}
              onValueChange={setChecked5}
              color={isChecked5 ? '#4630EB' : undefined}
              />
            <Text>Labu, Temburong (Brunei - Lawas, Sarawak)</Text>
            </View>

            </View>

            <Text>{"\n"}</Text>

            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text style={styles.textNoteColor}>{"\n"}Note:</Text>
            <Text style={styles.textNoteColor}>Application can select more than one control post{"\n"}</Text>
            </Card.Content>

            <Text>{"\n"}</Text>

            <Text>Section 3: Application Detail</Text>
            <View style={styles.blueLine}></View>



            <View style={styles.GapDistanceApplicationDetail}>

            <Text>{"\n"}*Name</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyle}
            id='txtname'
            name='txtname'
            />
            </View>

            <Text>{"\n"}*Nationality</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyleDissable}
            id='txtname'
            name='txtname'
            editable={false}
            />
            </View>

            <Text>{"\n"}*IC</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyleDissable}
            id='txtname'
            name='txtname'
            editable={false}
            />
            </View>

            <Text>{"\n"}*Date Of Birth</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyleDissable}
            id='txtname'
            name='txtname'
            editable={false}
            />
            </View>

            <Text>{"\n"}*Passport No.</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyle}
            id='txtname'
            name='txtname'
            />
            </View>

            <Text>{"\n"}*Passport Expiry</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyle}
            id='txtname'
            name='txtname'
            />
            </View>


            <Text>{"\n"}*Passport Issuing Country</Text>
            <View style={styles.GapBetween}>
            <SelectDropdown
              data={PassportIssueCountry}
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

              
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox 
              style={styles.checkbox}
              value={isChecked6}
              onValueChange={setChecked6}
              color={isChecked6 ? '#4630EB' : undefined}
              />
            <Text>*Application As Driver</Text>
            </View>
            </View>


            <Text>{"\n"}*Frequent Commuter Pass Holder ?</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyle}
            id='txtname'
            name='txtname'
            />
            </View>
            
            <Text>{"\n"}*Frequent Commuter Pass Approval No</Text>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.InputStyle}
            id='txtname'
            name='txtname'
            />
            </View>

            </View>

            <Text>{"\n"}</Text>

            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text style={styles.textNoteColor}>{"\n"}Note:</Text>
            <Text style={styles.textNoteColor}>Requirements to use FCP</Text>
            <Text style={styles.textNoteColor}>- Driver</Text>
            <Text style={styles.textNoteColor}>- No other passenger in the Vehicles{"\n"}</Text>
            <Text style={styles.textNoteColor}>**subject to FCP terms and conditions{"\n"}</Text>
            </Card.Content>

            <Text>{"\n"}</Text>

            <TouchableOpacity onPress={handleCreatePass}  id='btnCreatePass' name='btnCreatePass' style={styles.buttonButtonCreatepassStyle}>
            <Text style={styles.buttonCreatePass}>CREATE PASS</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnclear' name='btnclear' style={styles.buttonButtonCreatepassStyle}>
            <Text style={styles.buttonCreatePass}>CLEAR</Text>
            </TouchableOpacity>
            
            <Text>{"\n"}</Text>


            <Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
            <Text></Text>
            <Text style={[styles.TextNoteRedCenter, { fontWeight: 'bold' }, , { fontSize: 16 } ]}>For any query or assistance please contact{"\n"}</Text>
            <Text style={styles.TextNoteRedCenter}>Customer Service Counter at 2382361 (during office hours) or email at info@customs.gov.bn</Text>
            <Text style={styles.TextNoteRedCenter}>Or visit Royal Customs and Excise Department Headquarter, Jalan Menteri Besar</Text>
            <Text>{"\n"}</Text>
            </Card.Content>

            <Text>{"\n"}</Text>

            </Card.Content>
            </Card>

          <StatusBar style="auto" />

          <Footer />
        </View>

      </ScrollView>

      <View style={styles.bottomTabPosition}><Bottomtab/></View>
      
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTabPosition: {
    width: '100%',
    position: 'absolute',
    bottom: 0, //Here is the trick
  },
  textNoteColor: {
    color: '#17a2b8',
  },
  textNoteRed: {
    color: '#FF0000',
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
  GapDistance: {
    gap: 10,
  },
  checkbox: {
    marginRight: 8, // Adjust the value to set the desired space
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
  buttonButtonCreatepassStyle: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonCreatePass: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  GapDistanceApplicationDetail: {
    gap: 4,
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
  TextNoteRedCenter:{
    color: '#FF0000',
    textAlign: 'center',
  },
  GapBetween: {
    gap: 20,
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

export default NewPassApp;
