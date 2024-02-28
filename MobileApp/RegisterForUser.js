import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from './ComponentMA/Footer';
import CheckBox from 'expo-checkbox';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Gender = [
  "Lelaki / Male",
  "Perempuan / Female"
]

const Question1 = [
  "Apakah makanan kegemaran anda?",
  "What is your favourite food?",
  "Apakah nama haiwan kegemaran anda?",
  "What is your pet's name?",
  "Apakah nama buku kegemaran anda?",
  "What is your favourite book?",
  "Apakah sukan kegemaran anda?",
  "What is your favourite sports",
]

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

const RegisterForUser = () => {

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

//ThickBox Post -------------------------------------------------------------------------
const [isCheckedAgree, setCheckedAgree] = useState(false);
//ThickBox Post -------------------------------------------------------------------------


  //Your btn_create_acc logic here -----------------------------------------------------
const handleOKPress = () => {
  // You can navigate to another template (screen) here
  //navigation.navigate('Login'); // Replace 'AnotherScreen' with the actual screen name
};

const handleCreateAccPress = () => {
Alert.alert('Alert Title', 'Button Create Account Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress },
   
  ]);
  };
 //Your btn_create_acc logic here-------------------------------------------------------

 //Your btn_back_to_login logic here -----------------------------------------------------
const handlebacklogin = () => {
  // You can navigate to another template (screen) here
  navigation.navigate('Login'); // Replace 'AnotherScreen' with the actual screen name
};
 //Your btn_back_to_login logic here-------------------------------------------------------

  return (
  <ScrollView style={styles.scroll}>

  <View style={styles.container}>

  <Text>{"\n"}</Text>

  <Card style={{ width:'95%'}}>
    <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius:10}}>
      <Text style={styles.textHeader}>USER REGISTRATION</Text>
      <View style={styles.blueLine}></View>
      <Text> {"\n"} {"\n"} User Details</Text>
      <View style={styles.blueLine}></View>

      
      <Text>{"\n"}*Full Name{"\n"}</Text>
      <TextInput
        style={styles.inputtext}
        //placeholder='Email'
        id='txtFullName'
        name='txtFullName'
        placeholder='As stated in passport'
      />

      <Text>{"\n"}*Gender{"\n"}</Text>
        <SelectDropdown
          data={Gender}
          defaultButtonText="--JANTINA / GENDER--" // Set the default text
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

            <Text>{"\n"}*Nationality{"\n"}</Text>
            <SelectDropdown
              data={Nationality}
              defaultButtonText="PILIH NEGARA / SELECT COUNTRY" // Set the default text
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


      <Text>{"\n"}*IC No{"\n"}</Text>
      <TextInput
        style={styles.inputtext}
        //placeholder='Email'
        id='txtICNo'
        name='txtICNo'
        placeholder='As stated in IC No'
      />

              <Text>{"\n"}*Date Of Birth</Text>
              <View>
              <TextInput
              style={styles.Inputdate}
              value={textInputValuedob}
              editable={false}
              />

              <TouchableOpacity onPress={showDatepickerdob} style={styles.button}>
              <Text style={styles.buttonTextDate}>Select Date</Text>
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

      <Text>{"\n"}*Address{"\n"}</Text>
      <TextInput
        style={styles.inputtext}
        //placeholder='Email'
        id='txtAddress'
        name='txtAddress'
      />

            <Text>{"\n"}*Country of Resident{"\n"}</Text>
            <SelectDropdown
              data={Nationality}
              defaultButtonText="PILIH NEGARA / SELECT COUNTRY" // Set the default text
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

      <Text>{"\n"}*Zip/Postal Code{"\n"}</Text>
      <TextInput
        style={styles.inputtext}
        //placeholder='Email'
        id='txtZipPostalCode'
        name='txtZipPostalCode'
      />


            <Text>{"\n"}*Teliphone No{"\n"}</Text>
            <TextInput
            style={styles.inputtext}
            id='txtTeliphoneNo'
            name='txtTeliphoneNo'
            />


            <Text>{"\n"} {"\n"} User ID</Text>
            <View style={styles.blueLine}></View>
     

            <Text>{"\n"}*Email Address{"\n"}</Text>
            <TextInput
            style={styles.inputtext}
            id='txtEmailAddress'
            name='txtEmailAddress'
            />


            <Text>{"\n"} {"\n"}Create Password</Text>
            <View style={styles.blueLine}></View>

              <Text>{"\n"}*Password</Text>
              <View style={styles.inputContainer}>
              <TextInput
              style={styles.input}
              id='txtNewPassword'
              name='txtNewPassword'
              placeholder='Please enter not less than 8 characters'
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


            <Text>{"\n"}*Re-enter Password</Text>
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

            <Text>{"\n"} {"\n"}Security Question</Text>
            <View style={styles.blueLine}></View>

            <Text>{"\n"}*Question 1{"\n"}</Text>
            <SelectDropdown
              data={Question1}
              defaultButtonText="PILIH SOALAN / SELECT QUESTION" // Set the default text
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

            <Text>{"\n"}*Answer{"\n"}</Text>
            <TextInput
            style={styles.inputtext}
            id='txtAnswer1'
            name='txtAnswer1'
            />

            <Text>{"\n"}*Question 2{"\n"}</Text>
            <SelectDropdown
              data={Question1}
              defaultButtonText="PILIH SOALAN / SELECT QUESTION" // Set the default text
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

            <Text>{"\n"}*Answer{"\n"}</Text>
            <TextInput
            style={styles.inputtext}
            id='txtAnswer2'
            name='txtAnswer2'
            />



<Text>{"\n"}</Text>

<Card.Content style={{ backgroundColor: '#E9E9E9', borderRadius: 10 }}>
<Text style={styles.textNoteColor}>{"\n"}Note:</Text>
<Text style={styles.textNoteColor}>Falsifying documents is an offence under Section 138, Customs Order (2006) and Section 144, Excise Order (2006) which leads to a fine not exceeding BND40,000 imprisonment for a term not exceeding 1 year or both{"\n"}

<Text>{"\n"}</Text>

<View style={{ flexDirection: 'row' }}>
<CheckBox 
      style={styles.GapBetweenthick}
      value={isCheckedAgree}
      onValueChange={setCheckedAgree}
      color={isCheckedAgree ? '#4630EB' : undefined}
    />
      <Text style={styles.textNoteColor}>I Agree</Text>
      <Text>{"\n"}</Text>
</View>
</Text>
</Card.Content>

<Text>{"\n"}</Text>
  
  <TouchableOpacity id='btncreateacc' name='btn_createacc' onPress={handleCreateAccPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
  </TouchableOpacity>

  <TouchableOpacity id='btnbacktologin' name='btnbacktologin' onPress={handlebacklogin} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>BACK TO LOGIN</Text>
  </TouchableOpacity>

  </Card.Content>
  </Card>

  <StatusBar style="auto" />
  
  </View>

  <Footer/>
  
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064D82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    textAlign: 'center',
  },
  blueLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 10,
  },
  inputtext: {
    borderWidth: 1, // Border width
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5, // Border radius for the input
    //fontSize: 16, // Text font size
  },
  textNotice: {
    color: '#FC0404',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFC312',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonTextDate: {
    color: 'white', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
  },
  scroll: {
    backgroundColor: '#064D82',
  },
  textNoteColor: {
    color: '#17a2b8',
    textAlign: 'center',
  },
  GapBetweenthick: {
    marginRight: 15, // Adjust the value to set the desired space
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
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: '#064D82',
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'black', // Text color
    fontSize: 16, // Text font size
    fontWeight: 'bold', // Text font weight (optional)
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

export default RegisterForUser;