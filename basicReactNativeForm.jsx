import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*Titulo*/}
      <Text>Meu App com validação, YUP!!!</Text>
      {/*Nosso inputs */}
      <TextInput autoCapitalize='none' placeholder="E-mail de usuário" />
      <TextInput autoCapitalize='none' secureTextEntry={true} placeholder="Senha" />

      {/* botão de submit*/}
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
