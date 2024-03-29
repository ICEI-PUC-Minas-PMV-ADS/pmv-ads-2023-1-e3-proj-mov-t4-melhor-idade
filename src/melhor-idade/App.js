import { NavigationContainer } from '@react-navigation/native';

import UserProvider from './src/contexts/UserContext';
import Route from './src/navigation/Route';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
