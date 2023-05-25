import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}> {'Seja bem-vindo(a)'}!</Text>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}> {'Entrar'}</Text>
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}> {'Cadastrar'}</Text>
          </Button>
        </View>
        <Image style={styles.logo} source={require('../imagens/banner3.png')} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e6fd',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    backgroundColor: '#c7e6fd',
  },
  body: {
    margin: 70,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    margin: 34,
    fontSize: 20,
    marginTop: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    margin: 8,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#4169E1',
  },
});

export default Homepage;
