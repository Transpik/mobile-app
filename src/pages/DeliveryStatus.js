import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';

function DeliveryStatus({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={styles.buttonProf}
                >
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 50, justifyContent: 'center', marginTop: 30, marginLeft: 320 }}
                        source={require('../assets/pro2.jpg')}
                    >
                    </Image>
                </TouchableOpacity>

            </View>


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
        // padding: 20,
        flex: 1,
        // backgroundColor: '#FFFFFF',
        alignContent: "flex-start",
        // backgroundColor: 'green',

    },
    navBar: {
        height: 100,
        backgroundColor: 'white',
        elevation: 5,
    },
    flexrow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: '12%',
        // backgroundColor: 'pink',

    },

    flexcolumn: {
        justifyContent: 'space-between',
        flexDirection: 'column',

    },
    buttonProf: {
        // backgroundColor: 'green',
        width: 5,
        height: 5,
    },

    content: {
        borderColor: '#E7760E',
        backgroundColor: 'white',
        borderWidth: 1,
        textAlign: 'center',
        height: 150,
        width: 150,
        color: '#E7760E',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        elevation: 5,

    }



})

export default DeliveryStatus;