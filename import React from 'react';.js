import React from 'react';
import { StyleSheet, Image,Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>

      {/* Logo */}
        <Image
            style={{width:200, height:100}}
            source={require('../assets/Logo.png')}
        />

      {/* Login */}
      <Text style={styles.logincolor}> Login </Text>

    

      {/* Email or Password */}
      <Text style={styles.feilds}> Email or Phone</Text>
      <TextInput
        style={styles.TextInput} 
        // placeholder="Email."
        // placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />

      {/* Password */}
      <Text style={styles.feilds}>Password</Text>
      <TextInput type="password" autoComplete='off' id="password" name="password" />
      <TextInput
        style={styles.TextInput}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      {/* Forgot password */}
      <TouchableOpacity style={styles.forgot_button}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.remem}>Remember me</Text>


      {/* Login button */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: "flex-start"
    
    },

    logincolor: {
        color: '#E7760E',
        fontSize: 40,
        marginTop: 40,
    },

    feilds: {
      fontSize: 18,
      marginTop: 40, 
      marginLeft: -10,
      textAlign:'left'

    },

    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#E7760E",
      color: 'FFFFFF',

    },

    remem: {
     textAlign: 'left',
     marginLeft: -20,
    }

  

})

export default SignUp;