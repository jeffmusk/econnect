import React, {useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import LinkInfo from '../../components/linkInfo/LinkInfo'
import Colors from '../../res/ColorsLib';
import WelcomeScreen from '../../screens/authScreen.js/WelcomeScreen';

export default function HomeMenuScreen({navigation}) {

  const [initialLogin, setinitialLogin] = useState(true)

  const handelInitialLogin = () =>{
    setinitialLogin(false)
  }
    return (
    <>
    { initialLogin ? 
      <WelcomeScreen handelInitialLogin={handelInitialLogin} />
      :
      <View style={styles.container}>
            <LinkInfo title={'Econocimiento'} nameImage={'Econocimiento'}  route={'Econocimiento'} navigation={navigation} colorText={Colors.BgEconocimiento} />
            <LinkInfo title={'Bricolaje'} nameImage={'Bricolage'}  route={'Bricolage'}  navigation={navigation} colorText={Colors.BgBricolage}/>
            <LinkInfo title={'Compostaje'} nameImage={'Compostaje'}  route={'Compostaje'}  navigation={navigation} colorText={Colors.BgCompostaje}/>
            <LinkInfo title={'EcoKids'} nameImage={'EcoKids'} route={'Ecokids'}   navigation={navigation} colorText={Colors.BgEcoKids}/>
            <LinkInfo title={'Centros de acopio'} nameImage={'acopio'} route={'centrosAcopio'}   navigation={navigation} colorText={Colors.BgAcopio}/>
      </View>

    }
    </>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
    paddingTop:30 ,
    paddingBottom:30,
    backgroundColor: '#F2F2F2', 
   justifyContent:'space-around'
  }
})




