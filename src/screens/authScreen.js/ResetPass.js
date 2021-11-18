import React,{useState} from 'react'
import { View, Text ,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, 
    Image,
    TextInput
} from 'react-native'
import Colors from '../../res/ColorsLib';

import LinkButton from '../../components/LinkButton'

export default function ResetPass({navigation}) {

    const [emailInput, setEmailInput] = useState('')
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.paper} source={require('../../assets/image/Papel.png')}/>    
                <Image style={styles.logo} source={require('../../assets/image/econnect.png')}/>
                
                
                    
                <View style={styles.Form}>
            
                    <View>
                        <Text style={styles.title}> Restablecer contraseña</Text>
                        
                        <TextInput 
                            placeholder="Correo electrónico"
                            value={emailInput}
                            onChangeText={setEmailInput}
                            style={styles.input}                           
                            />


                        <LinkButton 
                            text="Restablecer contraseña" 
                            navigation={navigation} 
                            route={'SignUp'}
                            width={'80%'}
                            containerStyle={{marginTop:20,elevation:5}}
                            />
                        <   TouchableOpacity  onPress={() => {navigation.navigate('Login')}}  >
                            <Text style={styles.resetPass} >
                               Intentar Ingresar
                            </Text>
                        </TouchableOpacity>
                    </View>

             

                </View>

               
                
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
        top:-35
        
    },
    tree2:{
        position: 'absolute',
        left:0,
        top:-25
       
    },
    Form:{
        backgroundColor: Colors.cafe,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop:200,
        height: '82%',
        justifyContent:'space-between'
    },
    title:{
        color: Colors.white,
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Questrial',
        marginTop:100,
        marginBottom:30
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
        elevation: 3,
        fontFamily: 'Questrial'
    },
    resetPass:{
        paddingRight:50,
        marginTop:15,
        color: Colors.white,
        alignSelf: 'flex-end',
        opacity: 0.5
    },
    createAccount:{
        color: Colors.white,
        alignSelf: 'center',
        marginBottom:50,
        marginTop:50
    },

})