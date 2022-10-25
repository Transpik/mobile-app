import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder}) => {
  
    return (
      <View style={styles.container}>
        <TextInput  
        value = {value}
        onChangeText = {setValue}
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry={false} /> 
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        marginLeft: '5%',

        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',

        paddingHorizontal: 10,
        marginVertical: 5,
    },

    input: {},
});

export default CustomInput

