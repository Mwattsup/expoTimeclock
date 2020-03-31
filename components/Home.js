import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {

    const [login, setLogin] = useState('');

    const changeHandler = (val) => {
        setLogin(val);
    }

    return (
        <View style={styles.container}>
            <TextInput  keyboardType='numeric' style={styles.input}
            placeholder='Login id'
            onChangeText={changeHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    input: {
        height: hp('15%'),
        width: wp('40%'),
        marginTop: hp('20%'),
        paddingTop: hp('8%'),
        marginLeft: wp('30%'),
        marginRight: wp('30%'),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        textAlign: 'center',
        fontSize: hp('3%'),
        color: '#fff'
    },
})