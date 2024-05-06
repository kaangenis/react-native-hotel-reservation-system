//React Imports
import React from "react";
import {
    StyleSheet,
} from "react-native";

//Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Routes Imports
import Splash from "./Splash/Splash";
import Auth from "./Auth/Auth";

//SVG Imports

//ETC...

//Configuring Stack and Tab Navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {

    const STACK_SCREENS = [
        { name: 'Splash', component: Splash },
        { name: 'Auth', component: Auth },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Splash'>
                {STACK_SCREENS.map((screen, index) => (
                    <Stack.Screen
                        options={{
                            animation: 'fade'
                        }}
                        key={index}
                        name={screen.name}
                        component={screen.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer >
    )
};

const styles = StyleSheet.create({});