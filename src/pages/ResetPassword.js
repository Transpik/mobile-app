import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {

  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');


  const navigation = useNavigation();

  const onSavePressed = () => {
    // console.warn("onSavePressed");
    navigation.navigate("DeliveryStatus");
  };

  const onBackPressed = () => {
    navigation.navigate("Back");
  };

  const onMapPressed = () => {
    navigation.navigate("DestinationStart");
  };


  return (


    <View style={styles.container}>

      {/* Logo */}
      <Image
        style={{ width: '70%', height: 100, marginLeft: '15%', marginTop: '25%' }}
        source={require('../assets/Logo.png')}
      />

      {/* Login */}
      <Text style={styles.logincolor}> Reset Password </Text>


      {/* Email or Phone */}
      <Text style={styles.labels}> Email or Phone Number </Text>
      <CustomInput
        value={emailPhone}
        setValue={setEmailPhone}
      />


      {/*Old Password */}
      <Text style={styles.labels}> Old Password </Text>
      <CustomInput
        value={password}
        name="oldpassword"
        textContentType="Password"
        setValue={setPassword}
        secureTextEntry
      />

      {/*New Password */}
      <Text style={styles.labels}> New Password </Text>
      <CustomInput
        value={passwordRepeat}
        name="newpassword"
        textContentType="Password"
        setValue={setPasswordRepeat}
        secureTextEntry
      />

      <Text> {'\n'}</Text>

      <CustomButton text="Save" onPress={onSavePressed} />

      {/* Back */}
      <CustomButton
        text="<< Back "
        onPress={onBackPressed}
        type="TERTIARY"
      />

      {/* map */}
      <CustomButton
        text="Map  >> "
        onPress={onMapPressed}
        type="TERTIARY"
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignContent: "flex-start",

  },

  logincolor: {
    color: '#E7760E',
    fontSize: 40,
    marginTop: '10%',
    textAlign: 'center',
  },

  labels: {
    fontSize: 16,
    marginTop: 40,
    marginLeft: '5%',
    textAlign: 'left',
    color: '#B3B3B3',

  },


  remem: {
    textAlign: 'left',
    marginLeft: '15%',
    color: "#757575"
  }



})

export default ResetPassword;


