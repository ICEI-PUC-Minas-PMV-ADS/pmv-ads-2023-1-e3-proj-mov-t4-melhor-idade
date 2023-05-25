import { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';
import Input from '../componentes/Input';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../contexts/UserContext';

import { getPerfils } from '../services/perfils.services';
import { useIsFocused } from '@react-navigation/native';

const Perfil = () => {
  const [userNome, setUserNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const navigation = useNavigation();
  const { id, setSigned, setNome, setUserId } = useUser();
  const isFocused = useIsFocused();

  const [perfils, setPerfils] = useState({});

  useEffect(() => {
    getPerfils().then((dados) => {
      const user = dados.find((item) => item.id.toString() == id);
      setUserNome(user.nome);
      setEmail(user.email);
      setCidade(user.cidade);
      setNascimento(user.nascimento);
      setEstado(user.estado);
    });
  }, [isFocused]);

  function existAccount() {
    setSigned(false);
    setNome('');
    setUserId('');
  }

  return (
    <>
      <Container>
        <Header title={'Olá, ' + userNome} goBack={() => navigation.goBack()} />

        <Body>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.body}>
                <Text style={styles.text}>Seus dados</Text>

                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Nome completo"
                  value={userNome}
                  onChangeText={(text) => setUserNome(text)}
                  disabled={true}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="E-mail"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  disabled={true}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Data de nascimento"
                  value={nascimento}
                  keyboardType="numeric"
                  onChangeText={(text) => setNascimento(text)}
                  disabled={true}
                  placeholder="00/00/00"
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Cidade"
                  value={cidade}
                  onChangeText={(text) => setCidade(text)}
                  disabled={true}
                />
                <Input
                  style={styles.input}
                  mode="outlined"
                  label="Estado"
                  value={estado}
                  onChangeText={(text) => setEstado(text)}
                  disabled={true}
                />

                <TouchableOpacity
                  activityOpacity={0.7}
                  onPress={existAccount}
                  style={styles.buttonContainer}>
                  <Text style={styles.textButton}>Sair da conta</Text>
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
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c7e6fd',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 8,
    height: 50,
    width: '90%',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 15,
  },
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Perfil;
