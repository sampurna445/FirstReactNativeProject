import {} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../features/userAuth/userAuthSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector(state => state.userAuth);
  return (
    <View>
      <Text>Welcome!! You are logged in!</Text>
      <Text
        style={{
          backgroundColor: 'lightgrey',
          height: 40,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {userAuth.email}
      </Text>

      <View>
        <TouchableOpacity
          style={{
            height: 40,
            margin: 10,
            backgroundColor: 'lightblue',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(logoutUser());
          }}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
