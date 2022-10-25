import * as React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
// import { Link } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.mainImg}>
                <Image
                    style={{ width: 300, height: 180 }}
                    source={require('../assets/Logo.png')}
                >
                </Image>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.text}>
                    Welcome, to Transpik Mobile Application. Recomended for Dilivery Drivers!
                </Text>
            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Get Started</Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 100,
        backgroundColor: 'white',
        // backgroundColor: 'pink',
    },
    mainImg: {
        height: 340,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    textArea: {
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    text: {
        width: 200,
        height: 120,
        fontSize: 20,
        textAlign: 'center',
        // marginTop: 70,
        // marginLeft: 50

    },
    btnArea: {
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        // backgroundColor: 'pink',
    },
    button: {
        // marginBottom: 30,
        width: 220,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#E7760E',

    },
    butText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 16
    }
});

export default Home;