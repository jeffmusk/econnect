import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import firebase from './src/lib/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

/* screen */

import MainStack from './src/screens/mainStack/MainStack';
import AuthStack from './src/screens/authScreen.js/AuthStack';



const Stack = createNativeStackNavigator();

function App() {


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid)
        setIsSignedIn(true)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no logueado");
        setIsSignedIn(false)
      }
    });
  });

  


  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loaded] = useFonts({
    Questrial: require('./src/assets/tipografias/Questrial.ttf'),
  });
  
if (!loaded) {
return <ActivityIndicator />;
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
              
                <Stack.Screen name="AuthStack" component={AuthStack} />
              </>
            )}
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;