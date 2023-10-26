import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {userActions} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';

const {logout} = userActions;

const LogoutScreenForUserSlice = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LogoutScreenForUserSlice;
