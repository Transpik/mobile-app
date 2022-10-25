import React , { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, TextInput } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call';

const DestinationCall = () => {

    const navigation = useNavigation();

    const onCallPressed = () => {
        navigation.navigate("Call");
    };

    const onConfirmPressed = () => {
        navigation.navigate("ConfirmBox");
    };

    const [inputValue, setInputValue] = useState('0713946977');

    const triggerCall = () => {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
        alert('Please insert correct contact number');
        return;
        }

        const args = {
        number: inputValue,
        prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };
      
    

    return (
        <View style={styles.container}>

            {/* Map */}
            <Image
                style={{ width: '100%', height: '25%'}}
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

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                    style={styles.button}
                >
                    <Text style={styles.butText}>Call</Text>

                </TouchableOpacity> */}
            </Text>
            
            <SafeAreaView style={styles.container}>
                <View style={styles.flexrow}>
                    <TextInput
                    value={inputValue}
                    onChangeText={(inputValue) => setInputValue(inputValue)}
                    placeholder={'Enter Conatct Number to Call'}
                    keyboardType="numeric"
                    style={styles.textInput}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={triggerCall}>
                        <Text style={styles.buttonTextStyle}>Call</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView> 

            <View style={styles.flexrow}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 400, marginTop: 4, marginLeft:25 }}
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
        padding: 20,
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: "flex-start",
        flex: 1,
        textAlign: 'center'

    },

    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
      },

      titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
      },

      buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#E7760E',
        borderRadius: 30,
        width:'35%',
        color: '#fff',
      },

      buttonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        padding: 10,
      },

      textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '60%',
        paddingHorizontal: 10,
        marginTop: 2,
        borderRadius: 20,
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
        alignItems:'center'

      },

      flexcolumn: {
        justifyContent: 'space-between',
        flexDirection: 'column',

      },


})

export default DestinationCall;
