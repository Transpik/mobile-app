import React from "react";
import { number, Image, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';

function Button(props) {
    return (
        <View style={StyleSheet.verifyButton}>
            <TouchableOpacity
                style={StyleSheet.button}
            >
                <Text style={StyleSheet.buttonText}>
                    {props.name}
                </Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    verifyButtonArea: {
        height: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
        width: 300,
        height: 55,
        borderRadius: 8,
        alignItems: 'center',

    },
    butText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        padding: 12
    }
});
export default Button;