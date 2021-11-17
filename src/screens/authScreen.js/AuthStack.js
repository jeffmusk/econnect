import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import SignUpScreen from './SignUp'


const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator  
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
              }}
        >
            <Stack.Screen  name="Login"  component={LoginScreen} />
            <Stack.Screen  name="SignUp"  component={SignUpScreen} />
        </Stack.Navigator>
    )
}
