import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={''}
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height40}}
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"
      />
      <TextInput
        value={''}
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height40}}
        onChangeText={changedText => {
          setPasssword(changedText);
        }}
        secureTextEntry
        placeholder="Password"
      />
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
    </View>
  );
};

export default Login;
