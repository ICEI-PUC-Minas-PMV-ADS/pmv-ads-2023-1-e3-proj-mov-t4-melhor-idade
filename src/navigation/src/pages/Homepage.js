import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

export default function Homepage() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>

     <Image style={styles.logo}  source={require('./assets/idosos.jpg')} />

      <Text style={styles.text}>
        Bem vindo(a)!
      </Text>
      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Login')}>
    Entrar
  </Button>
   <Button style={styles.button} mode="contained" onPress={() => console.log('Cadastrar')}>
    Cadastrar
  </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6e5fa',
    padding: 8,
    
  },

  button:{
    margin:5,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#679bd0'
    

  },
  text: {
    margin: 30,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: '#4682B4',
    fontWeight: 'bold',
  },

  logo: {
    
  }
});

