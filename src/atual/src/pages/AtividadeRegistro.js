import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import {
  insertAtividade,
  updateAtividade,
  deleteAtividade,
} from '../services/atividades.services';

import { useNavigation } from '@react-navigation/native';

const AtividadesRegistro = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState(null);
  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);
  const [tempo, setTempo] = useState(null);

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setData(item.data);
      setHorario(item.horario);
      setTempo(item.tempo);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateAtividade({
        nome: nome,
        data: data,
        horario: horario,
        tempo: tempo,
        id: item.id,
      }).then();
    } else {
      insertAtividade({
        nome: nome,
        data: data,
        horario: horario,
        tempo: tempo,
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteAtividade(item.id).then();
    navigation.goBack();
  };

  return (
    <>
      <Container>
        <Header title={'Atividade Física'} goBack={() => navigation.goBack()} />

        <Body>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Tipo de exercicio"
            value={nome}
            onChangeText={(text) => setNome(text)}
            right={<TextInput.Icon name="weight-lifter" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Data"
            value={data}
            onChangeText={(text) => setData(text)}
            right={<TextInput.Icon name="calendar" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Horário"
            value={horario}
            onChangeText={(text) => setHorario(text)}
            right={<TextInput.Icon name="clock-outline" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Duração"
            value={tempo}
            onChangeText={(text) => setTempo(text)}
            right={<TextInput.Icon name="watch" />}
          />

          <Button
            view
            style={styles.button}
            mode="contained"
            onPress={handleSalvar}>
            Salvar
          </Button>

          {item && (
            <Button
              view
              style={styles.buttonExcluir}
              mode="contained"
              onPress={handleExcluir}>
              Excluir
            </Button>
          )}
        </Body>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#4169E1',
  },
  input: {
    marginBottom: 1,
    height: 40,
  },
  buttonExcluir: {
    marginTop: 10,
    backgroundColor: 'red',
  },
});

export default AtividadesRegistro;
