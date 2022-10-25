import * as React from 'react';
import { Image, TouchableOpacity, Icon, TouchableHighlight, Text, View, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
// import { data } from '../../data/prof';
// import { Link } from "react-router-dom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const DATA = [
//     {
//         name: "Imal Kovinda",
//         userId: "24863",
//         email: "imalk@gmail.com",

//     },
// ];


function Profile({ navigation }) {
    const [name, setName] = React.useState("Imal Kovinda");
    const [userId, setUserId] = React.useState("124856");
    const [email, setEmail] = React.useState("kovi@gmail.com");
    const [phoneNo, setphoneNo] = React.useState("0716849377");
    const [comName, setcomName] = React.useState("echo");
    const [comEmail, setcomEmail] = React.useState("echo@gmail.com");
    const [comPhoNo, setcomPhoNo] = React.useState("0119637488");

    const [number, onChangeNumber] = React.useState(null);
    // const { data } = state;
    return (

        < View style={profstyles.container} >
            {/* <View style={profstyles.appBar}>
               
            </View> */}
            <ScrollView style={profstyles.scrollView}>
                <Image
                    style={profstyles.backImage}
                    source={require('../assets/back.jpg')}
                >
                </Image>
                <Image
                    style={profstyles.profImage}
                    source={require('../assets/pro2.jpg')}
                >
                </Image>
                <Text style={profstyles.text}>
                    Profile Info
                </Text>
                <Text style={profstyles.subtext}>
                    Name
                </Text>

                {/* <View style={{ flexDirection: 'row' }}> */}

                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // placeholder={name}
                    value={name}
                    onSubmitEditing={() => { this.onSubmit(this.state.searchText) }}
                    onChangeText={() => setName(value)}
                    keyboardType='name-phone-pad'
                />

                {/* <TouchableHighlight onPress={() => { this._fetchResults() }} underlayColor='transparent'>
                    <View>
                        <Icon name="search" size={20} color="#4285F4" />
                    </View>
                </TouchableHighlight> */}
                {/* </View> */}

                <Text style={profstyles.subtext}>
                    User ID
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setUserId}
                    value={userId}
                // placeholder={name}
                // keyboardType='name-phone-pad'
                />

                <Text style={profstyles.subtext}>
                    Email
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setEmail}
                    value={email}
                    // placeholder={name}
                    keyboardType='email-address'
                />

                <Text style={profstyles.subtext}>
                    Phone Number
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setphoneNo}
                    value={phoneNo}
                    // placeholder={name}
                    keyboardType='phone-pad'
                />

                <Text style={profstyles.text}>
                    Delivery Service Info
                </Text>
                <Text style={profstyles.subtext}>
                    Company Name
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setcomName}
                    value={comName}
                    keyboardType='name-phone-pad'
                />

                <Text style={profstyles.subtext}>
                    Company Email
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setcomEmail}
                    value={comEmail}
                    keyboardType='email-address'
                />

                <Text style={profstyles.subtext}>
                    Phone Number
                </Text>
                <TextInput
                    style={profstyles.input}
                    editable={false}
                    // onChangeText={setcomPhoNo}
                    value={comPhoNo}
                    keyboardType='phone-pad'
                />
                <View style={profstyles.verifyButtonArea}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={profstyles.button}
                    >
                        <Text style={profstyles.butText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View >
    )
}

const profstyles = StyleSheet.create({
    container: {
        // marginTop: 30,
    },
    appBar: {
        height: 90,
        backgroundColor: '#E7760E',
    },
    backButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 4,
        marginTop: 8,
        marginLeft: 12,
        backgroundColor: 'blue'
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 0,
    },
    text: {
        // width: 200,
        // height: 120,
        fontSize: 26,
        fontWeight: 'bold',
        // textAlign: 'center',
        marginTop: 40,
        marginLeft: 15

    },
    backImage: {
        width: Dimensions.get('window').width,
        height: 180,
        // backgroundColor: '#E7760E'
    },
    profImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        // backgroundColor: 'gray',
        marginTop: -90,
        marginLeft: 15
    },
    subtext: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 15,
        marginTop: 18

        // fontWeight: 'bold',
        // color: 'white',
        // padding: 16
    },
    input: {
        height: 40,
        marginLeft: 15,
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        color: 'black',
        // padding: 10,
        fontSize: 20
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

export default Profile;