import React from 'react'
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import Colors from '../res/ColorsLib'



export default function BigButton({text,navigation,route}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => {navigation.navigate(route)}}
            >
            <Text style={styles.textBtn} >{text}</Text>
        </TouchableOpacity>
    )
}




const styles= StyleSheet.create( {
    container:{
        backgroundColor: Colors.green,
        padding: 15,
        borderRadius:50,
        width: '90%',
        alignSelf:'center',
    },
    textBtn:{
        textAlign:'center',
        fontSize: 15,
        color: Colors.white,
        fontWeight: 'bold'
    }
})