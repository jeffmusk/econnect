import React from 'react'
import { View, Text,Button } from 'react-native'

export default function ProfileScreen({ navigation }){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Ir a Maps"
          onPress={() => navigation.navigate('Map')}
        />
      </View>
    );
  }
  
