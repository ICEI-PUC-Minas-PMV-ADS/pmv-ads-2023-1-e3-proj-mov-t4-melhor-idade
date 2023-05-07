import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Drawer } from 'react-native-paper';

import Header from '../componentes/Header';

import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Header title={'Início'} />

        <Image
          style={styles.logo}
          source={require('../imagens/banner_home.jpg')}
        />

        <View style={styles.body}>
          <Text style={styles.text1}> {'Bem-vindo(a)'}!</Text>
          <Text style={styles.text2}> {'Aqui você pode:'}</Text>
          <Drawer.Item
            style={{ backgroundColor: '#c7e6fd' }}
            icon="pill"
            label="Administrar seus medicamentos"
          />
          <Drawer.Item
            style={{ backgroundColor: '#c7e6fd' }}
            icon="cup-water"
            label="Regular sua ingestão de água"
          />
          <Drawer.Item
            style={{ backgroundColor: '#c7e6fd' }}
            icon="weight-lifter"
            label="Monitorar seus exercícios físicos"
          />
          <Drawer.Item
            style={{ backgroundColor: '#c7e6fd' }}
            icon="stethoscope"
            label="Controlar as datas de suas consultas"
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#87CEEB',
    margin: 20,
    paddingTop: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#c7e6fd',
  },
  logo: {
    width: 500,
    height: 300,
  },
});

export default Cadastro;
