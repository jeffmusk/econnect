import React from 'react'
import { View, Text , StyleSheet, ScrollView,Image} from 'react-native'
import Colors from '../../res/ColorsLib'
import FontsVariables from '../../res/FontVariables'

export default function Econocimiento() {
    return (
    <ScrollView>

        
        <View style={styles.container}>
            <Text style={styles.category}>Econocimiento</Text>
            <Text style={styles.title}>Medio Ambiente</Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Medio.jpg')}/>

            <Text style={styles.description}>
                El medioambiente es el espacio en el que
                se desarrolla la vida de los distintos
                organismos favoreciendo su interacción. En
                él se encuentran tanto seres vivos como
                elementos sin vida y otros creados por la
                mano del hombre.
            </Text>

            <Text style={styles.title}>Animalismo</Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Animalismo.jpg')}/>
            <Text style={styles.description}>
                La doctrina animalista dice que todos los animales poseen los mismos derechos que los humanos. Los animalistas defienden y salvaguardan a los animales como seres sintientes y realizan valer sus derechos. Además son personas cuyos pensamientos se reflejan en   sus ocupaciones. 

            </Text>

            <Text style={styles.title}>Senderismo</Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Senderismo.jpg')}/>
            <Text style={styles.description}>
                
                El senderismo es una actividad deportiva que se realiza en el medio natural. Se basa en caminar por senderos, caminos, etcétera … de bosques, hayedos, montañas, con la intención de hallar el patrimonio natural, contemplar vistas y panorámicas. A la inversa, es un actividad perfecta para tomarse con tranquilidad, gozar en compañía, compartir enormes instantes y vivencias, y desconectar de la rutina. 

            </Text>
            
            <Text style={styles.title}>Ecología: </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Ecologia.jpg')}/>
            <Text style={styles.description}>
                
                La Ecología es  la ciencia que tiene por objeto el  análisis de la interacción que establecen   los organismos vivos y el medio ambiente en el cual se desarrollan,  igualmente estudia  cómo se distribuyen y  el  porqué  de su   copiosidad en un área definida, y cómo aquellas características son dañadas por la relación entre los organismos y su  ambiente. El ambiente incluye las características físicas  que tienen la posibilidad de ser denominadas como la suma de componentes abióticos locales, como el clima y propiedades geográficas, y los otros organismos que comparten aquel hábitat.


            </Text>

            <Text style={styles.title}>Bricolaje: </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Bricolaje.jpg')}/>
            <Text style={styles.description}>
                
            El bricolaje es una actividad creativa que reutiliza lo preexistente por medio del empleo de los más variados recursos; para muchas personas es una actividad sencilla, entretenida, apasionante, motivadora, y con un aporte de utilidad para el hogar o para la familia, e incluso hasta beneficiosa para la salud (esto último en la medida que permite a una persona realizar actividades creativas y variadas en cuanto a lo físico, mental o intelectual, a quien de otra forma tal vez pasaría largos períodos de inactividad y de aburrimiento.


            </Text>

            <Text style={styles.title}>Reciclaje: </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Reciclaje.jpg')}/>     
            <Text style={styles.description}>

            Es un proceso fácil o complejo que sufre un material o producto para ser reincorporado a un periodo de producción o de consumo, así sea éste el mismo en que ha sido creado u otro distinto. En términos de absoluta propiedad se podría tener en cuenta el reciclaje puro solamente una vez que el producto material se reincorpora a su periodo natural y primigenio: materia orgánica que se añade al periodo natural de la materia por medio del compostaje. De acuerdo con la dificultad del proceso que sufre el material o producto a lo largo de su reciclaje, se establecen 2 tipos: directo, primario o sencilla; e indirecto, secundario o complejo. 
            
            </Text >
            
            <Text style={styles.title}> Zero Waste ( ResiduoCero) </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/ZeroWaste.jpg')}/>
            <Text style={styles.description}>

                La finalidad de este movimiento es minimizar al mayor los residuos y la basura que generamos cotidianamente. De esta manera no sólo disminuimos nuestra huella, si no que también, nos posibilita vivir con menos cosas materiales y vivir una vida más rica en instantes y vivencias que nos hacen sentir lo realmente fundamental. 
            
            
            </ Text>

            <Text style={styles.title}> Residuos Orgánicos  </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Organica.jpg')}/>
            <Text style={styles.description}>
 
                Los residuos orgánicos, son biodegradables, se conforman naturalmente y tienen la propiedad de poder desintegrarse o degradarse rapidamente, transformándose en otra materia orgánica. Los residuos orgánicos se conforman de restos de comida y restos vegetales de procedencia domiciliaria. 
            
            </ Text>   

            <Text style={styles.title}>Residuos Inorgánicos:  </Text>
            <Image style={styles.imagen} source={require('../../assets/econocimiento/Inorganica.jpg')}/>
            <Text style={styles.description}>
 
                 
                A diferencia de los orgánicos, los desperdicios inorgánicos fueron fabricados en procesos industriales y artificiales. 

                Los residuos inorgánicos tardan un largo tiempo en degradarse debido a que no se reintegran en la naturaleza como pasa con la enorme mayor parte de los residuos orgánicos. Por esa razón, varios residuos inorgánicos permanecen catalogados como residuos no biodegradables. 

                En todo caso, es fundamental subrayar que la enorme mayor parte de los residuos inorgánicos son reciclables y tienen la posibilidad de volver a utilizarse en la cadena de elaboración y consumo. 
            
            </ Text>  


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
        fontFamily: FontsVariables.titulos,
        fontSize: FontsVariables.sizeTextTitleCategory ,
        color: Colors.white,
        marginTop:0,
        marginBottom: 15,
        backgroundColor: Colors.BgEconocimiento,
        elevation:5,
        padding:5,
        
    },
    title:{
        textAlign: 'center',
        color: Colors.green,
        fontFamily: FontsVariables.subTitulos,
        fontSize:FontsVariables.sizeTextSubtitulos,
        marginBottom: 10,
        marginTop:10
    },
    description:{
        fontFamily: FontsVariables.textos,
        fontSize:FontsVariables.sizeTextDescription,
        color: Colors.cafe,   
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15,
        fontSize: FontsVariables.sizeTextDescription
    },
    imagen:{
        width: '100%',

    }
})
