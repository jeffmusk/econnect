import React, {useCallback} from 'react'
import { View, Text,Alert, Button, Linking,StyleSheet } from 'react-native'
import LinkMaps from '../../components/linkInfo/LinkMaps'


const centrosAcopio = [
    {
        nombre: "IKOPORTEX",
        lat: "4.7074788",
        long: "-74.2392081",
    },
    {
        nombre: "RECICLAIR SAS",
        lat: "4.7073793",
        long: "-74.2311239",
    },

] 
const baseUrl = 'https://maps.google.com/?q=';
const supportedURL = "https://maps.google.com/?q=4.7074788,-74.2392081";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default function MapScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Centros de acopio </Text>

        <View>
        <LinkMaps title={'IKOPORTEX'} nameImage={'maps'}  route={'Econocimiento'} navigation={navigation} />
        </View>
        <View style={styles.container}>
            <OpenURLButton url={supportedURL}>CENTRO DE ACOPIO UBICACION</OpenURLButton>
            
        </View>
        <View>
            <Button title="centro de acopio" 
            onPress={ async ()=>  { 
                await Linking.openURL('https://www.google.com/maps/dir/4.7202041,-74.2296709/IKOPORTEX,+Villa+Lady,+Cra.+6+No.+13ª+-+25+barrio,+Mosquera,+Cundinamarca/@4.7018304,-74.2108136,13.8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9b4d6b42edab:0xec59321be270fafa!2m2!1d-74.1740464!2d4.6948814');
            }} />
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
  });
  
