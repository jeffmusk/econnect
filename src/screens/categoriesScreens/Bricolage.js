import React, { useState, useCallback } from 'react'
import { View, Text ,StyleSheet, ScrollView,Alert} from 'react-native';
import Colors from '../../res/ColorsLib';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Bricolage() {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("¡El video ha terminado de reproducirse!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.category}>Bricolage</Text>
            
            <Text style={styles.title}>Juego de hokey</Text>
            
            <Text style={styles.description}>
            Con este tutorial aprenderás a realizar este
            gran juego para que compartas con tus
            amigos y familiares.
            </Text>

            <View style={styles.video}>
                <YoutubePlayer
                    height={250}
                    play={playing}
                    videoId={"RdUPMjuvtsQ"}
                    onChangeState={onStateChange}
                />
            </View>

            <Text style={styles.title}>Juego de hokey</Text>
            
            <Text style={styles.description}>
            Con este tutorial aprenderás a realizar este
            lindo cuadrocon tapas de gaseosa y cartón 
            reciclado para decorar espacios de nuestro hogar.

            </Text>
            <View style={styles.video}>
                <YoutubePlayer
                    height={250}
                    play={playing}
                    videoId={"RdUPMjuvtsQ"}
                    onChangeState={onStateChange}
                />
            </View>


            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    category:{
        textAlign:'center',
        fontSize:22,
        color: Colors.cafe,
        fontWeight: 'bold',
        marginTop:0,
        marginBottom: 15,
        backgroundColor: Colors.white,
        elevation:5,
        padding:5
    },
    title:{
        paddingLeft: 25,
        color: Colors.green,
        fontSize: 18,
        fontWeight:'bold'
        
    },
    description:{
        fontFamily: 'Questrial',
        color: Colors.cafe,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15,
        fontSize: 15
    },
    video:{
        backgroundColor: Colors.newBlack,
        height: 220,
        margin: 15
    }
})
