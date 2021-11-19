import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import SignUpScreen from './SignUp'
import ResetPass from './ResetPass'



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
            <Stack.Screen  name="restPass"  component={ResetPass} />
        </Stack.Navigator>
    )
}
