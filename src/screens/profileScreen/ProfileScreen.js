import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity ,Alert,Image,StyleSheet } from 'react-native'
import {  signOut } from "firebase/auth";
import {auth} from '../../lib/firebase';
import  Colors  from '../../res/ColorsLib';


export default function ProfileScreen(){
  const [currenUser, setCurrenUser] = useState(null)

  useEffect(() => {
   
      const user = auth.currentUser;
      if (user) {

        setCurrenUser(user)
      } else {
        console.log("No se pudo obtener el usuario")
      }

  }, [currenUser])



  const handelsignOut = ()=>{
    signOut(auth).then(() => {
      Alert.alert(
        "Has cerrado sesión",
        "Vuelve pronto!"
      )
    }).catch((error) => {
      Alert.alert(
        "No pudimos cerrar",
        `Vuelve a intentarlo ${error}`
      )
      console.log(error)
    });
  }

    return (
      <View style={styles.container}>
        {/* <Image style={styles.paper} source={require('../../assets/image/Papel.png')}/>   */}
        <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
        <Image style={styles.avatar} source={require('../../assets/image/avatar.png')}/>
        
        <View>
          <Text style={styles.email}>
            {currenUser != null ? currenUser.email : ''}
          </Text>
        </View>
        
        <TouchableOpacity 
          onPress={handelsignOut}          
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Cerrar Sesión</Text>
        </TouchableOpacity> 
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center' 
    },
    logo:{
      marginTop:50,
      alignSelf:'center',
      marginBottom:50

    },
    paper:{
        width: '100%',
    },
    avatar:{
      borderRadius: 100,
      borderColor: Colors.green,
      borderWidth:  6
    },
    email:{
      fontFamily: 'Questrial',
      fontSize:20,
      marginTop: 20,
      marginBottom:20
    },
    btn:{
      borderRadius: 50,
      width:'85%',
      alignSelf: 'center',
      backgroundColor: Colors.naranja,
      padding: 10,
      marginTop: 50,
      elevation: 2
    },
    textBtn:{
      color: Colors.white,
      fontFamily: 'Questrial',
      textAlign: 'center',
      fontSize:15
    }

})