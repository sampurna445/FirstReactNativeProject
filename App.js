/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import UserProfileC from './components/UserProfileC';
import UserProfileF from './components/UserProfileF';

import {UserProfile, UserList} from './components';
import styles from './styles';

function App() {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountrtyName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TextInput
          value={firstName}
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={lastName}
          onChangeText={changedText => {
            setLastName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={cityName}
          onChangeText={changedText => {
            setCityName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={countryName}
          onChangeText={changedText => {
            setCountrtyName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <UserProfile
          firstName={firstName}
          lastName={lastName}
          cityName={cityName}
          countryName={countryName}
          childrenStyle={styles.userProfileStyle}
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}>
          <Text>First Child Node</Text>
          <Text> Second Child Node</Text>
          <Text> Third Child Node</Text>

          <Image
            style={styles.imageStyle}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </UserProfile>

        {userList && userList.length > 0 && <UserList userData={userList} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
