import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import LottieView from 'lottie-react-native'

const HotelLottie = () => {
    return (
        <LottieView
            source={require('../../../../assets/lottie/hotel_lottie.json')}
            autoPlay
            loop
            style={styles.lottie}
        />
    )
}

export default HotelLottie

const styles = StyleSheet.create({
    lottie: {
        width: 200,
        height: 200
    }
})