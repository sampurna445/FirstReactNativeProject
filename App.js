/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {PersistanceHelper, CryptoHelper} from './helpers';
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  const car = {name: 'Mercedes', color: 'black', model: 'G'};
  useEffect(() => {
    // PersistanceHelper.setValue('testkey', 'testvalue');
    PersistanceHelper.setObject('testkey', {a: 'b', c: 'd', e: 'f'});

    const encryptedString = CryptoHelper.encryptString(
      'Text for testing Cryptography',
    );
    console.log('Encrypted String: ' + encryptedString);

    const encryptedObj = CryptoHelper.encryptObject(car);

    console.log('encrypted Object: ' + encryptedObj);
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
