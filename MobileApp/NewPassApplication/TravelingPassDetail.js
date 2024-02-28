import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from 'expo-checkbox';

const Nationality = [
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

//Input DropDown
const FrequentCommuterHolder = [
  "Yes / Ya",
  "No / Tidak",
]


const TravellingPassDetail = () => {
  const navigation = useNavigation();

//ThickBox Post -------------------------------------------------------------------------
const [isCheckeddriver, setCheckeddriver] = useState(false);
//ThickBox Post -------------------------------------------------------------------------

 //Your btnnext logic here -----------------------------------------------------
 const handleOKPress = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('TravelingPassApplicationPay'); // Replace 'AnotherScreen' with the actual screen name
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
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>TRAVELING PASS:/TRAVELLING DETAILS</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>
              
              <Text>Summary of Applicant Driver Details</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}</Text>

      <ScrollView horizontal={true}>

      <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.header}>S.No</Text>
        <Text style={styles.header}>Name</Text>
        <Text style={styles.header}>Nationality</Text>
        <Text style={styles.header}>Passport No.</Text>
        <Text style={styles.header}>Passport Expiry</Text>
        <Text style={styles.header}>Exemption</Text>
        <Text style={styles.header}>As Driver</Text>
        <Text style={styles.header}>Edit</Text>
        <Text style={styles.header}>Delete</Text>
      </View>

    
      <View style={styles.row}>
        <Text style={styles.cell}>Cell 1</Text>
        <Text style={styles.cell}>Cell 2</Text>
        <Text style={styles.cell}>Cell 3</Text>
        <Text style={styles.cell}>Cell 4</Text>
        <Text style={styles.cell}>Cell 5</Text>
        <Text style={styles.cell}>Cell 6</Text>
        <Text style={styles.cell}>Cell 7</Text>
        <FontAwesome6 style={styles.cell} name="edit" size={24} color="#17a2b8" />
        <MaterialIcons style={styles.cell} name="delete" size={24} color="red" />
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>Cell 1 </Text>
        <Text style={styles.cell}>Cell 2</Text>
        <Text style={styles.cell}>Cell 3</Text>
        <Text style={styles.cell}>Cell 4</Text>
        <Text style={styles.cell}>Cell 5</Text>
        <Text style={styles.cell}>Cell 6</Text>
        <Text style={styles.cell}>Cell 7</Text>
        <FontAwesome6 style={styles.cell} name="edit" size={24} color="#17a2b8" />
        <MaterialIcons style={styles.cell} name="delete" size={24} color="red" />
      </View>
      
    </View>
    </ScrollView>

    <Text>{"\n"}</Text>

    <Text>Section 4: TRAVELLING DETAILS</Text>
    <Text>(As appeared in Passport)</Text>

<Text>{"\n"}</Text>

<Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
<Text style={styles.textNoteColor}>{"\n"}Note:</Text>
<Text style={styles.textNoteColor}>{"\n"}If you have selected a driver, proceed by clicking 'Next' button.</Text>
<Text>{"\n"}</Text>
</Card.Content>

<Text>{"\n"}</Text>

<View style={styles.GapDistance}>

<Text>*Passport No.</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtPassportNo'
  name='txtPassportNo'
  />
</View>

<Text>*Enter Driver Name</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtPassportNo'
  name='txtPassportNo'
  />
</View>


<TouchableOpacity id='btnclear' name='btnclear' style={styles.buttonadd}>
<Text style={styles.buttontext}>ADD</Text>
</TouchableOpacity>

<Text>{"\n"}</Text>

<Text>Driver Details</Text>
<View style={styles.blue_line}></View>

<View style={styles.GapDistance}>

<Text>*Name</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtName'
  name='txtName'
  />
</View>

        <Text>*Nationality</Text>
        <SelectDropdown
          data={Nationality}
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

<Text>*IC No</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtIC'
  name='txtIC'
  placeholder='Please enter IC No as appeared in IC'
  />
</View>

<Text>*Date Of Birth</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtDOB'
  name='txtDOB'
  />
</View>

<Text>*Passport Expiry</Text>
<View style={styles.inputContainer}>
<TextInput
  style={styles.InputStyle}
  id='txtPassportExpiry'
  name='txtPassportExpiry'
  />
</View>

          <Text>*Passport Issuing Country</Text>
          <SelectDropdown
          data={Nationality}
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
              style={styles.GapBetweenthick}
              value={isCheckeddriver}
              onValueChange={setCheckeddriver}
              color={isCheckeddriver ? '#4630EB' : undefined}
              />
            <Text>*As Driver</Text>
            </View>
            

            <Text>{"\n"}*Frequent Commuter Pass Holder</Text>
            <SelectDropdown
              data={FrequentCommuterHolder}
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

</View>
</View>

            <Text>{"\n"}</Text>

            <TouchableOpacity id='btnAddToList' name='btnAddToList' style={styles.buttonadd}>
            <Text style={styles.buttontext}>ADD TO LIST</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnUpdate' name='btnUpdate' style={styles.buttonadd}>
            <Text style={styles.buttontext}>UPDATE</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnClear' name='btnClear' style={styles.buttonadd}>
            <Text style={styles.buttontext}>CLEAR</Text>
            </TouchableOpacity>

            <TouchableOpacity id='btnBack' name='btnBack' style={styles.buttonadd}>
            <Text style={styles.buttontext}>BACK</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={btnnext} id='btnNext' name='btnNext' style={styles.buttonadd}>
            <Text style={styles.buttontext}>NEXT</Text>
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
  table: { //Here is the Table
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    borderColor: 'white',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'left',
    minWidth: 150, // Set a minimum width for each cell
  },
  header: {
    flex: 1,
    padding: 8,
    backgroundColor: '#757575',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left', // Align header text to the left
    minWidth: 150, // Set a minimum width for each header
  },
  textNoteColor: {
    color: '#17a2b8',
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
  buttonadd: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttontext: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  GapDistance: {
    gap: 10,
  },
  GapBetweenthick: {
    marginRight: 15, // Adjust the value to set the desired space
  },
  
});

export default TravellingPassDetail;
