import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { colors } from '../../../Configs/colors'
import { useAuthHook } from '../useAuthHook'

const RegisterBottomSheet = () => {
    const {
        bottomSheetModalRef,
        snapPoints,
        handleSheetChanges
    } = useAuthHook();
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                handleIndicatorStyle={styles.modalIndicator}
                enableOverDrag={false}
                backgroundStyle={{ backgroundColor: colors.darkBlue }}
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}>
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Register</Text>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

export default RegisterBottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    modalIndicator: {
        backgroundColor: 'green',
        width: 60,
        height: 6,
        top: 10
    },
})