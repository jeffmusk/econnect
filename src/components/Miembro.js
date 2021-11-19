import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../res/ColorsLib'

export default function Miembro({name,foto,rol}) {
    return (
        <View style={styles.container}>
            <View style={styles.photo}>

            </View>
            <Text style={styles.name} >{name}</Text>
            <Text style={styles.rol}>{rol}</Text>
        </View>
    )
}

 const styles = StyleSheet.create({
     container:{
        padding: 10
     },
     photo:{
        height: 120,
        width: 120,
        borderRadius: 100,
        backgroundColor: Colors.newBlack
     },
     name:{
        textAlign: 'center',
        color: Colors.newBlack
     },
     rol:{
        textAlign: 'center',
        color: Colors.green
     }
 })