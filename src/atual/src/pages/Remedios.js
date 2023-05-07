import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Button, List, FAB,Portal,Provider,Modal } from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';

import { getRemedios } from '../services/remedios.services';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const Remedios = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [remedios, setRemedios] = useState([]);

  useEffect(() => {
    getRemedios().then((dados) => {
      setRemedios(dados);
    });
  }, [isFocused]);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };


  const renderItem = ({ item }) => (
    <List.Item
      title={'Nome: ' + item.nome + ' ( ' + item.dosagem + ' )'}
      description={'Horário: ' + item.horario}
      left={(props) => <List.Icon {...props} color={'blue'} icon="pill" />}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('RemediosCadastro', { item })}
    />
  );

  return (
    <>
      <Container>
        <Header title={'Remédios'} />
        <Body>
          <FlatList
            style={styles.lista}
            data={remedios}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Button style={styles.buttonShare} icon="share-variant">
            Compartilhar
          </Button>
        </Body>
        <FAB
          style={styles.fab}
          large
          icon="plus"
          onPress={() => navigation.navigate('RemediosCadastro')}
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

export default Remedios;
