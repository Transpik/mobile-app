import * as React from 'react';
import { number, Image, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
// import AppBar from '../AppBar';
// import Button from '../Button';
// import { Link } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function OTP({ navigation }) {
    const [one, setOne] = React.useState("");
    const [two, setTwo] = React.useState("");
    const [three, setThree] = React.useState("");
    const [four, setFour] = React.useState("");

    const checkOTP = () => {
        //Check for the Name TextInput
        if (!one.trim()) {
            alert('Check your OTP number again!');
            return;
        }
        //Check for the Email TextInput
        if (!two.trim()) {
            alert('Check your OTP number again!');
            return;
        }
        if (!three.trim()) {
            alert('Check your OTP number again!');
            return;
        }
        //Check for the Email TextInput
        if (!four.trim()) {
            alert('Check your OTP number again!');
            return;
        }
        //Checked Successfully
        //Do whatever you want
        // alert('Success');
        alert("Successfully completed!");
        navigation.navigate('Home')
    };
    return (
        <View style={styles.container}>
            {/* <AppBar name="Verification" /> */}
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}

                    onChangeText={
                        (value) => setOne(value)
                    }
                    value={number}
                    // placeholder=""
                    keyboardType="numeric"

                // returnKeyType="next"
                // onSubmitEditing={() => { this.secondTextInput.focus(); }}
                // blurOnSubmit={false}
                />
                <TextInput
                    // ref={(input) => { this.secondTextInput = input; }}
                    style={styles.input}
                    onChangeText={
                        (value) => setTwo(value)
                    }
                    value={number}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={
                        (value) => setThree(value)
                    }
                    value={number}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={
                        (value) => setFour(value)
                    }
                    value={number}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.middleText}>
                <Text style={styles.text}>
                    We sent customer a code to verify your deliver
                </Text>
            </View>

            <View style={styles.otpContainer}>
                <View style={styles.otpText}>
                    <Text style={styles.textO_1}>
                        Don't Receive the OTP?
                    </Text>
                    <TouchableOpacity
                        style={styles.resendButton}
                    >
                        <Text style={styles.textO_2}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.verifyButtonArea}>
                <TouchableOpacity
                    onPress={checkOTP}
                    // onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Verify</Text>
                </TouchableOpacity>
            </View>
            {/* <Button name="Verify" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 120,
        flex: 1,

        width: '100%',
        height: '100%',
        // alignItems: 'center',
        // backgroundColor: 'pink',

    },
    appBar: {

        height: 90,
        // width: 400,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#E7760E',
    },
    backButton: {
        height: 40,
        width: 100,
        // backgroundColor: 'red',
    },
    headText: {
        width: 200,
        height: 40,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginTop: 50,
        // backgroundColor: 'green',
    },
    inputArea: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,

        // backgroundColor: 'pink',
    },
    input: {
        height: 80,
        width: 60,
        fontSize: 28,
        marginTop: 40,
        marginLeft: 10,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E7760E',
        color: '#4A4A4A',
        padding: 22,


    },
    middleText: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        // backgroundColor: 'green',
    },
    otpContainer: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    otpText: {
        height: 80,
        width: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'pink',

    },
    textO_1: {
        fontSize: 18,
    },
    resendButton: {


    },
    textO_2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E7760E',
    },
    text: {
        width: 300,
        fontSize: 20,
        textAlign: 'center',
    },
    verifyButtonArea: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    button: {
        // marginBottom: 30,
        width: 300,
        height: 50,

        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#4A4A4A',
        // marginTop: 80,
        // marginLeft: 40
    },
    butText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        padding: 12,
    },
});

export default OTP;