import React from 'react'
import { View, Text,Button,Alert,NativeModules } from 'react-native'
import { getAuth, signOut } from "firebase/auth";

export default function ProfileScreen({ navigation }){

  const auth = getAuth();
  const handelsignOut = ()=>{
    signOut(auth).then(() => {
      Alert.alert(
        "Vuelve pronto",
        "Has cerrado sesión"
      )

    }).catch((error) => {
      // An error happened.
    });
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Cerrar Sesión"
          onPress={handelsignOut}
        />
      </View>
    );
  }
  
