import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Share } from 'react-native';
import {
  List,
  Text,
  FAB,
  Button,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';

import Header from '../componentes/Header';
import Container from '../componentes/Container';
import Body from '../componentes/Body';

import { getAguas } from '../services/aguas.services';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const AguaRegistro = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [aguas, setAguas] = useState([]);

  useEffect(() => {
    getAguas().then((dados) => {
      setAguas(dados);
    });
  }, [isFocused]);

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

  const formattedData = aguas.map((item) => {
    return `
    Quant. de copos: ${item.copos}
    Horário: ${item.horario}
    Data: ${item.data}
  `;
  });

  const renderItem = ({ item }) => (
    <List.Item
      title={item.copos + ' copo(s)'}
      description={item.horario}
      left={(props) => <List.Icon {...props} icon="cup-water" color={'blue'} />}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Agua', { item })}
    />
  );

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Container>
      <Header title={'Água'} />
      <Body>
        <FlatList
          style={styles.lista}
          data={aguas}
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
        onPress={() => navigation.navigate('Agua')}
      />
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text style={styles.modal}>
              Para adicionar registros, clique no botão "+" ao final da página.
              Para editar e excluir registros, clique sobre o registro desejado
              e, então, sobre o respectivo botão.
            </Text>
          </Modal>
        </Portal>
        <Button onPress={showModal}>Instrução de uso</Button>
      </Provider>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  buttonShare: {
    marginTop: 10,
  },
  modal: {
    color: '#4169E1',
    fontSize: 20,
  },
});
export default AguaRegistro;
