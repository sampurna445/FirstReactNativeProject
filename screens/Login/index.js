import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
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
        onPress={() => {}}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
