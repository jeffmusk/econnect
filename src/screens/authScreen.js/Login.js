import React,{useState} from 'react'
import { View, Text ,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, 
    Image,
    TextInput,
    Alert,
    ActivityIndicator
} from 'react-native'
import Colors from '../../res/ColorsLib';
import LinkButton from '../../components/LinkButton'

import {getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}) {
    const [loading, setloading] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('')

    const handelLogin=()=>{
        setloading(true)
        const safeEmail = emailInput.toLowerCase();
        console.log(safeEmail,password);

        const auth = getAuth();

        signInWithEmailAndPassword(auth, safeEmail, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            setloading(false)
            // ...
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setloading(false)
            Alert.alert(
                `Error ${errorCode}`,
                errorMessage
            )
        });

    }
    return (
        <SafeAreaView style={{justifyContent:'center', alignContent: 'center',flex: 1}}>
            {loading ? <ActivityIndicator  size="large" color={Colors.green}/> 
            :
            <View style={styles.container}>
                <Image style={styles.paper} source={require('../../assets/image/Papel.png')}/>    
                <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
                                    
                <View style={styles.Form}>
            
                    <View>
                        <Text style={styles.title}> Ingresar</Text>
                        
                        <TextInput 
                            placeholder="Correo electrónico"
                            value={emailInput}
                            onChangeText={setEmailInput}
                            style={styles.input}                           
                            />

                        <TextInput 
                            placeholder="Contraseña"
                            value={password}
                            onChangeText={setPassword}
                            style={styles.input}   
                            secureTextEntry={true}
                            />

                        <LinkButton 
                            text="Ingresar" 
                            navigation={navigation} 
                            action="onPress"
                            width={'80%'}
                            containerStyle={{marginTop:20,elevation:5}}
                            onPress={handelLogin}
                            />


                        <   TouchableOpacity  onPress={() => {navigation.navigate('restPass')}}  >
                            <Text style={styles.resetPass} >
                            Olvidaste tu contraseña?  
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <   TouchableOpacity  onPress={() => {navigation.navigate('SignUp')}}  >
                        <Text style={styles.createAccount} >
                            No tienes una cuenta?  <Text style={styles.link}>Crea una cuenta</Text>
                        </Text>
                    </TouchableOpacity>

                </View>

            
                
                <Image style={styles.tree1} source={require('../../assets/image/arbol1.png')}/>
                <Image style={styles.tree2} source={require('../../assets/image/arbol2.png')}/>
            </View>
            }
            
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
        marginTop:160,
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
    link:{
        color: Colors.naranja,
        textDecorationLine: 'underline'
    }
})