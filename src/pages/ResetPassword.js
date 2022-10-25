import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {

  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");

  const navigation = useNavigation();

  // const onSavePressed = () => {
  //   //Check for the email phone number TextInput
  //   if (!emailPhone.trim()) {
  //     alert('Please Enter Email or Phone Number');
  //     return;
  //   }
  //   //Check for the Old password TextInput
  //   if (!password.trim()) {
  //       alert('Please Enter Old Password');
  //       return;
  //   }

  //   //Check for the New password TextInput
  //   if (!passwordRepeat.trim()) {
  //     alert('Please Enter New Password');
  //     return;
  //   }
  //   navigation.navigate("DeliveryStatus");
  // };

      const onSavePressed = () => {
        var emailValid = false;
        if(emailPhone.length == 0){
            setEmailError("*Email is required");
        }        
        else if(emailPhone.length < 6){
            setEmailError("*Email should be minimum 6 characters");
        }      
        else if(emailPhone.indexOf(' ') >= 0){        
            setEmailError('*Email cannot contain spaces');                          
        }    
        else{
            setEmailError("")
            emailValid = true
        }
      
        var passwordValid = false;
        if(password.length == 0){
            setPasswordError("*Old Password is required");
        }        
        else if(password.length < 6){
            setPasswordError("*Password should be minimum 6 characters");
        }      
        else if(password.indexOf(' ') >= 0){ 
          setPasswordError('*Password cannot contain spaces');                          
              }    
        else{
            setPasswordError("")
            passwordValid = true
        } 
        
        var passwordRepeatValid = false;
        if(passwordRepeat.length == 0){
            setPasswordRepeatError("*New Password is required");
        }        
        else if(passwordRepeat.length < 6){
            setPasswordRepeatError("*Password should be minimum 6 characters");
        }      
        else if(passwordRepeat.indexOf(' ') >= 0){ 
          setPasswordRepeatError('*Password cannot contain spaces');                          
              }    
        else{
            setPasswordRepeatError("")
            passwordRepeatValid = true
        } 
          
              if(emailValid && passwordValid && passwordRepeatValid){            
                  setEmailPhone("");
                  setPassword("");
                  setPasswordRepeat("");
      
                  navigation.navigate('SignUp')
              }     

      }



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
      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setEmailPhone(value)
        }
        value={emailPhone}
        keyboardType="name-phone-pad"
      />
      {emailError.length > 0 &&
                  <Text style = {{color:'red'}}>{emailError}</Text>
      }


      {/*Old Password */}
      <Text style={styles.labels}> Old Password </Text>

      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setPassword(value)
        }
        value={password}
        secureTextEntry={true}
        keyboardType="name-phone-pad"
      />

      {passwordError.length > 0 &&
            
        <Text style = {{color:'red'}}>{passwordError}</Text>
      }

      {/*New Password */}
      <Text style={styles.labels}> New Password </Text>

      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setPasswordRepeat(value)
        }
        value={passwordRepeat}
        secureTextEntry={true}
        keyboardType="name-phone-pad"
      />

      {passwordRepeatError.length > 0 &&
            
        <Text style = {{color:'red'}}>{passwordRepeatError}</Text>
      }

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


