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
   
    </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
  });
  
