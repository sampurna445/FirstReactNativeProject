import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfile = props => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [cityName, setCityName] = useState(props.cityName);
  const [countryName, setCountrtyName] = useState(props.countryName);

  useEffect(() => {
    setFirstName(props.firstName);
  }, [props.firstName]);
  useEffect(() => {
    setLastName(props.lastName);
  }, [props.lastName]);
  useEffect(() => {
    setCityName(props.cityName);
  }, [props.cityName]);
  useEffect(() => {
    setCountrtyName(props.countryName);
  }, [props.countryName]);

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
