import React from 'react'
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Colors from '../../res/ColorsLib';
import LinkButton from '../../components/LinkButton'

export default function Ecokids({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.category}>Eco Kids</Text>

            <Text style={styles.title}>Separación de residuos</Text>
            
            <Text style={styles.description}>          
                Te presentamos este juego para ti donde
                aprenderás la buena gestión y separación
                de los residuos mientras sumas puntos, te
                ensañamos!
            </Text>

            <View style={styles.video}></View>
            <LinkButton text="Jugar" navigation={navigation} action="route" route="Juego" width="90%" />

            <Text style={styles.title}>Mezcla de Colores </Text>
            

            <Text style={styles.description}>
            Con este tutorial aprenderás a realizar esta
            gran actividad con material reciclado para
            estimular el desarrollo de pensamiento de
            nuestros niños
            </Text>


            <View style={styles.video}></View>
          
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    category:{
        textAlign:'center',
        fontSize:22,
        color: Colors.cafe,
        fontWeight: 'bold',
        marginTop:0,
        marginBottom: 15,
        backgroundColor: Colors.white,
        elevation:5,
        padding:5
    },
    title:{
        paddingLeft: 25,
        color: Colors.green,
        fontSize: 18,
        fontWeight:'bold',
        textAlign:'center'
        
    },
    description:{
        fontFamily: 'Questrial',
        color: Colors.cafe,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 15
    },
    video:{
        backgroundColor: Colors.newBlack,
        height: 230,
        margin: 15
    }
})
