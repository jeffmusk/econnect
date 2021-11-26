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

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({navigation}) {

    const [loading, setloading] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [password, setPassword] = useState('');


    const handelSignUp = ()=>{
        const safeEmail = emailInput.toLowerCase();
        console.log(safeEmail,password);
        
        const auth = getAuth();
        
            setloading(true)
       
            createUserWithEmailAndPassword(auth, emailInput, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setloading(false)
                Alert.alert('¡Bienvenido!'  , `La cuenta para el email ${user.email} fue creada exitosamente `)
                // ...
            })
            .catch((error) => {
                setloading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Error ' + errorCode , errorMessage)
                // ..
            });
        
        

    }
    return (
        <SafeAreaView style={{justifyContent:'center', alignContent: 'center',flex: 1}}>
            {loading ? <ActivityIndicator  size="large" color={Colors.green}/> 
            :
            <View style={styles.container}>
                {/* <Image style={styles.paper} source={require('../../assets/image/Papel.png')}/>     */}
                <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
                
                
                    
                <View style={styles.Form}>
            
                    <View>
                        <Text style={styles.title}> Regístrate</Text>

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
                            />
                        <LinkButton 
                            text="Registrarse" 
                            navigation={navigation} 
                            action={'onPress'}
                            onPress={handelSignUp}
                            width={'80%'}
                            containerStyle={{marginTop:20,elevation:5}}
                            
                            />
                    </View>

                    <   TouchableOpacity  onPress={() => {navigation.navigate('Login')}}  >
                        <Text style={styles.createAccount} >
                            Ya tienes una cuenta?  <Text style={styles.link}>Ingresar</Text>
                        </Text>
                    </TouchableOpacity>

                </View>

               
                
                {/* <Image style={styles.tree1} source={require('../../assets/image/arbol1.png')}/>
                <Image style={styles.tree2} source={require('../../assets/image/arbol2.png')}/> */}
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
        top: 50,
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
        fontFamily: 'MontserratSemiBold',
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
        fontFamily: 'MontserratRegular'
    },

    createAccount:{
        color: Colors.white,
        alignSelf: 'center',
        marginBottom:50,
        marginTop:50,
        fontFamily: 'MontserratRegular'
    },
    link:{
        color: Colors.naranja,
        textDecorationLine: 'underline'
    }
})