import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, Text } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Input from '../componentes/Input';
import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth.services';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconf, setPasswordconf] = useState('');

  const handleRegister = () => {
    register({
      nome: nome,
      email: email,
      nascimento: nascimento,
      cidade: cidade,
      estado: estado,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente.');
      }
    });
  };

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Body>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.body}>
                <Text style={styles.text}>Cadastre-se</Text>

                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Nome completo"
                  value={nome}
                  onChangeText={(text) => setNome(text)}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="E-mail"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Data de Nascimento"
                  value={nascimento}
                  placeholder="00/00/0000"
                  keyboardType="numeric"
                  maxLength={10}
                  minLength={8}
                  onChangeText={(text) => {
                    const formattedText = text.replace(/[^0-9]/g, '');
                    if (formattedText.length <= 2) {
                      setNascimento(formattedText);
                    } else if (formattedText.length <= 4) {
                      setNascimento(
                        `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`
                      );
                    } else {
                      setNascimento(
                        `${formattedText.slice(0, 2)}/${formattedText.slice(
                          2,
                          4
                        )}/${formattedText.slice(4, 8)}`
                      );
                    }
                  }}
                />

                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Cidade"
                  value={cidade}
                  onChangeText={(text) => setCidade(text)}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Estado"
                  value={estado}
                  onChangeText={(text) => setEstado(text)}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Senha"
                  value={password}
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Confirme sua senha"
                  value={passwordconf}
                  secureTextEntry
                  onChangeText={(text) => setPasswordconf(text)}
                />

                <TouchableOpacity>
                  <Button
                    view
                    style={styles.button}
                    mode="contained"
                    onPress={handleRegister}>
                    Cadastrar
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Button
                    view
                    style={styles.button}
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}>
                    Voltar
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Body>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4169E1',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  body: {
    marginTop: 1,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 700,
    padding: 15,
  },
});

export default Register;
