import React , { useState, useCallback }  from 'react'
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Colors from '../../res/ColorsLib';
import YoutubePlayer from "react-native-youtube-iframe";


export default function Compostaje() {

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
            <Text style={styles.category}>Compostaje</Text>
            
            <Text style={styles.title}>¿Qué es compostaje? :</Text>
            
            <Text style={styles.description}>
            El compost es un producto orgánico, Se
            trata de un abono natural que resulta de la
            acción de bacterias, hongos y gusanos
            sobre los residuos que produces en tu casa.
            </Text>

            <View style={styles.video}>
                <YoutubePlayer
                    height={250}
                    play={playing}
                    videoId={"vqT-k5Y5qQA"}
                    onChangeState={onStateChange}
                />
            </View>

            <Text style={styles.title}>¿Cómo se hace el compostaje? :</Text>
            

            <Text style={styles.description}>
            El proceso consiste en crear las condiciones
            necesarias de luz, temperatura y humedad
            para que la materia orgánica sea
            descompuesta por diversos
            microorganismos, pequeños invertebrados y
            oxidación biológica. En el compostaje no se
            requiere apenas luz, la temperatura exterior
            idónea debe estar entre 15%. y 25*C.
            </Text>

        
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
