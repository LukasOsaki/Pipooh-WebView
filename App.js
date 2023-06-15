import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  return (
    <WebView
      source={{ uri: "https://app.pipooh.com.br/" }}
      onShouldStartLoadWithRequest={(event) => {
        const { url } = event;
        if (!url.includes("app.pipooh")) {
          if (url.startsWith('http://') || url.startsWith('https://')) {
            // URLs externos, abrir em um navegador separado
            Linking.openURL(url);
            return false; // impede o carregamento da URL no WebView
          }
        } 
        // URLs internos, permitir o carregamento no WebView
        return true;
      }}
      // style={{ marginTop: 20,
      // backgroundColor: #01b1af }}
      style={[{ marginTop: 35 }, { backgroundColor: '#01b1af' }]}
    />
  );
}

