import React from "react";
import { useState } from 'react';
import MapView from "react-native-maps";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Marker } from "react-native-maps";

function Map({ navigation }) {
    const [region, setRegion] = useState({
        latitude: 6.927079,
        longitude: 79.861244,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    return (
        <View style={styles.conMap}>
            {/*Render our MapView*/}
            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

                onRegionChangeComplete={(region) => setRegion(region)}
            />

            <Text style={styles.text}>Current latitude: {region.latitude}</Text>
            <Text style={styles.text}>Current longitude: {region.longitude}</Text>

            <View style={styles.verifyButtonArea}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DestinationStart')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Next</Text>
                </TouchableOpacity>
            </View>
            {/* <Marker coordinate={tokyoRegion} /> */}
        </View>
    );
}
//create our styling code:
const styles = StyleSheet.create({
    conMap: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
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
export default Map;