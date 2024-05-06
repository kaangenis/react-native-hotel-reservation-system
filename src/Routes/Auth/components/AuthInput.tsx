import { Dimensions, KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Configs/colors';

interface AuthInputProps {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    style?: object;
    onFocus?: () => void;
    onBlur?: () => void;
    focusValue?: 'E-mail' | 'Password' | 'none';
}

const AuthInput = ({
    placeholder,
    keyboardType,
    value,
    setValue,
    style,
    onFocus,
    onBlur,
    focusValue
}: AuthInputProps
) => {
    return (
        <TextInput
            style={focusValue === placeholder ? [styles.focused_input, style] : [styles.input, style]}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={colors.authInputTextColor}
            keyboardType={keyboardType}
            onFocus={() => onFocus && onFocus()}
            onBlur={() => onBlur && onBlur()}
            autoCapitalize='none'
        />
    )
}

export default AuthInput

const styles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.authInputColor,
        color: colors.authInputTextColor,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    focused_input: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.authInputColor,
        color: colors.authInputTextColor,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.authInputFocusedColor
    }
})