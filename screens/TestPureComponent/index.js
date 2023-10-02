import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import TestPureClassComponent from './TestPureClassComponent';
import TestPureFuncComponent from './TestPureFuncComponent';

const TestPureComponent = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  console.log('test pure component is rendering');
  return (
    <View>
      <TextInput
        value={inputVal}
        onChangeText={changedText => {
          setInputVal(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', padding: 5, height: 40, margin: 10}}
      />
      <TextInput
        value={inputVal2}
        onChangeText={changedText => {
          setInputVal2(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', padding: 5, height: 40, margin: 10}}
      />
      <TestPureClassComponent someprop={inputVal} />
      {/* <TestPureFuncComponent /> */}
    </View>
  );
};
export default TestPureComponent;
