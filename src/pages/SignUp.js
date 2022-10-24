import React, {useState} from 'react';
import { StyleSheet, Image,Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';


const SignUp = () => {
  
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const [checked, setChecked] = React.useState(false);

  const handleCheckEmail = (text) =>{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    setEmailPhone(text);
    if (re.test(text)){
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    } 
  };

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ResetPassword");
  }

  return (


    <View style={styles.container}>

      {/* Logo */}
        <Image
            style={{width:'70%', height:100, marginLeft: '15%', marginTop:'25%'}}
            source={require('../assets/Logo.png')}
        />

      {/* Login */}
      <Text style={styles.logincolor}> Login </Text>


      {/* Email or Phone */}
      <Text style={styles.labels}> Email or Phone Number </Text>
      <CustomInput  
        value={emailPhone} 
        setValue={setEmailPhone}
        onChangeText = {(text)=>handleCheckEmail(text)}
      />

      {checkValidEmail ? <Text style={styles.textFailed}>Wrong format</Text>
      : <Text style={styles.textFailed}>Wrong Format</Text>}


      {/* Password */}
      <Text style={styles.labels}> Password </Text>
      <CustomInput 
        value={password} 
        name="password"
        textContentType="Password"
        setValue={setPassword}  
        //secureTextEntry ={seePassword}
        secureTextEntry ={true}
      />
      <Text style={styles.remem}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        Remember me {'\n'} {'\n'}
       </Text>


      <CustomButton text="Login" onPress={onSignInPressed}/>


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
      marginTop: 10,
      padding: 20,
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignContent: "flex-start",
    
    },

    logincolor: {
        color: '#E7760E',
        fontSize: 40,
        marginTop: '25%',
        textAlign: 'center',
    },

    labels: {
      fontSize: 16,
      marginTop: 40, 
      marginLeft: '5%',
      textAlign:'left',
      color: '#B3B3B3',

    },


    remem: {
     textAlign: 'left',
     marginLeft: '10%',
     color: "#757575",
    }

  

})

export default SignUp;


