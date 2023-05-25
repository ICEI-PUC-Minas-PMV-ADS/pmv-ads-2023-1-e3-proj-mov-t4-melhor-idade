import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import { insertAgua, updateAgua, deleteAgua } from '../services/aguas.services';

import { useNavigation } from '@react-navigation/native';

const Agua = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);
  const [copos, setCopos] = useState(null);

  useEffect(() => {
    if (item) {
      setData(item.data);
      setHorario(item.horario);
      setCopos(item.copos);
    }
  }, [item]);

  const handleSalvar = () => {
    if (!data || !horario || !copos) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (item) {
      updateAgua({
        data: data,
        horario: horario,
        copos: copos,
        id: item.id,
      }).then((res) => {
        navigation.goBack();
      });
    } else {
      insertAgua({
        data: data,
        horario: horario,
        copos: copos,
      }).then((res) => {
        navigation.goBack();
      });
    }
  };

  const handleExcluir = () => {
    deleteAgua(item.id).then((res) => {
      navigation.goBack();
    });
  };

  return (
    <>
      <Container>
        <Header title={'Água'} goBack={() => navigation.goBack()} />
        <Body>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Data"
            value={data}
            placeholder="00/00/00"
            keyboardType="numeric"
            maxLength={8}
            right={<TextInput.Icon name="calendar" />}
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
                  )}/${formattedText.slice(4, 6)}`
                );
              }
            }}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Horário"
            value={horario}
            placeholder="00:00"
            keyboardType="numeric"
            maxLength={5}
            right={<TextInput.Icon name="clock-outline" />}
            onChangeText={(text) => {
              let formattedText = text.replace(/[^0-9]/g, '');
              if (formattedText.length > 2) {
                formattedText =
                  formattedText.slice(0, 2) + ':' + formattedText.slice(2);
              }
              setHorario(formattedText);
            }}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Quantidade de copos"
            value={copos}
            keyboardType="numeric"
            maxLength={2}
            minLength={1}
            right={<TextInput.Icon name="water" />}
            onChangeText={(text) => setCopos(text)}
          />
          <Button style={styles.button} mode="contained" onPress={handleSalvar}>
            Salvar
          </Button>

          {item && (
            <Button
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

export default Agua;
