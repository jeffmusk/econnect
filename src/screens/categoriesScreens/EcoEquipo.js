import React from 'react'
import { View, Text ,StyleSheet, ScrollView,TouchableOpacity,Image} from 'react-native';
import Miembro from '../../components/Miembro';
import Colors from '../../res/ColorsLib';
import { AntDesign,FontAwesome , MaterialCommunityIcons} from '@expo/vector-icons';


export default function EcoEquipo() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.category}>EcoEquipo</Text>
           
            <View style={styles.view} >
                
                <Text style={styles.title}> Integrantes</Text>

                <View style={styles.team}>
                    <Miembro name="Karen Triana" rol="Marketing"/>
                    <Miembro name="Claudia Gómez" rol="Marketing"/>
                    <Miembro name="Camila Chinchilla" rol="Marketing"/>
                    
                </View>
                <View style={styles.team}>
                    <Miembro name="Andrés Yemayusa" rol="Marketing"/>
                    <Miembro name="Jhoan Torres" rol="Marketing"/>
                    <Miembro name="Juan C Bejarano" rol="Marketing"/>
                </View>
                <View style={styles.team}>
                    <Miembro name="Adolfo Sánchez" rol="Marketing"/>
                    
                </View>


                <View style={styles.redes}>
                    <Text style={styles.titleredes}>Redes</Text>

                    <View style={styles.linkRedes}>

                        <TouchableOpacity>
                            <FontAwesome name="facebook-f" size={50} color={Colors.white} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign name="instagram" size={50} color={Colors.white} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <MaterialCommunityIcons name="web" size={50} color={Colors.white} />
                        </TouchableOpacity>

                       
                    </View>
                    
                </View>
            </View>
        
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    view:{
        justifyContent: 'space-between',
        height:750,
    },
    category:{
        textAlign:'center',
        fontSize:22,
        color: Colors.cafe,
        fontWeight: 'bold',
        marginTop:0,
        backgroundColor: Colors.white,
        elevation:5,
        padding:5
    },
    title:{
        textAlign: 'center',
        color: Colors.green,
        fontFamily: 'Questrial',
        fontSize:20, 
        marginTop:20
    },
    team:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight:10
    },
    redes:{
        fontSize:20,
        backgroundColor: Colors.green,
        paddingBottom: 15
        
    },
    titleredes:{
        textAlign:'center',
        fontFamily: 'Questrial',
        color: Colors.white,
        justifyContent:'space-around',
        fontSize:20,
        padding: 10
    },
    linkRedes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft:50,
        paddingRight:50
    },
    
})

