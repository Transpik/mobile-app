import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DestinationCall = () => {

    const navigation = useNavigation();

    const onCallPressed = () => {
        navigation.navigate("Call");
    };

    const onConfirmPressed = () => {
        navigation.navigate("ConfirmBox");
    };

    return (
        <View style={styles.container}>

            {/* Map */}
            <Image
                style={{ width: '100%', height: '35%', marginTop: '5%' }}
                source={require('../assets/map.png')}
            />

            <Text style={{
                backgroundColor: '#4A4A4A',
                padding: 20, color: 'white',
                fontSize: 20, fontWeight: 'bold',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}>
                Distance 5km


                {/* Call button */}
                {/* <CustomButton
                    text="Call here"
                    onPress={onCallPressed}
                    type="SECONDARY"
                /> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Call</Text>

                </TouchableOpacity>
            </Text>

            <View style={styles.flexrow}>
                <Image
                    style={{ width: '24%', height: '100%', borderRadius: 400, marginTop: 20 }}
                    source={require('../assets/pro1.jpg')}
                />

                <View style={styles.flexcolumn}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}> Maleesha Kavindi </Text>
                    <Text style={{ fontSize: 12, color: '#B3B3B3', marginTop: 15 }}> Pick Up <Text> .Ali Express</Text></Text>
                </View>

            </View>

            <Text style={{
                backgroundColor: '#4A4A4A',
                padding: 20, color: 'white',
                fontSize: 16, marginTop: 30
            }}>

                <Icon name="tags" size={30} color="white" />

                43, WIll’s Street, Negambo
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#4A4A4A', marginTop: 8 }}> Appointment </Text>
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ marginTop: 10, marginLeft: '40%' }}> <Icon name="dashboard" size={25} color="#4A4A4A" /> 8.30 AM</Text>
                <Text style={{ marginTop: 10, marginLeft: '40%', }}> <Icon name="calculator" size={25} color="#4A4A4A" /> Aug 22, 2022</Text>
            </View>

            {/* Confirm button */}
            <CustomButton
                text="Confirm Delivery"
                onPress={onConfirmPressed}
                type="SECONDARY1"
            />

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        // marginTop: '5%',
        padding: 20,
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: "flex-start",

    },

    button: {
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#E7760E',

    },
    butText: {
        fontSize: 16,
        color: 'white',
        padding: 16,
    },

    flexrow: {
        justifyContent: 'space-between',
        flexDirection: 'row',

    },

    flexcolumn: {
        justifyContent: 'space-between',
        flexDirection: 'column',

    },


})

export default DestinationCall;
