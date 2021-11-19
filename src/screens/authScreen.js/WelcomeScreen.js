import React from 'react'
import { View, Text,StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native'
import Colors from '../../res/ColorsLib'

export default function WelcomeScreen({ handelInitialLogin }) {



    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
                <Image style={styles.heroImage} source={require('../../assets/image/heroImage.png')}/> */}
                <Text style={styles.title}>Bienvenid@ a la familia Econnect</Text>
                <Text style={styles.textDescription} >
                Hola! somos el equipo de econnect y estamos felices de que estés aquí. En nuestro
                aplicativo móvil encontraras información, tutoriales y datos acerca
                del medio ambiente y el correcto proceso de la distribución de los residuos reciclables
                y orgánicos, mientras aprendes y te diviertes. {"\n"} {"\n"} Anímate a ver todas las secciones que    tenemos para ti.
                </Text>
                
                <TouchableOpacity 
                    style={styles.containerBtn}
                    onPress={handelInitialLogin }
                    >
                    <Text style={styles.textBtn}  >Siguiente</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
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
        marginBottom:10
    },
    heroImage:{
        alignSelf:'center',
        marginBottom:5
    },
    title:{
        fontSize:20,
        color: Colors.green,
        alignSelf:'center',
        fontFamily: 'Questrial',
        marginTop: 30,
        marginBottom: 30
    },
    textDescription:{
        alignSelf:'center',
        fontFamily: 'Questrial',
        paddingTop:5,
        paddingBottom:5,
        width: '85%',
        marginBottom: 50

    },
    containerBtn:{
        padding: 15,
        borderRadius:50,
        width: '90%',
        alignSelf:'center',
        backgroundColor: Colors.green,
        marginBottom:20
    },
    textBtn:{
        textAlign:'center',
        fontSize: 15,
        color: Colors.white,
        fontFamily: 'Questrial',
    }

    
})