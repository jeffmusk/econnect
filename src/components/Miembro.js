import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../res/ColorsLib'

export default function Miembro({name,rol, children}) {
  

    return (
        <View style={styles.container}>
          
            <View style={styles.photo} >
                {children}
            </View>
            <Text style={styles.name} >{name}</Text>
            <Text style={styles.rol}>{rol}</Text>
        </View>
    )
}

 const styles = StyleSheet.create({
     container:{
        padding: 5,
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        maxWidth: '30%'
    },
    photo:{
       display: 'flex',
       justifyContent: 'center',
       alignContent:'center' 
     },

     name:{
        textAlign: 'center',
        color: Colors.newBlack
     },
     rol:{
        textAlign: 'center',
        color: Colors.green,     
        textAlign: 'center',
        justifyContent:'center',
        alignContent: 'center',
     }
 })