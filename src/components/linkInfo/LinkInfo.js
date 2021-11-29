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
        case 'brain':
            pathImage = require(`../../assets/infoIcons/brain.png`)
            break;
        case 'craft':
            pathImage = require(`../../assets/infoIcons/craft.png`)
            break;    
        case 'recicle':
            pathImage = require(`../../assets/infoIcons/recicle.png`)
            break; 
        case 'tools':
            pathImage = require(`../../assets/infoIcons/tools.png`)
            break;    
        case 'team':
            pathImage = require(`../../assets/infoIcons/team.png`)
            break;   
        case 'map':
            pathImage = require(`../../assets/infoIcons/iconMap.png`)
            break;    
        default:
            break;
    }

   

      
    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)} >
            <NeuView style={{margin:5}} color='#F2F2F2' height={65} width={350} borderRadius={15} containerStyle={styles.container} > 
                <Image source={pathImage}/>
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
