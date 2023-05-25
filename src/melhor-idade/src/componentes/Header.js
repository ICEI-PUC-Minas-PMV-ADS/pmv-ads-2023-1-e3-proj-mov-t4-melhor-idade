import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const Header = ({ title, goBack }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      {goBack && <Appbar.BackAction onPress={goBack} />}
      <Avatar.Image
        size={35}
        style={styles.imagem}
        source={require('../imagens/Logotipo.png')}
      />
      <Appbar.Content title={title} />
      <Appbar.Action
        icon="account-circle-outline"
        onPress={() => navigation.navigate('Perfil')}
      />
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4169E1',
  },
  imagem: {
    margin: 10,
  },
});

export default Header;
