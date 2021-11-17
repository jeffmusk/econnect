import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../res/ColorsLib'


export default function LinkInfo({title}) {
    return (
        <TouchableOpacity style={styles.container}>
           
            <Text>Imagen</Text>
            <Text style={styles.textLink}>{title}</Text>
            <Text>Icon</Text>
        </TouchableOpacity>
    )
}

const styles=  StyleSheet.create({
    container:{
        width: '90%',
        padding: 20,
        alignContent: 'center',
        backgroundColor: "#f2f2f2",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 15,       
        elevation:3
    },
    textLink:{
        fontSize:15,
        color: 'white',
        fontWeight: '700',
    }
})
