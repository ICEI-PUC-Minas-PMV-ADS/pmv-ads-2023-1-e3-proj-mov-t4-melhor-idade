import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Share } from 'react-native';
import {
  Text,
  Button,
  List,
  FAB,
  Provider,
  Modal,
  Portal,
} from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { getAtividades } from '../services/atividades.services';

const Atividade = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [atividades, setAtividades] = useState([]);

  const shareMessage = async () => {
    try {
      const result = await Share.share({
        message: formattedData.join('\n\n'),
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
    getAtividades().then((dados) => {
      setAtividades(dados);
    });
  }, [isFocused]);

  const formattedData = atividades.map((item) => {
    return `
    Nome da atividade: ${item.nome} 
    Tempo: ${item.tempo} min
    Horário: ${item.horario}
    Data: ${item.data}
  `;
  });

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const renderItem = ({ item }) => (
    <List.Item
      title={item.nome + ' ( ' + item.tempo + ' min )'}
      description={'Horário: ' + item.horario}
      left={(props) => (
        <List.Icon {...props} color={'blue'} icon="weight-lifter" />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('AtividadeRegistro', { item })}
    />
  );

  return (
    <>
      <Container>
        <Header title={'Atividade Física'} />
        <Body>
          <FlatList
            style={styles.lista}
            data={atividades}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Button
            onPress={shareMessage}
            style={styles.buttonShare}
            icon="share-variant">
            Compartilhar
          </Button>
        </Body>
        <FAB
          style={styles.fab}
          large
          icon="plus"
          onPress={() => navigation.navigate('AtividadeRegistro')}
        />
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <Text style={styles.modal}>
                Para adicionar registros, clique no botão "+" ao final da
                página. Para editar e excluir registros, clique sobre o registro
                desejado e, então, sobre o respectivo botão.
              </Text>
            </Modal>
          </Portal>
          <Button onPress={showModal}>Instrução de uso</Button>
        </Provider>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShare: {
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    top: '90%',
    right: 10,
    backgroundColor: '#4169E1',
  },
  lista: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#4169E1',
  },
  modal: {
    color: '#4169E1',
    fontSize: 20,
  },
});

export default Atividade;
