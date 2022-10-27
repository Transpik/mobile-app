import React from "react";
import { number, Image, TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';

const AppBar = (props) => {
    return (
        <View style={appStyles.appBar}>
            <TouchableOpacity
                style={appstyles.backButton}
            >
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../assets/back.jpg')}
                >

                </Image>
                <Text style={appStyles.headText}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'gray',
    },
    appBar: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#E7760E',
    },
    backButton: {
        height: 40,
        width: 100,
    },
    headText: {
        width: 200,
        height: 40,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default AppBar;