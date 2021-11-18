import React from 'react'
import { View, Text,StyleSheet, Image} from 'react-native'
import Colors from '../../res/ColorsLib'

import LinkButton from '../../components/LinkButton';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
            <Image style={styles.heroImage} source={require('../../assets/image/heroImage.png')}/>
            <Text style={styles.title}>Bienvenid@</Text>
            <Text style={styles.textDescription} >
            Hola! somos el equipo de econnect y estamos felices de que estés aquí. En nuestro
            aplicativo móvil encontraras información, tutoriales y datos acerca
            del medio ambiente y el correcto proceso de la distribución de los residuos reciclables
            y orgánicos, mientras aprendes y te diviertes. {"\n"} {"\n"} Anímate a ver todas las secciones que    tenemos para ti.
            </Text>
            
            <LinkButton action={'route'} text="Siguiente" navigation={navigation} route={'Login'} width={'85%'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignContent: 'center'
    },
    logo:{
        alignSelf:'center',
        marginBottom:40
    },
    heroImage:{
        alignSelf:'center',
        marginBottom:10
    },
    title:{
        fontSize:20,
        color: Colors.green,
        alignSelf:'center',
        fontFamily: 'Questrial'
    },
    textDescription:{
        alignSelf:'center',
        fontFamily: 'Questrial',
        paddingTop:10,
        paddingBottom:15,
        width: '85%'

    },

    
})