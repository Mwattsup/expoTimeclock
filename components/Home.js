import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {

    const [login, setLogin] = useState('');

    const changeHandler = (val) => {
        setLogin(val);
    }

    return (
        <View style={styles.container}>
            <TextInput  keyboardType='numeric' style={styles.input}
            placeholder='Login id' placeholderTextColor='#fff'
            onChangeText={changeHandler}
            />
            <TouchableOpacity>
                <Text style={styles.button}>login</Text>
            </TouchableOpacity>
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
        marginTop: hp('32.5%'),
        marginBottom: hp('32.5%'),
        paddingTop: hp('8%'),
        marginLeft: wp('30%'),
        marginRight: wp('30%'),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        textAlign: 'center',
        fontSize: hp('3%'),
        color: '#fff'
    },
    button: {
        color: '#fff',
        height: hp('3%'),
        width: wp('10%'),
        borderWidth: .5,
        borderColor: '#fff',
        textAlign: 'center',
        fontSize: hp('1.5%'),
        paddingTop: hp('.5%'),
        marginLeft: wp('45%'),
        marginRight: wp('45%'),
        marginTop: hp('2%')
    }
})