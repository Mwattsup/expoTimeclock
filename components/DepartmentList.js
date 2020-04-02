import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function DepartmentList() {
    const [thing, setThing] = useState([])
    //     [
    //     { name: 'matt', age: '24', key: '1' },
    //     { name: 'tor', age: '25', key: '2' },
    //     { name: 'frank', age: '24', key: '3' },
    //     { name: 'heather', age: '24', key: '4' },
    //     { name: 'chris', age: '24', key: '5' }
    // ]

    const data = [
        { name: 'matt', age: '24', key: '1' },
        { name: 'tor', age: '25', key: '2' },
        { name: 'frank', age: '24', key: '3' },
        { name: 'heather', age: '24', key: '4' },
        { name: 'chris', age: '24', key: '5' }
    ];

    return (
        <FlatList data={thing} renderItem={({ item }) => (
            <Text>{item.name}</Text>
        )} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
