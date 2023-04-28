import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  return(
    <WebView
      source={{ uri: "https://app.pipooh.com.br/" }}
      // style={{ marginTop: 20,
      // backgroundColor: #01b1af }}
      style={[{ marginTop: 35 }, { backgroundColor: '#01b1af' }]}
    />
  );
}

