import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'


const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  
    return (
      <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}> {text} </Text>
      </Pressable>
    )
  
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft:'10%',
        
    },

    container_PRIMARY:  {
        backgroundColor: '#E7760E',
    },

    container_SECONDARY:  {
        backgroundColor: '#E7760E',
        borderRadius: 30,
        marginLeft: '50%',
        padding:10,
        width: '30%'
    },

    container_SECONDARY1:  {
        backgroundColor: '#E7760E',
        borderRadius: 30,
        marginLeft: '50%',
        padding:10,
        width: '60%',
        marginTop: '8%',
        marginLeft:'20%',
        alignItems:'center',
    },


    container_TERTIARY: {
        //backgroundColor: 'white',
    },

    text: {
        fontSize: 18,
        color: 'white',
    },

    text_SECONDARY: {
        color: 'white',
    },

    text_SECONDARY1: {
        color: 'white',
        fontSize: 16,
    },

    text_TERTIARY: {
        color: '#757575',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default CustomButton

