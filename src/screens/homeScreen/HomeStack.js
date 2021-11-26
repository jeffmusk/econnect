import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenuScreen from './HomeMenuScreen';
import Econocimiento from '../categoriesScreens/Econocimiento';

import Bricolage from '../categoriesScreens/Bricolage';
import Compostaje from '../categoriesScreens/Compostaje';

import Ecokids from '../categoriesScreens/Ecokids';
import EcoEquipo from '../categoriesScreens/EcoEquipo';

import Juego from '../categoriesScreens/Juego';
import MapScreen from '../mapsScreen/MapScreen';



const Stack = createNativeStackNavigator();

export default function HomeStack() {

   

   
    return (
        <Stack.Navigator  
        initialRouteName={ "Main-Home" }
            screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    fontFamily: 'MontserratSemiBold'
                    
                  }
              }}
        >   
            
            <Stack.Screen  name="Main-Home"  component={HomeMenuScreen} />
            <Stack.Screen  name="Econocimiento"  component={Econocimiento} />
            <Stack.Screen  name="Bricolage"  component={Bricolage} />
            <Stack.Screen  name="Compostaje"  component={Compostaje} />
            <Stack.Screen  name="Ecokids"  component={Ecokids} />
            <Stack.Screen  name="EcoEquipo"  component={EcoEquipo} />
            <Stack.Screen  name="centrosAcopio"  component={MapScreen} />
            
            <Stack.Screen  name="Juego"  component={Juego} />
        </Stack.Navigator>
    )
}
