import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from '../../Configs/colors'
import LoginContent from './components/LoginContent'
import RegisterBottomSheet from './components/RegisterBottomSheet'

const Auth = () => {
    return (
        <SafeAreaView style={styles.main}>
            <LoginContent />
        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryBlue
    }
})