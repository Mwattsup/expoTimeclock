import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: hp('20%'),
        width: wp('100%'),
        marginTop: hp('30%')
    },
    title: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center'
    },
    logo: {
        height: hp('20%'),
        width: wp('40%'),
        marginLeft: wp('30%'),
        marginRight: wp('30%'),
    }
});