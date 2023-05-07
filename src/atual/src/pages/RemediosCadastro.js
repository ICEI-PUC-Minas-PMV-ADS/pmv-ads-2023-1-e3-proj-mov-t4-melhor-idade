import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import {
  insertRemedio,
  updateRemedio,
  deleteRemedio,
} from '../services/remedios.services';

import { useNavigation } from '@react-navigation/native';

const RemediosCadastro = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState(null);
  const [dosagem, setDosagem] = useState(null);
  const [horario, setHorario] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setDosagem(item.dosagem);
      setHorario(item.horario);
      setData(item.data);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateRemedio({
        nome: nome,
        dosagem: dosagem,
        horario: horario,
        data: data,
        id: item.id,
      }).then();
    } else {
      insertRemedio({
        nome: nome,
        dosagem: dosagem,
        horario: horario,
        data: data,
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteRemedio(item.id).then();
    navigation.goBack();
  };

  return (
    <>
      <Container>
        <Header title={'Remédios'} goBack={() => navigation.goBack()} />

        <Body>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Nome do Medicamento"
            value={nome}
            onChangeText={(text) => setNome(text)}
            right={<TextInput.Icon name="pill" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Dosagem"
            value={dosagem}
            onChangeText={(text) => setDosagem(text)}
            right={<TextInput.Icon name="numeric" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Horário"
            value={horario}
            onChangeText={(text) => {
              let formattedText = text.replace(/[^0-9]/g, '');
              if (formattedText.length > 2) {
                formattedText =
                  formattedText.slice(0, 2) + ':' + formattedText.slice(2);
              }
              setHorario(formattedText);
            }}
            right={<TextInput.Icon name="clock-outline" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Data"
            value={data}
            onChangeText={(text) => {
              const formattedText = text.replace(/[^0-9]/g, '');
              if (formattedText.length <= 2) {
                setData(formattedText);
              } else if (formattedText.length <= 4) {
                setData(
                  `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`
                );
              } else {
                setData(
                  `${formattedText.slice(0, 2)}/${formattedText.slice(
                    2,
                    4
                  )}/${formattedText.slice(4, 8)}`
                );
              }
            }}
            right={<TextInput.Icon name="calendar" />}
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

export default RemediosCadastro;
