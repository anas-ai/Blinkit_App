/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthProvider from './src/context/Auth/AuthContex';

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
