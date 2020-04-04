import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, ShadowPropTypesIOS } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Back from '../components/Back';

export default function EmployeePage({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
                <Back />
                <Text style={styles.title}>{navigation.getParam('name')}</Text>
            </View>
            <FlatList style={styles.container} data={navigation.getParam('employees')} renderItem={({ item }) => (
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('IndividualEmp', item)} >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.job}>{item.jobTitle}</Text>
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
        alignContent: 'center',
        marginTop: hp('.5%'),
        marginBottom: hp('3%'),
        width: wp('100%'),
        textAlign: 'center'
    },
    name: {
        color: 'white',
        fontSize: hp('2%'),
        alignSelf: 'center',
        paddingLeft: wp('1%')
    },
    job: {
        color: 'white',
        fontSize: hp('1.6%'),
        alignSelf: 'flex-end',
        paddingRight: wp('1%')
    },
    buttons: {
        flex: 2,
        backgroundColor: 'black',
        height: hp('5%'),
        width: wp('92%'),
        marginLeft: wp('4%'),
        marginRight: wp('4%'),
        marginBottom: hp('1%'),
        borderWidth: 2,
        borderColor: '#4169e1',
        borderRadius: 10,
        backgroundColor: '#151515',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})