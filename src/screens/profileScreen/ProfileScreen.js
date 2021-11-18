import React from 'react'
import { View, Text,Button,Alert,NativeModules } from 'react-native'
import { getAuth, signOut } from "firebase/auth";

export default function ProfileScreen({ navigation }){

  const auth = getAuth();
  const handelsignOut = ()=>{
    signOut(auth).then(() => {
      Alert.alert(
        "Has cerrado sesión",
        "Vuelve pronto!"
      )

    }).catch((error) => {
      Alert.alert(
        "No pudimos cerrar",
        `Vuelve a intentarlo ${error}`
      )
      console.log(error)
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
  
