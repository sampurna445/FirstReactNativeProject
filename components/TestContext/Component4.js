import {} from 'react';
import {View, Text} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';
import Component5 from './Component5';

const Component4 = () => {
  console.log('4 got rerendered');

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View style={{backgroundColor: 'orange', margin: 5}}>
      <View>
        <Text>Component 4</Text>
        <Text>{`Hello ${data} again!`}</Text>
      </View>
      <Component5 />
    </View>
  );
};

export default Component4;
