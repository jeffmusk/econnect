import React , { useState, useCallback }  from 'react'
import { View, Text ,StyleSheet, ScrollView,Image} from 'react-native';
import Colors from '../../res/ColorsLib';
import YoutubePlayer from "react-native-youtube-iframe";
import FontsVariables from '../../res/FontVariables';


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
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.category}>Compostaje</Text>
                
                <Text style={styles.title}>¿Qué es compostaje? :</Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/compostaje.jpg')}/>
                <Text style={styles.description}>
                    Se trata de una técnica por medio de la cual se generan las condiciones correctas para que desde residuos orgánicos los organismos descomponedores fabriquen un abono de alta calidad. 
                </Text>

                <Text style={styles.title}>¿Qué es Compost? </Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/compost.jpg')}/>
                <Text style={styles.description}>
                    El compost es un producto organico.Se trata de un abono natural que resulta de la acción de bacterias,hongos y gusanos sobre residuos que produces en tu casa
                </Text>
                
                <View style={styles.video}>
                    <YoutubePlayer
                        height={230}
                        play={playing}
                        videoId={"vqT-k5Y5qQA"}
                        onChangeState={onStateChange}
                    />
                </View>
                <Text style={styles.title}>
                    ¿Por qué es importante realizar compostaje en nuestro hogar? 
                </Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/porque.jpg')}/>

                <Text style={styles.description}>
                Porque reducimos la cantidad de basura que acaba en vertedero o incineradora. {"\n"}{"\n"}
                Porque cerramos el ciclo de la materia orgánica. 
                {"\n"}
                Porque obtenemos un abono de elevada calidad para nuestras plantas, sin ningún tipo de producto químico. 
                {"\n"}{"\n"}
                Porque devolvemos al suelo materia orgánica, enriqueciéndose de esta manera.
                
                </Text>

                <Text style={styles.title}>¿Cómo se hace el compostaje? : </Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/como.jpg')}/>
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
                
                <Text style={styles.title}>Beneficios del compost  :</Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/beneficios.jpg')}/>
                <Text style={styles.description}>
                -Efectos en la estructura del suelo. 
                {"\n"}{"\n"}
                El compost, debido a su estructura aterronada, facilita la formación de conglomerados del suelo permitiendo así mantener una correcta aireación y humedad del mismo. 
                {"\n"}{"\n"}
                -Efectos sobre la salud del suelo.  
                </Text>

                <Text style={styles.description}>
                Se trata de un producto natural, sin compuestos químicos y libre de patógenos. En muchos casos actúa como bactericida y fungicida.
                </Text>

                <Text style={styles.description}>
                -Efectos sobre los nutrientes de las plantas.  
                </Text>

                <Text style={styles.description}>
                Al ser un producto rico en nutrientes y macronutrientes, se convierte en un excelente abono para las plantas. 
                </Text>

                <Text style={styles.description}>
                -Beneficios económicos. 
                </Text>

                <Text style={styles.description}>
                No es necesario adquirir este producto, ya que se obtiene de un proceso muy sencillo que se puede realizar en el hogar 
                </Text>

                <Text style={styles.title}>Usos del compos :</Text>

                <Text style={styles.description}>
                Depende del grado de madurez del compost y del tipo de cultivo para el cual se destina, siendo las épocas óptimas para su aplicación primavera y otoño, épocas en que el suelo está caliente y la adición del compost lo calentará aún más favoreciendo la actividad de los microorganismos y el desarrollo de las raíces de la planta.
                {"\n"}{"\n"}
                Diferenciamos dos grados de madurez: 
                {"\n"}{"\n"}
                • Compost fresco (2-3 meses compostando): el que ha tenido un período de madurez corto y en el que se aprecia aún material sin descomponer. Se usa principalmente como protección frente ante los cambios de temperatura y de humedad, en especial frente a heladas. Además mejora las características del suelo y evita la aparición de malas hierbas.
                {"\n"}{"\n"}
                • Compost maduro (aproximadamente 5-6 meses compostando): aquel que ha tenido un período de madurez largo y no se aprecian materiales sin descomponer (excepto aquellos de muy lenta descomposición, ramas, cáscaras de huevo, etc.). Se diferencia fácilmente por su textura terrosa y su color oscuro. Su uso principalmente es como fertilizante ya que aporta elementos minerales (nitrógeno, fósforo, potasio, etc.), además de favorecer la capacidad de retención de agua.
                </Text>
                <Image style={styles.imagen} source={require('../../assets/compostaje/usos.jpg')}/>
            </View>  
                
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
     width: '100%'
    },
    category:{
        textAlign:'center',
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        backgroundColor: Colors.BgCompostaje,
        color: Colors.white,
        marginTop:0,
        marginBottom: 15,
        elevation:5,
        padding:5
    },
    title:{
        paddingLeft: 25,
        color: Colors.green,
        fontFamily: FontsVariables.subTitulos,
        fontSize:FontsVariables.sizeTextSubtitulos,
        marginTop:10
        
    },
    description:{
        fontFamily: FontsVariables.textos,
        fontSize:FontsVariables.sizeTextDescription,
        color: Colors.cafe,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15
     
    },
    video:{
        backgroundColor: '#000000',
    },
    imagen:{
        marginTop: 10
    }
})
