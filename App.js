import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

/* screen */
import Login from './src/screens/authScreen.js/Login';
import MainStack from './src/screens/mainStack/MainStack';


const Stack = createNativeStackNavigator();

function App() {

  
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [loaded] = useFonts({
    Questrial: require('./src/assets/tipografias/Questrial.ttf'),
  });
  
if (!loaded) {
return null;
}

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