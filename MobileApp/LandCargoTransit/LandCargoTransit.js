import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../ComponentMA/Footer';
import Bottom_tab from '../ComponentMA/Bottomtab_MA';

const New_Pass_App_MA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>

        <View style={styles.innerContainer}>
          <Text>{"\n"}</Text>
          <Card style={{ width: '95%' }}>

            <Card.Content style={{ backgroundColor: '#FCFCFC', borderRadius: 10 }}>
              <Text style={styles.text_header}>Travelling Pass Application</Text>
              <View style={styles.blue_line}></View>
              
              <Text>Content Here For Land Cargo Transit</Text>

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
});

export default New_Pass_App_MA;
