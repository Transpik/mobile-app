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




const Stack = createNativeStackNavigator();

const Navigation = () =>  {
  
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Back" component={Back} />
            <Stack.Screen name="DestinationStart" component={DestinationStart} />
            <Stack.Screen name="DestinationCall" component={DestinationCall} />
            <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  
};

export default Navigation;