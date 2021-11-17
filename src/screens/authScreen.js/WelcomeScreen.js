import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity , Image} from 'react-native'
import Colors from '../../res/ColorsLib'

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/image/econnect.png')}/>
            <Image style={styles.heroImage} source={require('../../assets/image/heroImage.png')}/>
            <Text style={styles.title}>Bienvenid@</Text>
            <Text style={styles.textDescription} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos doloremque ipsum delectus sit ratione laudantium amet doloribus minus excepturi!
            </Text>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {navigation.navigate('Login')}}
                >
                <Text style={styles.textBtn} >Siguiente</Text>
            </TouchableOpacity>
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
        paddingTop:20,
        paddingBottom:20,
        width: '85%'
    },
    btn:{
        backgroundColor: Colors.green,
        padding: 15,
        borderRadius:50,
        width: '95%',
        alignSelf:'center',
        marginTop: 20
    },
    textBtn:{
        textAlign:'center',
        fontSize: 15,
        color: Colors.white,
        fontWeight: 'bold'
        
    }
})