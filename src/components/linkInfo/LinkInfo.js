import React from 'react'
import {  Text,TouchableOpacity, StyleSheet,Image } from 'react-native'
import Colors from '../../res/ColorsLib'
import { NeuView } from 'react-native-neu-element';
import { Ionicons } from '@expo/vector-icons';
import FontsVariables from '../../res/FontVariables';

FontsVariables

export default function LinkInfo({title, nameImage,  route,navigation ,colorText}) {
    let pathImage;

    switch (nameImage) {
        case 'Econocimiento':
            pathImage = require(`../../assets/infoIcons/econocimientos.png`)
            break;
        case 'Bricolage':
            pathImage = require(`../../assets/infoIcons/bricolage.png`)
            break;    
        case 'Compostaje':
            pathImage = require(`../../assets/infoIcons/compostaje.png`)
            break; 
        case 'EcoKids':
            pathImage = require(`../../assets/infoIcons/ecokids.png`)
            break;    
        case 'acopio':
            pathImage = require(`../../assets/infoIcons/acopio.png`)
            break;   
   
        default:
            break;
    }
      
    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)} >
            <NeuView style={{margin:5}} color='#F2F2F2' height={65} width={350} borderRadius={15} containerStyle={styles.container} > 
                <Image source={pathImage} />
                <Text style={[styles.textLink,{fontFamily: FontsVariables.titulos,color: colorText}]}>{title}</Text>
                <Ionicons name="arrow-redo" size={20} color={colorText} />
            </NeuView>
        </TouchableOpacity>
    )
}

const styles=  StyleSheet.create({
    container:{
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingLeft:20,
        paddingRight:10,
        
    },
    textLink:{
        fontSize:17
    }
})
