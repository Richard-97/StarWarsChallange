import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';
import App from './src/App';

const Root = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="dark-content" />
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Root);
