import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Share } from 'react-native';
import { Text, Drawer, Button } from 'react-native-paper';

import Header from '../componentes/Header';

import { useNavigation } from '@react-navigation/native';
import { getRemedios } from '../services/remedios.services';
import { getAguas } from '../services/aguas.services';
import { getAtividades } from '../services/atividades.services';
import { getCheckups } from '../services/checkups.services';

const Cadastro = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const navigation = useNavigation();

  const [remedios, setRemedios] = useState([]);
  const [aguas, setAguas] = useState([]);
  const [atividades, setAtividades] = useState([]);
  const [checkups, setCheckups] = useState([]);

  const shareMessage = async () => {
    try {
      const result = await Share.share({
        message:
          'Medicamentos:' +
          '\n' +
          formattedDataRemedios.join('\n') +
          '\n' +
          'Ingestão de Água:' +
          '\n' +
          formattedDataAgua.join('\n') +
          '\n' +
          'Atividade Física:' +
          '\n' +
          formattedDataAtividade.join('\n') +
          '\n' +
          'Check-up:' +
          '\n' +
          formattedDataCheckup.join('\n'),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(
            'compartilhado com o tipo de atividade de: ' + result.activityType
          );
        } else {
          console.log('compartilhado');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('descartado');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    Promise.all([getRemedios(), getAguas(), getAtividades(), getCheckups()])
      .then(([remediosDados, aguasDados, atividadesDados, checkupsDados]) => {
        setRemedios(remediosDados);
        setAguas(aguasDados);
        setAtividades(atividadesDados);
        setCheckups(checkupsDados);
      })
      .catch((error) => {
        // Tratar erros caso ocorram
      });
  }, []);

  const formattedDataRemedios = remedios.map((item) => {
    return `
    Nome do medicamento: ${item.nome} (${item.dosagem})
    Horário: ${item.horario}
    Data: ${item.data}
  `;
  });

  const formattedDataAgua = aguas.map((item) => {
    return `
    Quantidade de copos: ${item.copos}
    Horário: ${item.horario}
    Data: ${item.data}
  `;
  });
  const formattedDataAtividade = atividades.map((item) => {
    return `
    Nome da atividade: ${item.nome} 
    Tempo: ${item.tempo} min
    Horário: ${item.horario}
    Data: ${item.data}
  `;
  });

  const formattedDataCheckup = checkups.map((item) => {
    return `
     Próximo check-up: ${item.proximo}
     Último check-up: ${item.ultimo}
  `;
  });

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
          <Button
            onPress={shareMessage}
            style={styles.buttonShare}
            icon="share-variant">
            Compartilhar
          </Button>
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
