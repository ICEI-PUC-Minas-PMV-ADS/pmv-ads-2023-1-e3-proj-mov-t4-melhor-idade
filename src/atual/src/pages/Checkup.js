import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {
  BottomNavigation,
  Text,
  Button,
  TextInput,
  List,
  FAB,
  Modal,
  Provider,
  Portal,
} from 'react-native-paper';

import Body from '../componentes/Body';
import Container from '../componentes/Container';
import Header from '../componentes/Header';
import { useNavigation } from '@react-navigation/native';

import { getCheckups } from '../services/checkups.services';
import { useIsFocused } from '@react-navigation/native';

const Checkup = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [checkups, setCheckups] = useState([]);

  useEffect(() => {
    getCheckups().then((dados) => {
      setCheckups(dados);
    });
  }, [isFocused]);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };


   const renderItem = ({ item }) => (
<List.Item
      title={'Próximo Check-Up: ' + item.proximo }
      description={'Último: ' + item.ultimo}
      left={(props) => <List.Icon {...props} color={'blue'} icon="stethoscope" />}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('CheckupRegistro', { item })}
    />
 // const renderItem = ({ item }) => (
    //<List.Item
     // title={'Próximo Check-Up:'  }
      //description={'Último :' + item.ultimo}
      //left={(props) => (
        //<List.Icon {...props} icon="stethoscope" color={'blue'} />
      //)}
      //right={(props) => (
        //<Text {...props} style={{ alignSelf: 'center' }}>
          //{' '}
          //{item.proximo}{' '}
       // </Text>
      //)}
      //onPress={() => navigation.navigate('CheckupRegistro', { item })}
    ///>
  );

  return (
    <>
      <Container>
        <Header title={'Check-Up Médico'} />

        <Body>
          <FlatList
            style={styles.lista}
            data={checkups}
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
          onPress={() => navigation.navigate('CheckupRegistro')}
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

export default Checkup;