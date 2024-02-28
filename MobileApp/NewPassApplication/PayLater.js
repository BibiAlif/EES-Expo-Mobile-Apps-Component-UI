import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Linking, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';

const PayLater = () => {

  //Linking ---------------------------------------------
  const handleLinkPress1 = () => {
    // Open the link in the default browser
    Linking.openURL('https://www.google.com/');
  };
  //Linking ---------------------------------------------



  //Your btnclosed logic here -----------------------------------------------------
 const handleOKPress = () => {
  navigation.navigate('Homepage'); // Replace 'AnotherScreen' with the actual screen name
};
  //Your btnclosed logic here-------------------------------------------------------
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


  
  const navigation = useNavigation();

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


            <Card.Content style={{ backgroundColor: '#9EF9F9', borderRadius: 5 }}>
            <Text>{"\n"}</Text>
            <Text style={styles.TextNotegreenCenter}>
            Your Bill Reference No. and EES Reference No. has been sent to your registered email address.
            </Text>
            <Text>{"\n"}</Text>
            </Card.Content>
             
              <Text>{"\n"}</Text>

              <Text>Pass Info</Text>
              <View style={styles.blue_line}></View>

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

              <Text>{"\n"}</Text>

              <Text>Application Details</Text>
              <View style={styles.blue_line}></View>

              <Text>{"\n"}*Application Name</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtApplicationName'
              name='txtApplicationName'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}*Passport No.</Text>
              <View style={styles.inputContainer}>
              <TextInput
              id='txtPassportNo'
              name='txtPassportNo'
              style={styles.InputStyleDissable}
              editable={false}
              />
              </View>

              <Text>{"\n"}</Text>

              <Text style={styles.stylefontlink} onPress={handleLinkPress1}>Land Cargo Transit</Text>

              <Text>{"\n"}</Text>

            <TouchableOpacity onPress={btnclose} id='btnClose' name='btnClose' style={styles.btnstyle}>
            <Text style={styles.btnFont}>CLOSE</Text>
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
  TextNotegreenCenter:{
    color: '#013838',
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
  stylefontlink: {
    textAlign: 'center',
    color: '#045F7E',
    fontSize: 20,
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
});

export default PayLater;
