import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Configs/colors'

interface LoginButtonProps {
    onPress: () => void;
    title: string;
}

const LoginButton = ({
    onPress,
    title,
}: LoginButtonProps
) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.main}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width - 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.authButtonColor,
        borderRadius: 12,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: colors.authButtonBorderColor
    },
    title: {
        color: colors.darkGray,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    }
})