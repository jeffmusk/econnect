import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import LinkInfo from '../../components/linkInfo/LinkInfo'


export default function HomeMenuScreen({navigation}) {
    return (
    <View style={styles.container}>
          <LinkInfo title={'Econocimiento'} nameImage={'brain'}  route={'Econocimiento'} navigation={navigation} />
          <LinkInfo title={'Bricolage'} nameImage={'craft'}  route={'Bricolage'}  navigation={navigation}/>
          <LinkInfo title={'Compostaje'} nameImage={'recicle'}  route={'Compostaje'}  navigation={navigation}/>
          <LinkInfo title={'EcoKids'} nameImage={'tools'} route={'Ecokids'}   navigation={navigation}/>
          <LinkInfo title={'EcoEquipo'} nameImage={'team'} route={'EcoEquipo'}   navigation={navigation}/>
    </View>
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


