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
    //Check for the email phone number TextInput
    if (!emailPhone.trim()) {
      alert('Please Enter Email or Phone Number');
      return;
    }
    //Check for the Old password TextInput
    if (!password.trim()) {
        alert('Please Enter Old Password');
        return;
    }

    //Check for the New password TextInput
    if (!passwordRepeat.trim()) {
      alert('Please Enter New Password');
      return;
    }
    navigation.navigate("DeliveryStatus");
  };



  return (


    <View style={styles.container}>

      {/* Logo */}
      <Image
        style={{ width: '70%', height: 100, marginLeft: '15%', marginTop: '5%' }}
        source={require('../assets/Logo.png')}
      />

      {/* Login */}
      <Text style={styles.logincolor}> Reset Password </Text>


      {/* Email or Phone */}
      <Text style={styles.labels}> Email or Phone Number </Text>
      {/* <CustomInput
        value={emailPhone}
        setValue={setEmailPhone}
      /> */}
      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setEmailPhone(value)
        }
        value={emailPhone}
        keyboardType="name-phone-pad"
      />


      {/*Old Password */}
      <Text style={styles.labels}> Old Password </Text>
      {/* <CustomInput
        value={password}
        name="oldpassword"
        textContentType="Password"
        setValue={setPassword}
        secureTextEntry
      /> */}

      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setPassword(value)
        }
        value={password}
        secureTextEntry={true}
        keyboardType="name-phone-pad"
      />

      {/*New Password */}
      <Text style={styles.labels}> New Password </Text>
      {/* <CustomInput
        value={passwordRepeat}
        name="newpassword"
        textContentType="Password"
        setValue={setPasswordRepeat}
        secureTextEntry
      /> */}

      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setPasswordRepeat(value)
        }
        value={passwordRepeat}
        secureTextEntry={true}
        keyboardType="name-phone-pad"
      />

      <Text> {'\n'}</Text>

      <CustomButton text="Save" onPress={onSavePressed} />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
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

  feild: {
    backgroundColor: 'white',
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    paddingHorizontal: 10,
    marginVertical: 5,
  },


  remem: {
    textAlign: 'left',
    marginLeft: '15%',
    color: "#757575"
  }



})

export default ResetPassword;


