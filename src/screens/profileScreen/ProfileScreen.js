import React from 'react'
import { View, Text,Button,Alert,NativeModules } from 'react-native'
import {  signOut } from "firebase/auth";
import {auth} from '../../lib/firebase';


export default function ProfileScreen({ navigation }){

 

  const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log('Usario actual');
  console.log(user.email)
} else {
  console.log("No se pudo obtener el usuario")
}

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
  
