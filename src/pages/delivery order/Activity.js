import * as React from 'react';
import { number, Image, TouchableOpacity, Text, View, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ActivityScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.headText}>
                    <Text style={styles.Htext}>Today</Text>
                </View>
                <View style={styles.cardBox}>
                    <View style={styles.cards}>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.headText}>
                    <Text style={styles.Htext}>Tommorow</Text>
                </View>
                <View style={styles.cardBox}>
                    <View style={styles.cards}>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.subText}>Ms. Diana Kumari</Text>
                            <Text style={styles.subText}>Pick up from Ali Express</Text>
                            <Text style={styles.subText}>Nov 04, 2022</Text>
                            <Text style={styles.subText}>No. 15, Will's Street, Negambo</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    scrollView: {
        marginHorizontal: 0,
    },
    headText: {
        height: 55,
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    Htext: {
        marginLeft: 56,
        fontSize: 20,
        fontWeight: 'bold',

    },
    cardBox: {
        alignItems: 'center',
    },
    cards: {
        width: '86%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,

    },
    row: {
        marginTop: 6,
        marginBottom: 6,
        width: 320,
        height: 90,
        backgroundColor: '#dedede',
        borderRadius: 3,
    },
    subText: {
        marginLeft: 5,
        marginTop: 1,
    },

});

export default ActivityScreen;