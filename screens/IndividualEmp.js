import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Back from '../components/Back';

export default function IndividualEmp({ navigation }) {

    return (
        <View style={styles.container}>
            <Back />
            <Text style={styles.title}>{navigation.getParam('name')}</Text>
                <View>
                    <Text style={styles.name}>{navigation.getParam('jobTitle')}</Text>
                    <Text style={styles.job}>{navigation.getParam('pay')}</Text>
                    <Text style={styles.job}>{navigation.getParam('hours')}</Text>
                </View>
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
        marginBottom: hp('5%'),
        width: wp('100%')
    },
    name: {
        color: 'white',
        fontSize: hp('2%'),
        paddingLeft: wp('1%'),
        paddingTop: hp('.1%')
    },
    job: {
        color: 'white',
        alignSelf: 'flex-end',
        paddingRight: wp('1%'),
        fontSize: hp('1.6%')
    },
    buttons: {
        flex: 2,
        backgroundColor: 'black',
        height: hp('5%'),
        width: wp('92%'),
        marginLeft: wp('4%'),
        marginBottom: hp('1%'),
        borderWidth: 2,
        borderColor: '#4169e1',
        borderRadius: 10
    }
})