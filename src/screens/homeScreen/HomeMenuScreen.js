import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import LinkInfo from '../../components/linkInfo/LinkInfo'



export default function HomeMenuScreen() {
    return (
    <View style={styles.container}>
      <LinkInfo title={'Bricolage'} />

    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
    paddingTop:20 ,
    backgroundColor: '#F2F2F2',
  }
})

