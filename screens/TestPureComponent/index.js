import React, {useState, useCallback, useEffect} from 'react';
import {View, TextInput} from 'react-native';

import TestPureClassComponent from './TestPureClassComponent';
import TestPureFuncComponent from './TestPureFuncComponent';
import {PersistanceHelper} from '../../helpers';

const TestPureComponent = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  useEffect(() => {
    myAsyncFetchMethod();
  }, []);

  const myAsyncFetchMethod = async () => {
    const fetchedValue = await PersistanceHelper.getValue('testkey');
    console.log(fetchedValue);
  };

  console.log('test pure component is rendering');

  const myMethod = useCallback(() => {
    console.log('useCallBack log');
  }, []);
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

      {/* <TestPureClassComponent someprop={inputVal} someprop2={inputVal2} /> */}
      {/* <TestPureFuncComponent someprop={inputVal} someprop2={inputVal2} /> */}
      <TestPureFuncComponent someprop={inputVal} callback={myMethod} />
    </View>
  );
};
export default TestPureComponent;
