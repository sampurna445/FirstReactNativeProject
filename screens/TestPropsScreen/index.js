import {createContext, useContext, useState, memo} from 'react';
import {Text, View, TextInput} from 'react-native';
import Component1 from '../../components/TestContext/Component1';

const TestPropsScreen = () => {
  return (
    <View>
      <Text>test props</Text>

      <Component1 />
    </View>
  );
};

export default TestPropsScreen;
