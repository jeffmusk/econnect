import React from 'react'
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import Colors from '../res/ColorsLib'



export default function BigButton({text,navigation,route, width, containerStyle,action,onPress}) {
    return (
        <TouchableOpacity 
            style={[styles.container, {width: width},containerStyle]}
            onPress={action == "route" ? () => {navigation.navigate(route)}:onPress }
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
        fontFamily: 'Questrial'
    }
})