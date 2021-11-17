import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* screen */
import HomeStack from './src/screens/homeScreen/HomeStack';
import MapScreen from './src/screens/mapsScreen/MapScreen';
import ProfileScreen from './src/screens/profileScreen/ProfileScreen';

import Colors from './src/res/ColorsLib'

/* Icon */
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
              ? 'md-home-sharp'
              : 'md-home-outline';
            } 

            if (route.name === 'Profile') {
              iconName = focused
              ? 'md-person-circle'
              : 'md-person-circle-outline';
            } 

            if (route.name === 'Acopio') {
              iconName = focused
              ? 'compass'
              : 'compass-outline';
            }     

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />;
          },
          tabBarActiveTintColor: Colors.green,
          tabBarInactiveTintColor: Colors.gray,
          labelStyle: {
            fontSize: 15
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: Colors.green },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >

        {/* Navegacion si esta logueado o no el usuario */}
        <Tab.Screen name="Acopio"  component={MapScreen} />
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;