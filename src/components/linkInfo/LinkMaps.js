import React from 'react'
import {  Text,TouchableOpacity, StyleSheet,Image,View ,Linking} from 'react-native'
import Colors from '../../res/ColorsLib'
import { NeuView } from 'react-native-neu-element';
import { FontAwesome5 } from '@expo/vector-icons';
import FontsVariables from '../../res/FontVariables';


export default function LinkInfo({title, nameImage,  city,urlRoute }) {
    let pathImage;

    switch (nameImage) {
        case 'maps':
            pathImage = require(`../../assets/infoIcons/maps.png`)
            break;
        default:
            break;
    }

   const handelLink= async () => {
       const url = urlRoute;
       console.log(urlRoute)
        await Linking.openURL(url);
   }

      
    return (
        <TouchableOpacity onPress={handelLink} >
            <NeuView style={{margin:5}} color='#F2F2F2' height={80} width={350} borderRadius={15} containerStyle={styles.container} > 
                <Image source={pathImage}/>
                <View style={{alignItems:'flex-start',width:'50%'}}>
                    <Text style={[styles.textLink,{fontFamily: FontsVariables.titulos}]}>{title}</Text>
                    <Text style={[styles.textLink,{fontFamily: FontsVariables.subTitulos}]} >{city}</Text>
                </View>
                <FontAwesome5 name="route" size={24} color={Colors.green} />
            </NeuView>
        </TouchableOpacity>
    )
    
}

const styles=  StyleSheet.create({
    container:{
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingLeft:20,
        paddingRight:10
    },
    textLink:{
        fontSize:17,
        color: Colors.green,
   
     
    }
})
