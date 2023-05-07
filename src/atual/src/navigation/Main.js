import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../pages/Index';
import AguaRegistro from '../pages/AguaRegistro';

import Agua from '../pages/Agua';
import Remedios from '../pages/Remedios';
import RemediosCadastro from '../pages/RemediosCadastro';
import Atividade from '../pages/Atividade';
import AtividadeRegistro from '../pages/AtividadeRegistro';
import Checkup from '../pages/Checkup';
import CheckupRegistro from '../pages/CheckupRegistro';
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={Index}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="AguaRegistro"
        component={AguaRegistro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Agua"
        component={Agua}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Remedios"
        component={Remedios}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="RemediosCadastro"
        component={RemediosCadastro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Atividade"
        component={Atividade}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AtividadeRegistro"
        component={AtividadeRegistro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Checkup"
        component={Checkup}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CheckupRegistro"
        component={CheckupRegistro}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
