import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useMemo, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { auth } from "../../Configs/firebaseConfig";
import Toast from "react-native-toast-message";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useAuthHook = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authButtonLoading, setAuthButtonLoading] = useState(false);
    const [focusedInput, setFocusedInput] = useState('' as 'E-mail' | 'Password' | 'none');

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['75%', '50%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const loginFunction = () => {
        if (email === '' || password === '') {
            Toast.show({
                type: 'error',
                text1: 'Error ⛔️',
                text2: 'Please fill in all fields 📝'
            })
            return;
        }
        setAuthButtonLoading(true);
        Keyboard.dismiss();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Success 🥳',
                    text2: 'Logged in successfully! 🌞'
                })
                setAuthButtonLoading(false);
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    Toast.show({
                        type: 'error',
                        text1: 'Error ⛔️',
                        text2: 'User not found 🤯'
                    })
                } else if (error.code === 'auth/invalid-email') {
                    Toast.show({
                        type: 'error',
                        text1: 'Error ⛔️',
                        text2: 'Invalid email 📧'
                    })
                }
                else if (error.code === 'auth/wrong-password') {
                    Toast.show({
                        type: 'error',
                        text1: 'Error ⛔️',
                        text2: 'Wrong password 🔐'
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Error ⛔️',
                        text2: 'An error occurred 🤔'
                    })
                }
                setAuthButtonLoading(false);
            })
    };
    const registerFunction = () => { };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        setLoading,
        showPassword,
        toggleShowPassword,
        loginFunction,
        registerFunction,
        authButtonLoading,
        focusedInput,
        setFocusedInput,
        bottomSheetModalRef,
        snapPoints,
        handlePresentModalPress,
        handleSheetChanges,
    }
};