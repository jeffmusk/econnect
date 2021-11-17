import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* screen */
import Login from './src/screens/authScreen.js/Login';
import MainStack from './src/screens/mainStack/MainStack';


const Stack = createNativeStackNavigator();

function App() {

  MainStack
  const [isSignedIn, setIsSignedIn] = useState(true)
  return(
    <NavigationContainer>
      <Stack.Navigator  
              initialRouteName="Login"
              screenOptions={{
                  headerShown: false
                }}
          >
            {isSignedIn ? (
              <>
                <Stack.Screen name="MainStack" component={MainStack} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />

              </>
            )}
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;