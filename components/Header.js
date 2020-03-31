import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: hp('20%'),
        width: wp('100%'),
        paddingTop: 40
    },
    title: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center'
    },
});