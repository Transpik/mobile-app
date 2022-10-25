import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './Activity';
import HistoryScreen from './History';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main({ navigation }) {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Activity') {
                        iconName = focused
                            ? 'albums-outline'
                            : 'albums-outline';
                    } else if (route.name === 'History') {
                        iconName = focused
                            ? 'alarm-outline'
                            : 'alarm-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}


export default Main;