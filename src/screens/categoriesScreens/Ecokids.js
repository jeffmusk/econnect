import React from 'react'
import { View, Text ,StyleSheet, ScrollView,Image} from 'react-native';
import Colors from '../../res/ColorsLib';
import LinkButton from '../../components/LinkButton';
import FontsVariables from '../../res/FontVariables';



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
            <LinkButton text="Jugar" navigation={navigation} action="route" route="Juego" width="90%" />
            <View style={{display: 'flex', alignContent: 'center', justifyContent: 'center',marginTop:10}}>
                <Image source={require('../../assets/image/juego.png')} style={{width:'90%',marginLeft: '5%'}}/>
            </View>

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
        color: Colors.white,
        marginTop:0,
        marginBottom: 15,
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        backgroundColor: Colors.BgEcoKids,
        elevation:5,
        padding:5,
        alignContent:'center',
        justifyContent: 'center'
    },
    title:{
        paddingLeft: 25,
        color: Colors.green,
        fontFamily: FontsVariables.subTitulos,
        fontSize:FontsVariables.sizeTextSubtitulos,
        marginTop:10
  
    },
    description:{
        fontFamily: FontsVariables.textos,
        fontSize:FontsVariables.sizeTextDescription,
        color: Colors.newBlack,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15,
        marginBottom: 10,
    },
    video:{
       /*  backgroundColor: Colors.newBlack, */
        height: 230,
        margin: 15,
        marginBottom:15
    }
})

