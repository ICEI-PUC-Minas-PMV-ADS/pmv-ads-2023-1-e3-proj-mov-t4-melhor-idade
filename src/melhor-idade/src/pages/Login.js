import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';
import { login } from '../services/auth.services';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setSigned, setUserNome, setUserId } = useUser();

  const navigation = useNavigation();

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setUserId(res.user.id.toString());
        setUserNome(res.user.nome);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'E-mail ou senha inválidos!');
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="E-mail"
            value={email}
            keyboardType={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Senha"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            view
            style={styles.button}
            mode="contained"
            onPress={handleLogin}>
            Entrar
          </Button>
          <Button
            view
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>{'Ainda não tem uma conta?'}</Text>
          </Button>
        </View>
      </View>
      <View style={styles.copybg}>
        <Text style={styles.copyright}> {'\u00A9'}2023 Melhor Idade </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c7e6fd',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 40,
    marginTop: 10,
    backgroundColor: '#4169E1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 8,
    height: 50,
    width: 250,
  },
  btnRegister: {
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4169E1',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  body: {
    marginTop: -60,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 350,
    padding: 15,
  },
  copyright: {
    color: '#4169E1',
    fontSize: 15,
  },
  copybg: {
    alignItems: 'center',
    backgroundColor: '#c7e6fd',
    justifyContent: 'center',
    paddingBottom: 15,
  },
});

export default Login;
