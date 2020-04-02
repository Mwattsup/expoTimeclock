import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DepartmentList() {
    const [thing, setThing] = useState(
        [
            { name: 'Human Resources', key: '1' },
            { name: 'Therapy', key: '2' },
            { name: 'Orthopedic', key: '3' },
            { name: 'Neuro', key: '4' },
            { name: 'ICU', key: '5' },
            { name: 'Tech', key: '6' },
            { name: 'Cardiac', key: '7' },
            { name: 'Engineering', key: '8' },
            { name: 'Production', key: '9' },
            { name: 'Sales', key: '10' },
            { name: 'Executive', key: '11' },
            { name: 'Security', key: '12' },
            { name: 'Purchasing', key: '13' },
            { name: 'Environmental Services', key: '14' },
        ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Departments</Text>
            <FlatList style={styles.container} data={thing} renderItem={({ item }) => (
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: hp('100%'),

    },
    buttons: {
        borderWidth: 2,
        borderColor: '#303030',
        height: hp('6%'),
        width: wp('90%'),
        marginRight: wp('5%'),
        marginLeft: wp('6%'),
        marginBottom: hp('2%'),
        backgroundColor: '#151515',
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: hp('5%'),
        textAlign: 'center',
        paddingTop: hp('10%'),
        marginBottom: hp('5%')
    },
    name: {
        fontSize: hp('3%'),
        textAlign: 'center',
        paddingTop: hp('1%'),
        color: 'white'
    }
});
