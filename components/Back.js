import React from 'react';
import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Back() {

    const navigation = useNavigation();

    return (
            <MaterialIcons onPress={() => navigation.goBack()} style={styles.icon} name='chevron-left' size={36} />
    )
}

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        marginTop: hp('6%'),
        width: wp('11%')
    }
})