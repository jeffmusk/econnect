import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react';
import { ActivityIndicator, Text,View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import firebase from './src/lib/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

/* screen */

import MainStack from './src/screens/mainStack/MainStack';
import AuthStack from './src/screens/authScreen.js/AuthStack';
import Colors from './src/res/ColorsLib';

const Stack = createNativeStackNavigator();

function App() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    const auth = getAuth();
   /*  setloading(true) */
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsSignedIn(true)
        // ...
        setloading(false)
      } else {
        console.log("no logueado");
        setIsSignedIn(false)
        setloading(false)
      }
    });
  });

  


  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loaded] = useFonts({
    Questrial: require('./src/assets/tipografias/Questrial.ttf'),
    MontserratRegular: require('./src/assets/tipografias/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./src/assets/tipografias/Montserrat-SemiBold.ttf'),
    MontserratThin: require('./src/assets/tipografias/Montserrat-Thin.ttf')
  });
  
if (!loaded) {
return <Text>Cargando...</Text>;
}

  return(
    <>
     {
       loading ?
       <View style={{flex: 1, justifyContent: 'center',alignContent: 'center'} }>
          <ActivityIndicator size="large" color={Colors.green} />
       </View> 
       :
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
     }
      
    </>
  )

}

export default App;