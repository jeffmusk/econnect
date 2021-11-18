import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenuScreen from './HomeMenuScreen';




const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator  
            initialRouteName="welcome"
            screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontFamily: 'Questrial'
                  }
              }}
        >   
            <Stack.Screen  name="Main-Home"  component={HomeMenuScreen} />
        </Stack.Navigator>
    )
}
