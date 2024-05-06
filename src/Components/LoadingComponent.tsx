import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Configs/colors'

interface LoadingComponentProps {
    fullScreen?: boolean
    title?: string
    color?: string
}


const LoadingComponent = ({
    fullScreen,
    title,
    color
}: LoadingComponentProps) => {
    return (
        <View style={fullScreen === true ? styles.fullscreen : null}>
            <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color={color ? color : colors.lightNavy}
            />
            {title && <Text style={styles.title}>{title}</Text>}
        </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: 20
    },
    fullscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        color: '#00008b',
        marginTop: 20,
        fontFamily: 'Roboto-Light'
    }
})