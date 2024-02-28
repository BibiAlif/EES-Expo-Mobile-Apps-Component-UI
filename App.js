// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

//For Website App Route
import WebsiteTemplate from './WebApp/WebsiteTemplate';

//For Mobile App Route Login
import Login from './MobileApp/LoginMA';
import ForgotPassword from './MobileApp/ForgotPassMA';
import Homepage from './MobileApp/HomepageMA';
import ActActivation from './MobileApp/ActivationAccMA';

//For Create New Pass Application
import TravelingPassApplication from './MobileApp/NewPassApplication/TravellingPassApplication';
import VehicleDetail from './MobileApp/NewPassApplication/VehicleDetail';
import TravelingPassDetail from './MobileApp/NewPassApplication/TravelingPassDetail';
import TravelingPassApplicationPay from './MobileApp/NewPassApplication/TravellingPassApplicationPay';
import PayLater from './MobileApp/NewPassApplication/PayLater';
import PayNow from './MobileApp/NewPassApplication/PayNow';
import EPaymentGateway from './MobileApp/NewPassApplication/E-PaymentGateway';

//component
import Bottomtab from './MobileApp/ComponentMA/BottomtabMA';
import Footer from './MobileApp/ComponentMA/Footer';

//Home Menu Link Page
import NewPassApp from './MobileApp/NewPassApplication/NewPassApp';
import GetQRPaymentStatus from './MobileApp/GetQRPaymentStatus/GetQRPaymentStatus';
import AddUpdateDriver from './MobileApp/AddUpdateDriver/AddUpdateDriver';
import FCP from './MobileApp/FCP/FCP';
import ChangePassword from './MobileApp/ChangePassword/ChangePassword';
import SearchDetail from './MobileApp/GetQRPaymentStatus/SearchDetail';
import SearchAddUpdateDriver from './MobileApp/AddUpdateDriver/SearchAddUpdateDriver';

//Registration
import Register from './MobileApp/RegisterMA';
import RegisterForUser from './MobileApp/RegisterForUser';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? (
        <WebsiteTemplate />
      ) : (

        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ tabBarVisible: false }}/>
          <Stack.Screen name="Bottom_tab" component={Bottomtab}/>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <Stack.Screen name="Actactivation" component={ActActivation}/>
          <Stack.Screen name="Footer" component={Footer}/>
          <Stack.Screen name="NewPassApp" component={NewPassApp}/>
          <Stack.Screen name="TravelingPassApplication" component={TravelingPassApplication}/>
          <Stack.Screen name="VehicleDetail" component={VehicleDetail}/>
          <Stack.Screen name="TravelingPassDetail" component={TravelingPassDetail}/>
          <Stack.Screen name="TravelingPassApplicationPay" component={TravelingPassApplicationPay}/>
          <Stack.Screen name="PayLater" component={PayLater}/>
          <Stack.Screen name="PayNow" component={PayNow}/>
          <Stack.Screen name="EPaymentGateway" component={EPaymentGateway}/>
          <Stack.Screen name="GetQRPaymentStatus" component={GetQRPaymentStatus}/>
          <Stack.Screen name="AddUpdateDriver" component={AddUpdateDriver}/>
          <Stack.Screen name="FCP" component={FCP}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword}/>
          <Stack.Screen name="SearchDetail" component={SearchDetail}/>
          <Stack.Screen name="SearchAddUpdateDriver" component={SearchAddUpdateDriver}/>
          <Stack.Screen name="RegisterForUser" component={RegisterForUser}/>
        </Stack.Navigator>
      )}

    </NavigationContainer>
  );
};

export default App;

