import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import SignUpScreen from './SignUp'
import WelcomeScreen from './WelcomeScreen';




const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator  
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
              }}
        >   
            <Stack.Screen  name="Welcome"  component={WelcomeScreen} />
            <Stack.Screen  name="Login"  component={LoginScreen} />
            <Stack.Screen  name="SignUp"  component={SignUpScreen} />
        </Stack.Navigator>
    )
}
