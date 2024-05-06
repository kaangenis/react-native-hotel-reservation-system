import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import HotelLottie from './components/HotelLottie'
import LoadingComponent from '../../Components/LoadingComponent'
import { colors } from '../../Configs/colors'
import { useSplashHook } from './useSplashHook'

const Splash = () => {
    const {
        resetToAuth,
    } = useSplashHook();
    useEffect(() => {
        setTimeout(() => {
            resetToAuth();
        }, 3000);
    }, []);
    return (
        <View style={styles.main}>
            <HotelLottie />
            <Text style={styles.title}>Hotel Reservation</Text>
            <LoadingComponent />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryBlue
    },
    title: {
        fontSize: 32,
        color: colors.pureBlack,
        marginTop: 20,
        fontFamily: 'Roboto-Light'
    },
})