import React,{useState} from 'react'
import { View, Text ,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, 
    Image,
    ScrollView,
    TextInput
} from 'react-native'
import Colors from '../../res/ColorsLib';

import LinkButtonGreen from '../../components/LinkButtonGreen'

export default function Login({navigation}) {

    const [emailInput, setEmailInput] = useState('')
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.paper} source={require('../../assets/image/Papel.png')}/>    
                <Image style={styles.logo} source={require('../../assets/image/econnect.png')}/>
                
                <ScrollView style={{height:900}}>
                    
                    <View style={styles.Form}>
                
                        <Text style={styles.title}> Ingresar</Text>
                        
                        <TextInput 
                            placeholder="Correo electronico"
                            value={emailInput}
                            onChangeText={setEmailInput}
                            style={styles.input}   
                         />

                        <TextInput 
                            placeholder="Contraseña"
                            value={emailInput}
                            onChangeText={setEmailInput}
                            style={styles.input}   
                         />

                        <LinkButtonGreen text="Ingresar" navigation={navigation} route={'SignUp'}/>

                        <TouchableOpacity  >
                            <Text style={styles.createAccount} >
                                No tienes una cuenta?  Crear una cuenta
                            </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
                
                <Image style={styles.tree1} source={require('../../assets/image/arbol1.png')}/>
                <Image style={styles.tree2} source={require('../../assets/image/arbol2.png')}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
       
    },
    logo:{
        position: 'absolute',
        alignSelf:'center',
        top: 70,
    },
    paper:{
        width: '100%',
        position: 'absolute',
        top: 0
    },
    tree1:{
        position: 'absolute',
        right:0,
        top:-20
    },
    tree2:{
        position: 'absolute',
        left:0,
        top:0

    },
    Form:{
        backgroundColor: Colors.newBlack,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop:160,
        height: '100%'
    },
    title:{
        color: Colors.green,
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Questrial',
        marginTop:150,
        marginBottom:50
    },

    input:{
        backgroundColor: Colors.white,
        alignSelf: 'center',
        borderRadius:50,
        padding:10,
        paddingLeft:30,
        marginTop: 20,
        width:'80%',
        zIndex:3,
        elevation: 3
    },
    createAccount:{
        color: Colors.white,
        alignSelf: 'center',
        marginBottom:50,
        marginTop:50
    },
})