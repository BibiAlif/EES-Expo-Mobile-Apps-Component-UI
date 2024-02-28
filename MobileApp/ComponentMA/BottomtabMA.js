import { StyleSheet, Linking, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Login from '../LoginMA';
import Blank_tab from '../../Blank/BlankTabMA';

const Bottom_tab = () => {

const BottomTab = createBottomTabNavigator();
const navigation = useNavigation();

return (
   
<BottomTab.Navigator
     screenOptions={{
     headerStyle: { backgroundColor: '#3c0a6b' },
     headerTintColor: '#FFFFFF',
     tabBarActiveTintColor: '#000000'
    }}
>

<BottomTab.Screen 
    name="Home" 
    component={Login} 
    options={{ tabBarIcon: ({color, size}) => (
    <Ionicons name="home" color={color} size={size} 
     options={{ headerShown: false }}
     onPress={() => {
      // Replace 'AnotherScreen' with the actual screen name
      navigation.navigate('Homepage');
    }}
    />
    ),
    headerShown: false, // Hide the header for this screen
    }}
/>

<BottomTab.Screen 
    name="FAQ" 
    component={Blank_tab} 
    options={{ tabBarIcon: ({color, size}) => (
    <MaterialIcons name="question-mark" color={color} size={size} 
    onPress={() => {
      // Replace 'AnotherScreen' with the actual screen name
      Linking.openURL('https://login.bdnsw.gov.bn/ees/user/faq');
    }}
    />
    ),
    }}
/>

<BottomTab.Screen 
    name="Contact" 
    component={Blank_tab} 
    options={{ tabBarIcon: ({color, size}) => (
    <MaterialIcons name="contacts" color={color} size={size} 
    onPress={() => {
      // Open the website when the "Home" tab is pressed
      Linking.openURL('https://login.bdnsw.gov.bn/ees/user/contactUS');
    }}
    />
    ),
    }}
/>

<BottomTab.Screen 
    name="Logout" 
    component={Blank_tab} 
    options={{ tabBarIcon: ({color, size}) => (
    <MaterialIcons name="logout" color={color} size={size} 
    onPress={() => {
      // Open the website when the "Home" tab is pressed
      navigation.navigate('Login');
    }}
    />
    ),
    }}
/>
</BottomTab.Navigator>



  );
}

//const styles = StyleSheet.create({
  //container: {
    // flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
 // },
// });

export default Bottom_tab;