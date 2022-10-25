import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import Back from '../pages/SignUp';
import DestinationStart from '../pages/DestinationStart';
import DestinationCall from '../pages/DestinationCall';
import DeliveryStatus from '../pages/DeliveryStatus';
//import new added navigators path
import Home from '../pages/Home';
import Profile from '../pages/Profile';

//screenOptions remove from Stack.Navigator => screenOptions={{headerShown: false}}

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen name="DestinationStart" component={DestinationStart} />
        <Stack.Screen name="DestinationCall" component={DestinationCall} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Main" component={Main} options={{ title: 'Delivery Orders' }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ title: 'Delivery Status' }} />
        <Stack.Screen name="ConfirmBox" component={ConfirmBox} options={{ headerShown: false }} />
        <Stack.Screen name="DeliveryConfirm" component={DeliveryConfirm} options={{ title: 'Order Stutus' }} />
        <Stack.Screen name="OTP" component={OTP} options={{ title: 'Verification' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default Navigation;
