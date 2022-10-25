import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';

function DeliveryStatus({ navigation }) {

    return (
        <View style={styles.container}>
            {/* <Text style={{
                backgroundColor: '#E7760E',
                color: 'white',
                height: '12%',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'left',
                padding: 30
            }}> */}

            {/* <Icon name="chevron-left" size={20} color="white" /> */}
            {/* Delivery Status */}

            {/* <Avatar.Image size={32} marginlsource={require('../assets/pro2.jpg')} /> */}
            {/* </Text> */}


            <View style={styles.flexrow}>
                {/* <Text style={styles.content}>
                        Delivery Status

                        <Image 
                        style ={{height:60, width:60, marginTop:'15%'}}
                        source={require('../assets/package.png')} 
                        /> 
                    </Text> */}

                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                    // onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text style={styles.content}>
                        Delivery Status

                        <Image
                            style={{ height: 60, width: 60, marginTop: '15%' }}
                            source={require('../assets/package.png')}
                        />
                    </Text>
                </TouchableOpacity>

                <Text style={styles.content}>
                    Courier Service

                    <Image
                        style={{ height: 60, width: 60, marginTop: '15%' }}
                        source={require('../assets/delivery.png')}
                    />
                </Text>
            </View>



            <View style={styles.flexrow}>
                <Text style={styles.content}>
                    Ratings

                    <Image
                        style={{ height: 60, width: 60, marginTop: '15%' }}
                        source={require('../assets/rating.png')}
                    />
                </Text>

                <Text style={styles.content}>
                    All Returns

                    <Image
                        style={{ height: 60, width: 60, marginTop: '15%' }}
                        source={require('../assets/return-box.png')}
                    />
                </Text>
            </View>



            <View style={styles.flexrow}>
                <Text style={styles.content}>
                    Special Notes

                    <Image
                        style={{ height: 60, width: 60, marginTop: '15%' }}
                        source={require('../assets/notes.png')}
                    />
                </Text>

                <Text style={styles.content}>

                </Text>
            </View>


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

    flexrow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '12%',

    },

    flexcolumn: {
        justifyContent: 'space-between',
        flexDirection: 'column',

    },


    content: {
        borderColor: '#E7760E',
        borderWidth: 1,
        textAlign: 'center',
        height: 150,
        width: 150,
        color: '#E7760E',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,

    }



})

export default DeliveryStatus;