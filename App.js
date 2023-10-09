/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {PersistanceHelper} from './helpers';
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  useEffect(() => {
    // PersistanceHelper.setValue('testkey', 'testvalue');
    PersistanceHelper.setObject('testkey', {a: 'b', c: 'd', e: 'f'});
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
