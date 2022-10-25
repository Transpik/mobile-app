import * as React from "react";
// import Dialog from "react-native-dialog";
// import { useState } from "react";

// import Button from "../Button";
import { number, Image, TouchableOpacity, Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ConfirmBox({ navigation }) {
    // const confirm = () => Alert.alert("login");
    return (
        <View style={stylesMe.cnt}>

            <View style={stylesMe.viewBox}>
                <View style={stylesMe.promptBox}>
                    <Text style={stylesMe.headText}>Confirm Delivery</Text>
                    <View style={stylesMe.done}>
                        <Image
                            style={{ width: 80, height: 80 }}
                            source={require('../assets/checked.png')}
                        >

                        </Image>
                    </View>
                    <Text style={stylesMe.bodyText}>Have you arrived at your destination?</Text>
                    <Text style={stylesMe.bodyText}>Make sure everything is good.</Text>
                    <View style={stylesMe.btnBox}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DestinationCall')}
                            style={stylesMe.button}
                        >
                            <Text style={stylesMe.butText}>Not yet</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('DeliveryConfirm')}
                            style={stylesMe.buttonDelivered}

                        >
                            <Text style={stylesMe.butText}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        // width: '100%',
        height: 790,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',

    },
    promptBox: {
        width: '70%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,

    },
    headText: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    bodyText: {
        // marginTop: 15,
        // fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    done: {
        height: 140,
        // backgroundColor: 'green',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBox: {
        marginTop: 15,
        height: 140,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    button: {

        // marginLeft: 10,
        width: 100,
        height: 45,

        borderRadius: 8,
        alignItems: 'center',

        backgroundColor: '#4A4A4A',
        // marginTop: 80,
        // marginLeft: 40
    },
    butText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        padding: 12,
    },
    buttonDelivered: {

        marginLeft: 10,
        width: 100,
        height: 45,

        borderRadius: 8,
        alignItems: 'center',

        backgroundColor: '#E7760E',
        // marginTop: 80,
        // marginLeft: 40
    },
});

export default ConfirmBox;