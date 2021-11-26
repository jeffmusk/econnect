import React, {useCallback} from 'react'
import { render } from 'react-dom'
import { View, Text,Alert, Button, Linking,StyleSheet,ScrollView } from 'react-native'
import LinkMaps from '../../components/linkInfo/LinkMaps'
import Colors from '../../res/ColorsLib'
import FontsVariables from '../../res/FontVariables'

import {centrosAcopio} from '../../res/CentrosDeAcopio'


const baseUrl = 'https://maps.google.com/?q=';

export default function MapScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.category}>Centros de acopio</Text>
            <View style={styles.listLinks}>
                {centrosAcopio.map((e,i)=>{
                    return (
                        <View key={i} style={styles.containerLink}>
                            <LinkMaps title={e.nombre} nameImage={'maps'}  urlRoute={e.url} city={e.city}  />
                        </View>
                    )
                })}
            </View>

  
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
    flex:1,
    alignContent:'center'

    },
    category:{
        textAlign:'center',
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        backgroundColor: Colors.BgAcopio,
        color: Colors.white,
        marginTop:0,
        marginBottom: 15,
        elevation:5,
        padding:5
    },
    listLinks:{
        alignSelf: 'center',      
    },
    containerLink:{
        marginBottom: 10
    }
 
})
