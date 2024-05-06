import {
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import HRIcon from '../../../../assets/svg/HRIcon.svg'
import AuthInput from './AuthInput'
import LoginButton from './LoginButton'
import { colors } from '../../../Configs/colors'
import { MotiView } from 'moti'
import { useAuthHook } from '../useAuthHook'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'

const LoginContent = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        toggleShowPassword,
        loginFunction,
        focusedInput,
        setFocusedInput,
        authButtonLoading,
        handlePresentModalPress,
        bottomSheetModalRef,
        snapPoints,
        handleSheetChanges,
    } = useAuthHook();
    return (
        <MotiView
            from={{
                opacity: 0,
                translateY: -100
            }}
            animate={{
                opacity: 1,
                translateY: 0
            }}
            transition={{
                type: 'timing',
                duration: 1000
            }}
            style={styles.main}>
            <KeyboardAvoidingView behavior='padding'>
                <HRIcon />
                <MotiView
                    from={{
                        opacity: 0,
                        translateY: -100
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0
                    }}
                    transition={{
                        type: 'timing',
                        duration: 2000
                    }}
                    style={styles.centerer}>
                    <AuthInput
                        placeholder='E-mail'
                        keyboardType='email-address'
                        onFocus={() => setFocusedInput('E-mail')}
                        onBlur={() => setFocusedInput('none')}
                        value={email}
                        focusValue={focusedInput}
                        setValue={setEmail}
                    />
                    <AuthInput
                        placeholder='Password'
                        keyboardType='default'
                        value={password}
                        onFocus={() => setFocusedInput('Password')}
                        onBlur={() => setFocusedInput('none')}
                        focusValue={focusedInput}
                        setValue={setPassword}
                        style={{ marginVertical: 10 }}
                    />
                    <MotiView
                        from={{
                            opacity: 0,
                            translateY: 250
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={{
                            type: 'timing',
                            duration: 2500
                        }}
                        style={styles.centerer}>
                        <LoginButton
                            title='Sign In'
                            onPress={loginFunction}
                        />
                        <View
                            style={styles.dontHaveAccount}>
                            <Text style={[styles.dontHaveAccountText, { color: colors.pureBlack }]}>Don't have an account?</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={handlePresentModalPress}>
                                <Text style={styles.dontHaveAccountText}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </MotiView>
                </MotiView>
            </KeyboardAvoidingView>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    style={styles.fullWidth}
                    handleIndicatorStyle={styles.modalIndicator}
                    enableOverDrag={false}
                    backgroundStyle={{ backgroundColor: colors.registerModalBG }}
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}>
                    <BottomSheetView style={styles.contentContainer}>
                        <Text>Register</Text>
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </MotiView>
    )
}

export default LoginContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    centerer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dontHaveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    dontHaveAccountText: {
        color: '#29682C',
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.registerModalBG,
        width: Dimensions.get('window').width,
    },
    modalIndicator: {
        backgroundColor: colors.pureBlack,
        width: 60,
        height: 6,
        top: 10
    },
    fullWidth: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    }
})