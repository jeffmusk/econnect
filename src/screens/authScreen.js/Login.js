import React from 'react'
import { View, Text ,SafeAreaView} from 'react-native'

export default function Login() {
    return (
        <SafeAreaView>
            <View style={{backgroundColor: "gray", width:"100%" , height:200}}>
                <Text style={{flex:1, alignContent:"center",justifyContent:"center",color:"white"}}>Login</Text>
            </View>
        </SafeAreaView>
    )
}
