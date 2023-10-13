import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

const CustomComponent = forwardRef((props, ref) => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const myInputRef1 = useRef(null);
  const myInputRef2 = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      setCountryName: countryName => {
        myInputRef2.current.setNativeProps({text: countryName});
      },
      setCityName: cityName => {
        myInputRef1.current.setNativeProps({text: cityName});
      },
    };
  });

  return (
    <View style={{backgroundColor: 'lightyellow'}}>
      <TextInput
        ref={myInputRef1}
        value={textInput1}
        onChangeText={changedText => {
          setTextInput1(changedText);
        }}
        placeholder="City"
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TextInput
        ref={myInputRef2}
        value={textInput2}
        onChangeText={changedText => {
          setTextInput1(changedText);
        }}
        placeholder="Country"
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TouchableOpacity>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
});
export default CustomComponent;
