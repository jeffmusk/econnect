import React from 'react'
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import Colors from '../res/ColorsLib'



export default function BigButton({text,navigation,route, width, containerStyle,textStyle}) {
    return (
        <TouchableOpacity 
            style={[styles.container, {width: width},containerStyle]}
            onPress={() => {navigation.navigate(route)}}
            >
            <Text style={styles.textBtn}  >{text}</Text>
        </TouchableOpacity>
    )
}




const styles= StyleSheet.create( {
    container:{
        padding: 15,
        borderRadius:50,
        width: '90%',
        alignSelf:'center',
        backgroundColor: Colors.green,
    },
    textBtn:{
        textAlign:'center',
        fontSize: 15,
        color: Colors.white,
        fontWeight: 'bold'
    }
})