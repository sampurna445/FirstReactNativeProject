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
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile
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
