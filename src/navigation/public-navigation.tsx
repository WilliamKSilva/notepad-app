import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

export interface RootStackParamList {
    Login: undefined;
    Register: undefined;
}

export function PublicNavigation() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}