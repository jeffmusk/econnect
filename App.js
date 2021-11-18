import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react';
import {   SafeAreaView,   ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { getAuth, onAuthStateChanged } from "firebase/auth";

/* screen */

import MainStack from './src/screens/mainStack/MainStack';
import AuthStack from './src/screens/authScreen.js/AuthStack';
import Colors from './src/res/ColorsLib';



const Stack = createNativeStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loaded] = useFonts({
    Questrial: require('./src/assets/tipografias/Questrial.ttf'),
  });

  useEffect(() => {
 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid)

        setIsSignedIn(false)
        // ...
      } else {
        // User is signed out
        // ...

        console.log("no logueado");
        setIsSignedIn(false)
      }
    });
  });

  


  return(
    <SafeAreaView style={{justifyContent:'center', alignContent: 'center',flex: 1}}>
          {!loaded  ?  <ActivityIndicator  size="large" color={Colors.green}/> 
        :
          <NavigationContainer >
        
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
      
    </SafeAreaView>
  )

}

export default App;