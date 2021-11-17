import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../mapsScreen/MapScreen';
import HomeMenuScreen from '../homeScreen/HomeMenuScreen';
import ProfileScreen from '../profileScreen/ProfileScreen';
import Colors from '../../res/ColorsLib';



const Tab = createBottomTabNavigator();

export default function MainStack() {
    return (
      
      <Tab.Navigator 
      initialRouteName={'Home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = focused  ? 'md-home-sharp'  : 'md-home-outline';
                    break;
                case 'Profile':
                    iconName = focused  ? 'md-person-circle' : 'md-person-circle-outline';
                    break;
                case 'Acopio':
                    iconName = focused  ? 'compass' : 'compass-outline';
                    break;
                default:
                    break;
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
            
            fontFamily: 'Questrial'
          },
        })}
      >

        <Tab.Screen name="Acopio" options={{title: "Centros de Acopio"}}  component={MapScreen} />
        <Tab.Screen name="Home" component={HomeMenuScreen}/>
        <Tab.Screen name="Profile" options={{title: "Perfil"}} component={ProfileScreen} />
            
      </Tab.Navigator>

    )
   
}

