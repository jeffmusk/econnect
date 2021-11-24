import React , {useState} from 'react'
import {View, ActivityIndicator} from 'react-native'
import { WebView } from 'react-native-webview';

export default function Juego() {
    const [loading, setLoading] = useState(true)

    return (
        <View style={{flex: 1}}>
            <WebView
                source={{ uri: 'https://proteccionparquecerroseco.web.app/' }}
                style={{ marginTop: -290 }}
                onLoad={() => setLoading(false)}
            />
            {loading && <ActivityIndicator
                style={{ position: "absolute", alignSelf: 'center' , marginTop: 300}}
                size="large"
                color="green"
                />}
        </View>
    )
}


