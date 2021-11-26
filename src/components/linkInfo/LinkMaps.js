import React from 'react'
import {  Text,TouchableOpacity, StyleSheet,Image,View ,Linking} from 'react-native'
import Colors from '../../res/ColorsLib'
import { NeuView } from 'react-native-neu-element';
import { FontAwesome5 } from '@expo/vector-icons';


export default function LinkInfo({title, nameImage,  route,navigation }) {
    let pathImage;

    switch (nameImage) {
        case 'maps':
            pathImage = require(`../../assets/infoIcons/maps.png`)
            break;
        default:
            break;
    }

   const handelLink= async () => {
       const url = 'https://www.google.com/maps/dir/4.7202041,-74.2296709/IKOPORTEX,+Villa+Lady,+Cra.+6+No.+13ª+-+25+barrio,+Mosquera,+Cundinamarca/@4.7018304,-74.2108136,13.8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9b4d6b42edab:0xec59321be270fafa!2m2!1d-74.1740464!2d4.6948814'
        await Linking.openURL(url);
   }

      
    return (
        <TouchableOpacity onPress={handelLink} >
            <NeuView style={{margin:5}} color='#F2F2F2' height={80} width={350} borderRadius={15} containerStyle={styles.container} > 
                <Image source={pathImage}/>
                <View>
                    <Text style={[styles.textLink,{fontFamily: 'Questrial'}]}>{title}</Text>
                    <Text>Mosquera</Text>
                </View>
                <FontAwesome5 name="route" size={24} color={Colors.green} />
            </NeuView>
        </TouchableOpacity>
    )
    /* return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={pathImage}/>
                <Text style={[styles.textLink,{fontFamily: 'Questrial'}]}>{title}</Text>   
                <Ionicons name="arrow-redo" size={20} color={Colors.green} />
            </View>
        </TouchableOpacity>
    ) */
}

const styles=  StyleSheet.create({
    container:{
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingLeft:20,
        paddingRight:10,
        
    },
    textLink:{
        fontSize:17,
        color: Colors.green,
   
     
    }
})
