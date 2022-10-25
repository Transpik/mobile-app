import * as React from "react";
// import { useState } from 'react';
// import { useState } from "react";
// import AppBar from "../AppBar";
// import Button from "../Button";
import { number, Image, SafeAreaView, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
// import DatePicker from 'react-native-datepicker';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// const { Navigator, Screen } = createNativeStackNavigator();

function Calendar({ navigation }) {
    // const [date, setDate] = useState('01-01-2022');
    return (
        <View style={stylesMe.cnt}>
            {/* <AppBar name="Delivery Status" /> */}
            <View style={stylesMe.viewBox}>
                <View style={stylesMe.contBox}>
                    <View style={stylesMe.details}>
                        <Text style={stylesMe.textStyle}>Order Id</Text>
                        <Text style={stylesMe.textStyle}>Address</Text>
                        <Text style={stylesMe.textStyle}>Departure Date</Text>
                    </View>
                    <View style={stylesMe.details}>
                        <Text style={stylesMe.textStyle}>#125876</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConfirmBox')}
                            style={stylesMe.button}
                        >
                            <Text style={stylesMe.butText}>Map</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={stylesMe.input}
                            editable={false}
                            // onChangeText={setEmail}
                            // value={name}
                            placeholder="10/26/2022"
                            keyboardType="name-phone-pad"
                        />
                    </View>
                </View>
                {/* <Button name="Back"/> */}
            </View>
        </View>
    );
}

const stylesMe = StyleSheet.create({
    cnt: {
        width: 400,
        flex: 1,

    },
    viewBox: {
        height: 692,
        // backgroundColor: 'pink',
        alignItems: 'center',
        // justifyContent: 'center',

    },
    contBox: {
        marginTop: 25,
        marginBottom: 140,
        flexDirection: 'row',
        height: 280,
        // width: 350,
        // backgroundColor: 'green',
    },
    details: {
        width: 170,
        // backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18,
    },
    button: {
        // marginBottom: 30,
        width: 140,
        height: 40,

        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#E7760E',
        // marginTop: 80,
        // marginLeft: 40
    },
    butText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
        padding: 12,
    },
    input: {
        height: 40,
        width: 140,
        // marginLeft: 20,
        borderWidth: 1,
        borderRadius: 8,

        borderColor: '#E7760E',
        color: 'black',
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    // datePickerStyle: {
    //     width: 140,
    //     marginTop: 20,

    // },
});

export default Calendar;