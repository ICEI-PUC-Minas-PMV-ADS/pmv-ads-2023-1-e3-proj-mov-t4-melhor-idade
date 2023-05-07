import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import {
  insertCheckup,
  updateCheckup,
  deleteCheckup,
} from '../services/checkups.services';

import { useNavigation } from '@react-navigation/native';

const CheckupRegistro = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [ultimo, setUltimo] = useState(null);
  const [proximo, setProximo] = useState(null);

useEffect(() => {
    if (item) {
      setUltimo(formatarData(item.ultimo));
      setProximo(formatarData(item.proximo));
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateCheckup({
        ultimo: formatarData(ultimo),
        proximo: formatarData(proximo),
        id: item.id,
      }).then();
    } else {
      insertCheckup({
        ultimo: formatarData(ultimo),
        proximo: formatarData(proximo),
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteCheckup(item.id).then();
    navigation.goBack();
  };
  const formatarData = (data) => {
    if (data === null || data === undefined) return '';

    const dataFormatada = data.replace(/\D/g, ''); 

    if (dataFormatada.length < 3) return dataFormatada; 

    if (dataFormatada.length === 3) {
      return `${dataFormatada.slice(0, 2)}/${dataFormatada.slice(2)}`; 
    }

    if (dataFormatada.length > 3 && dataFormatada.length < 5) {
      return `${dataFormatada.slice(0, 2)}/${dataFormatada.slice(2)}`; 
    }

    return `${dataFormatada.slice(0, 2)}/${dataFormatada.slice(2, 4)}/${dataFormatada.slice(4, 6)}`; 
  };
  return (
    <>
      <Container>
        <Header title={'Check-Up Médico'} goBack={() => navigation.goBack()}/>

        <Body>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Data último Check-Up (DD/MM/AA)"
            value={ultimo}
            keyboardType="numeric"
            onChangeText={(text) => setUltimo(formatarData(text))}
            right={<TextInput.Icon name="stethoscope" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Data próximo Check-Up (DD/MM/AA)"
            value={proximo}
            keyboardType="numeric"
            onChangeText={(text) => setProximo(formatarData(text))}
            right={<TextInput.Icon name="stethoscope" />}
          />
         <Button
            view
            style={styles.button}
            mode="contained"
            onPress={handleSalvar}>
            Salvar
          </Button>

          {item && 
            <Button
              view
              style={styles.buttonExcluir}
              mode="contained"
              onPress={handleExcluir}>
              Excluir
            </Button>
          }
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

export default CheckupRegistro;
