import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const WebsiteTemplate = () => {

  return (
  <View style={styles.container}>

  <Text>Website Template</Text>

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
  
});

export default WebsiteTemplate;