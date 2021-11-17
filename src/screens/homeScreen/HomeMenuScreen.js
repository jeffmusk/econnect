import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import LinkInfo from '../../components/linkInfo/LinkInfo'


export default function HomeMenuScreen() {
    return (
    <View style={styles.container}>
          <LinkInfo title={'Econocimiento'} nameImage={'brain'} />
          <LinkInfo title={'Bricolage'} nameImage={'craft'} />
          <LinkInfo title={'Compostaje'} nameImage={'recicle'} />
          <LinkInfo title={'EcoKids'} nameImage={'tools'} />
          <LinkInfo title={'EcoEquipo'} nameImage={'team'} />
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


