import * as React from "react";
// import { useState } from "react";
// import AppBar from "../AppBar";
// import Button from "../Button";
import { number, Image, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DeliveryConfirm({ navigation }) {
    const [name, setName] = React.useState("");
    const [nic, setNic] = React.useState("");

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!nic.trim()) {
            alert('Please Enter NIC');
            return;
        }
        //Checked Successfully
        //Do whatever you want
        // alert('Success');
        navigation.navigate('OTP')
    };
    return (

        <View style={styles.container}>
            {/* <AppBar name="Order Status" /> */}
            <View style={styles.headline}>
                <Text style={styles.textHead}>
                    Order ID
                </Text>
                <Text style={styles.textSub}>
                    #158753
                </Text>
            </View>
            <View style={styles.orderBox}>
                <Image
                    style={{ height: 250, width: 250 }}
                    source={require('../assets/order.png')}
                >

                </Image>
            </View>
            <View style={styles.contentText}>
                <Text style={styles.textHead}>
                    Delivery Confirmation
                </Text>

            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    // editable={false}
                    onChangeText={
                        (value) => setName(value)
                    }
                    value={name}
                    placeholder="Name"
                    keyboardType="name-phone-pad"
                />
                <TextInput
                    style={styles.input}
                    // editable={false}
                    onChangeText={
                        (value) => setNic(value)
                    }
                    value={nic}
                    placeholder="NIC"
                    keyboardType="name-phone-pad"
                />
            </View>
            <View style={styles.verifyButtonArea}>
                <TouchableOpacity
                    onPress={checkTextInput}
                    // onPress={() => navigation.navigate('OTP')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Delivered</Text>
                </TouchableOpacity>
            </View>
            {/* <Button onPress={() => navigation.navigate('OTP')} name="Delivered" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
    headline: {
        // backgroundColor: 'pink',
        height: 70,
        // justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft: 26,
        padding: 20
    },
    textHead: {
        // flex: 1,

        fontWeight: 'bold',
        fontSize: 20,
    },
    textSub: {
        // flex: 1,

        // fontWeight: 'bold',
        fontSize: 18,
    },
    orderBox: {
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },
    contentText: {
        height: 40,
        padding: 5,
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    inputArea: {
        height: 160,
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: 'green',
    },
    input: {
        height: 55,
        width: 300,
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
    verifyButtonArea: {
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    button: {
        // marginBottom: 30,
        width: 300,
        height: 55,

        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#4A4A4A',
        // marginTop: 80,
        // marginLeft: 40
    },
    butText: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        padding: 12,
    }
});

export default DeliveryConfirm;