import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../profileScreen/ProfileScreen';
import Colors from '../../res/ColorsLib';
import HomeStack from '../homeScreen/HomeStack';
import EcoEquipo from '../categoriesScreens/EcoEquipo';



const Tab = createBottomTabNavigator();

export default function MainStack({setIsSignedIn}) {
    return (
      
      <Tab.Navigator 
      initialRouteName={'Econnect'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            switch (route.name) {
                case 'Econnect':
                    iconName = focused  ? 'md-home-sharp'  : 'md-home-outline';
                    break;
                case 'Profile':
                    iconName = focused  ? 'md-person-circle' : 'md-person-circle-outline';
                    break;
                case 'EcoEquipo':
                    iconName = focused  ? 'people-circle' : 'people-circle-outline';
            
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
            fontFamily: 'MontserratSemiBold'
          },
        })}
      >

        <Tab.Screen name="EcoEquipo" options={{title: "EcoEquipo"}}  component={EcoEquipo} />
        <Tab.Screen name="Econnect" component={HomeStack}/>
        <Tab.Screen name="Profile"  options={{title: "Perfil"}} component={ProfileScreen} />
            
      </Tab.Navigator>

    )
   
}

