import React, {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {CustomComponent} from '../../components';
import {createLogger} from 'redux-logger';

const TestRefScreen = () => {
  const [inputVal1, setInputVal1] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  const [DateVar, setDateVar] = useState(undefined);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const myCounter = useRef(0);

  const customComponentRef = useRef(null);
  return (
    <View>
      <TextInput
        ref={inputRef1}
        value={inputVal1}
        onChangeText={changedText => {
          setInputVal1(changedText);
        }}
        placeholder="First Name"
        style={{backgroundColor: 'pink', margin: 10, padding: 5, height: 40}}
      />
      <TextInput
        ref={inputRef2}
        value={inputVal2}
        onChangeText={changedText => {
          setInputVal2(changedText);
        }}
        placeholder="Last Name"
        style={{backgroundColor: 'pink', margin: 10, padding: 5, height: 40}}
      />
      <TouchableOpacity
        onPress={() => {
          // setInputVal1('This is from button press');
          // inputRef1.current.clear();
          // inputRef1.current.setNativeProps({
          //   text: 'This text is set By useRef',
          // });
          inputRef2.current.focus();
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
      <CustomComponent ref={customComponentRef} />

      <TouchableOpacity
        onPress={() => {
          customComponentRef.current.setCityName('London');
        }}>
        <Text>CASE 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          customComponentRef.current.setCountryName('UK');
        }}>
        <Text>CASE 2</Text>
      </TouchableOpacity>

      <View>
        <Text>{myCounter.current}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          //   mycounter += 1;

          //   console.log(mycounter);

          myCounter.current += 1;

          setDateVar(new Date());
        }}>
        <Text>Increase counter</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TestRefScreen;
