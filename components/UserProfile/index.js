import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfile = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountrtyName] = useState('');

  const textInputStyle = {
    backgroundColor: 'pink',
    height: 40,
    padding: 10,
    margin: 10,
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        value={firstName}
        defaultValue="First Name"
        onChangeText={changedText => {
          setFirstName(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={lastName}
        defaultValue="Last Name"
        onChangeText={changedText => {
          setLastName(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={cityName}
        defaultValue="City"
        onChangeText={changedText => {
          setCityName(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={countryName}
        defaultValue="Country"
        onChangeText={changedText => {
          setCountrtyName(changedText);
        }}
        style={textInputStyle}
      />
      <Button
        onPress={() => {
          props.onSubmitPressed({
            firstName,
            lastName,
            cityName,
            countryName,
          });
          setFirstName('');
          setLastName('');
          setCityName('');
          setCountrtyName('');
        }}
        title="Submit"
        color="#841584"
      />
      <Button
        onPress={() => {
          props.onDeletePressed();
        }}
        title="Delete"
        color="#841584"
      />
      <View style={props.childrenStyle}>{props.children}</View>
    </View>
  );
};

export default UserProfile;
