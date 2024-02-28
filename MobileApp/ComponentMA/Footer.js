import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Footer = () => {
  return (

  <View style={styles.container}>
      
  <Text style={styles.textfooter}>{"\n"}Royal Customs and Excise Department{"\n"}</Text>
  <Text style={styles.textfooter}>Ministry of Finance and Economy</Text>
  <Text style={styles.textfooter}>Jalan Menteri Besar</Text>
  <Text style={styles.textfooter}>Berakas BB3910</Text>
  <Text style={styles.textfooter}>Negara Brunei Darussalam{"\n"}</Text>
  <Text style={styles.textfooter}>Tel: +673-2382363</Text>
  <Text style={styles.textfooter}>Fax: +673-2382666</Text>

  <View style={styles.bluelinebottom}></View>

  <Text style={styles.textfooter}>{"\n"} © Copyright 2019 CAPS. All Rights Reserved {"\n"}</Text>

  <StatusBar style="auto" />
  </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064D82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfooter: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bluelinebottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#17a2b8', // You can change the color as needed
    paddingBottom: 1,
    paddingTop: 5,
    width: '90%',
  },
});

export default Footer;