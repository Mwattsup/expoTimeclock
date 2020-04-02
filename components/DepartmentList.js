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
            { name: 'ICU', key: '5' }
        ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Departments</Text>
            <FlatList data={thing} renderItem={({ item }) => (
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        borderWidth: 2,
        borderColor: 'red',
        height: hp('6%'),
        width: wp('90%'),
        marginRight: wp('5%'),
        marginLeft: wp('6%'),
        marginBottom: hp('2%')
    },
    title: {

    },
    name: {
        fontSize: hp('3%'),
        textAlign: 'center',
        paddingTop: hp('1%')
    }
});
