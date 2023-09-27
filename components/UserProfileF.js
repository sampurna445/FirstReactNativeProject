import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfileF = props => {
  const [toggleButton, setToggleButton] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [viewBGColorState, setviewBGColorState] = useState(props.viewBGColor);
  const [textColorState, settextColorState] = useState(props.textColor);
  // const {viewBGColor, textColor} = props;
  // useEffect(() => {}, []);
  const onTapButton = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <View>
      <Text style={{color: textColorState, backgroundColor: viewBGColorState}}>
        Hello World
      </Text>
      <Text style={{color: textColorState, backgroundColor: viewBGColorState}}>
        This is a Functional component
      </Text>
      <TextInput
        value={textInputValue}
        defaultValue="Enter Text"
        onChangeText={changedText => {
          setTextInputValue(changedText);
        }}></TextInput>
      <Text>
        Button Toggle states is: {toggleButton == true ? 'YES' : 'NO'}
      </Text>
      <Button
        onPress={() => {
          setToggleButton(!toggleButton);
        }}
        title="Tap Button"
        color="#841584"
      />
      <Button
        onPress={() => {
          onTapButton;
        }}
        title="Set to Red"
        color="#841584"
      />
      <Button
        onPress={() => {
          setviewBGColorState('blue');
        }}
        title="Set to Blue"
        color="#841584"
      />
      <Button
        onPress={() => {
          setviewBGColorState('orange');
        }}
        title="Set to Orange"
        color="#841584"
      />
      <Button
        onPress={() => {
          setviewBGColorState('yellow');
        }}
        title="Set to Yellow"
        color="#841584"
      />
      <Button
        onPress={() => {
          setviewBGColorState('black');
        }}
        title="Set to Black"
        color="#841584"
      />
    </View>
  );
};

export default UserProfileF;
