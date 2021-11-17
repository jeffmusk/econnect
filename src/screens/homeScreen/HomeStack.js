import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenuScreen from './HomeMenuScreen';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator  
            initialRouteName="Main-Homen"
            screenOptions={{
                headerShown: false
              }}
        >
            <Stack.Screen  name="Main-Home"  component={HomeMenuScreen} />
        </Stack.Navigator>
    )
}
