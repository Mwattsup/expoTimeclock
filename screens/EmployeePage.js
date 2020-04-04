import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function EmployeePage({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{navigation.getParam('name')}</Text>
            <FlatList style={styles.container} data={navigation.getParam('employees')} renderItem={({ item }) => (
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.budget}>{item.name}</Text>
                    <Text style={styles.budget}>{item.jobTitle}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: hp('100%'),

    },
    title: {
        color: 'white',
        fontSize: hp('5%'),
        textAlign: 'center',
        paddingTop: hp('10%'),
        marginBottom: hp('5%')
    },
    budget: {
        color: 'white'
    },
})