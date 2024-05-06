import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7jUlNNqOlOjE4QhPEF8Unl2zFTWOJi7g",
    authDomain: "react-native-hotel-reservation.firebaseapp.com",
    projectId: "react-native-hotel-reservation",
    storageBucket: "react-native-hotel-reservation.appspot.com",
    messagingSenderId: "970887737127",
    appId: "1:970887737127:web:96f01631ddca77d8b7c302",
    measurementId: "G-ZHDJL3FTW8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);