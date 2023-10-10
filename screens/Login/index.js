import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../features/userAuth/userAuthSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useDispatch();
  const userAuth = useSelector(state => state.userAuth);

  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>
      <TextInput
        value={email}
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height: 40}}
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"
      />
      <TextInput
        value={password}
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height: 40}}
        onChangeText={changedText => {
          setPasssword(changedText);
        }}
        secureTextEntry
        placeholder="Password"
      />
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
        onPress={() => {
          dispatch(loginUser(email));
          // PersistanceHelper.setValue('userEmail', email);
          // EventRegister.emit('LoginEvent', 'It Works');
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
