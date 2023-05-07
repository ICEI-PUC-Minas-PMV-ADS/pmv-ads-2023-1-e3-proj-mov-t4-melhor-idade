import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Home from './Home';
import Remedios from './Remedios';
import Agua from './AguaRegistro';
import Checkup from './Checkup';
import Atividade from './Atividade';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Início', icon: 'home' },
    { key: 'remedios', title: 'Remédios', icon: 'pill' },
    { key: 'agua', title: 'Água', icon: 'cup-water' },
    { key: 'atividade', title: 'Atividade', icon: 'weight-lifter' },
    { key: 'checkup', title: 'Check-up', icon: 'stethoscope' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    agua: Agua,
    atividade: Atividade,
    checkup: Checkup,
    remedios: Remedios,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: '#4169E1' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
