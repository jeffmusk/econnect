import React from 'react'
import { View, Text ,StyleSheet, ScrollView,TouchableOpacity,Image} from 'react-native';
import Miembro from '../../components/Miembro';
import Colors from '../../res/ColorsLib';
import { AntDesign,FontAwesome , MaterialCommunityIcons} from '@expo/vector-icons';
import FontsVariables from '../../res/FontVariables';


export default function EcoEquipo() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.category}>EcoEquipo</Text>
           
            <View style={styles.view} >
                
                <Text style={styles.title}> Integrantes</Text>

        
                <View style={styles.team}>
 
                    <Miembro name="JHOAN TORRE" rol="GUIONISTA, MARKETING" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/johan-dibujo.png')}/>    
                    </Miembro>
                    <Miembro name="CAMILA CHINCHILLA" rol="PRODUCTORA AUDIOVISUAL" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/camila-dibujo.png')}/>
                    </Miembro>
                    <Miembro name="Karen Triana" rol="PRODUCTORA AUDIOVISUAL" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/karen-dibujo.png')}/>
                    </Miembro>
                   
                    
                </View>
                <View style={styles.team}>
                    <Miembro name="ADOLFO SÁNCHEZ " rol="PROGRAMACIÓN APP, WEB" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/adolfo-dibujo.png')}/>    
                    </Miembro>
                    <Miembro name="CAMILO BEJARANO " rol=" ILUSTRADOR" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/camilo-dibujo.png')}/>    
                    </Miembro>
                    <Miembro name="ANDRÉS MARTÍNEZ " rol=" DISEÑADOR GRÁFICO" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/andres-dibujo.png')}/>    
                    </Miembro>
                
                </View>
                <View style={styles.team}>
                    <Miembro name="CLAUDIA GOMEZ " rol=" DISEÑADORA GRÁFICA, PRODUCTORA TRANSMEDIA
" >
                        <Image style={styles.imageTeam} source={require('../../assets/team/claudia-dibujo.png')}/>    
                    </Miembro>
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
        paddingTop: 10,
        justifyContent: 'space-around'
    },
    category:{
        textAlign:'center',
        fontSize:22,
        color: Colors.white,
        marginTop:0,
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        backgroundColor: Colors.BgEcoEquipo,
        elevation:5,
        padding:5
    },
    title:{
        textAlign: 'center',
        color: Colors.green,
        fontFamily: FontsVariables.titulos,
        fontSize:20, 
        marginTop:10,
        marginBottom:10
    },
    team:{
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-around',     
    },
    imageTeam:{
        width: 100,
        height: 130,
        marginBottom:20,
        alignSelf: 'center'
        /* borderRadius:50 */
    },  
    redes:{
        fontSize:20,
        backgroundColor: Colors.green,
        paddingBottom: 15,

        
    },
    titleredes:{
        textAlign:'center',
        fontFamily: FontsVariables.subTitulos,
        color: Colors.white,
        justifyContent:'space-around',
        fontSize:20,
        padding: 10,

    },
    linkRedes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft:20
    },
    
    
})

