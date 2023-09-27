/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {SafeAreaView, Text, TextInput, View, ScrollView} from 'react-native';
import UserProfileC from './components/UserProfileC';
import UserProfileF from './components/UserProfileF';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}
        />
        {userList && userList.length > 0 && <UserList userData={userList} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
