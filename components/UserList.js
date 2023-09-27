import React, {useState} from 'react';
import {View, Text, FlatList, ViewBase} from 'react-native';
const UserList = props => {
  return (
    <View>
      <FlatList
        data={props.userData}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'grey', margin: 10}}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserList;
