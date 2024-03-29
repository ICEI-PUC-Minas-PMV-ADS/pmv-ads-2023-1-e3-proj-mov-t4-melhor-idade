import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
