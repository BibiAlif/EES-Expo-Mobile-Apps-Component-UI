import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/BottomtabMA';

const FCP = () => {
  const navigation = useNavigation();

  //Your btn_Search logic here -----------------------------------------------------
const handleOKPress1 = () => {
  // You can navigate to another template (screen) here
  // navigation.navigate(''); // Replace 'AnotherScreen' with the actual screen name
};

const btnSearch = () => { 
Alert.alert('Alert Title', 'Button Search Is Press', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

  { text: 'OK', onPress: handleOKPress1 },
   
  ]);
  };
 //Your btn_Search logic here-------------------------------------------------------

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>FCP Approval Search</Text>
              <View style={styles.blue_line}></View>
              
             <Text>{"\n"}</Text>

              <Text>{"\n"}*Approval Ref</Text>
              <TextInput
              style={styles.InputStyle}
              id='txtApprovalRef'
              name='txtApprovalRef'
              />

              <Text>{"\n"}*Passport No.</Text>
              <TextInput
              style={styles.InputStyle}
              id='txtPassportNo'
              name='txtPassportNo'
              />

            <Text>{"\n"}</Text>

            <TouchableOpacity onPress={btnSearch} id='btnSearch' name='btnSearch' style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search</Text>
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
});

export default FCP;
