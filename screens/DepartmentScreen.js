import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DepartmentList from '../components/DepartmentList';

export default function DepartmentScreens() {

    return (
        <View>
            <DepartmentList />
        </View>
    )
}