import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  return(
    <WebView
      source={{ uri: "https://app.pipooh.com.br/" }}
      style={{ marginTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    borderWidth: 1,
    margin: 5,
  },
})