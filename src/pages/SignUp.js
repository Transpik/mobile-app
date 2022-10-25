import * as React from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';


const SignUp = () => {

  const [emailPhone, setEmailPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [checked, setChecked] = React.useState(false);

  

  const checkTextInput = () => {
    //Check for the email phone number TextInput
    if (!emailPhone.trim()) {
        alert('Please Enter Email or Phone Number');
        return;
    }
    //Check for the password TextInput
    if (!password.trim()) {
        alert('Please Enter Password');
        return;
    }
    navigation.navigate('DeliveryStatus')
};

  const { height } = useWindowDimensions();
  const navigation = useNavigation();


  const onForgotPasswordPressed = () => {
    navigation.navigate("ResetPassword");
  }

  return (


    <View style={styles.container}>

      {/* Logo */}
      <Image
        style={{ width: '70%', height: 100, marginLeft: '15%', marginTop: '18%' }}
        source={require('../assets/Logo.png')}
      />

      {/* Login */}
      <Text style={styles.logincolor}> Login </Text>


      {/* Email or Phone */}
      <Text style={styles.labels}> Email or Phone Number </Text>
      {/* <CustomInput
        value={emailPhone}
        setValue={setEmailPhone}
        onChangeText={(text) => handleCheckEmail(text)}
      /> */}

      <TextInput
        style={styles.feild}
        onChangeText={
            (value) => setEmailPhone(value)
        }
        value={emailPhone}
        keyboardType="name-phone-pad"
      />



      {/* {checkValidEmail ? <Text style={styles.textFailed}>Wrong format</Text>
        : <Text style={styles.textFailed}>Wrong Format</Text>} */}


      {/* Password */}
      <Text style={styles.labels}> Password </Text>
      {/* <CustomInput
        value={password}
        name="password"
        textContentType="Password"
        setValue={setPassword}
        secureTextEntry={true}
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

      <View style={styles.flexrow}> 
        <Text style={styles.remem}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          Remember me {'\n'} {'\n'}
        </Text>
      </View>
      


      <CustomButton text="Login" onPress={checkTextInput} />


      {/* Forgot password */}
      <CustomButton
        text="Forgot password ?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
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
    marginLeft: '10%',
    color: "#757575",
  }, 

  flexrow: {
    justifyContent: 'space-between',
    flexDirection: 'row',

  },



})

export default SignUp;


