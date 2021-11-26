import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import Colors from '../../res/ColorsLib'
import FontsVariables from '../../res/FontVariables'

export default function Econocimiento() {
    return (
        <View style={styles.container}>
            <Text style={styles.category}>Econocimiento</Text>
            <Text style={styles.title}>Medio Ambiente</Text>
            <Text style={styles.description}>
            El medioambiente es el espacio en el que
            se desarrolla la vida de los distintos
            organismos favoreciendo su interacción. En
            él se encuentran tanto seres vivos como
            elementos sin vida y otros creados por la
            mano del hombre.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    category:{
        textAlign:'center',
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        color: Colors.white,
        marginTop:0,
        marginBottom: 15,
        backgroundColor: Colors.BgEconocimiento,
        elevation:5,
        padding:5,
        
    },
    title:{
        textAlign: 'center',
        color: Colors.green,
        fontFamily: FontsVariables.subTitulos,
        fontSize:FontsVariables.sizeTextSubtitulos
    },
    description:{
        fontFamily: FontsVariables.textos,
        fontSize:FontsVariables.sizeTextDescription,
        color: Colors.cafe,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30,
        fontSize: FontsVariables.sizeTextDescription
    }
})
