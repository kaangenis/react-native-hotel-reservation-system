import { useState } from "react";
import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useSplashHook = () => {
    const {
        reset
    } = useNavigateHook();

    const resetToAuth = () => {
        reset('Auth');
    };

    const resetToHome = () => {
        reset('Home');
    };

    return {
        resetToAuth,
        resetToHome
    }
};