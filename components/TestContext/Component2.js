import {memo} from 'react';
import {View, Text} from 'react-native';
import Component3 from './Component3';

const Component2 = () => {
  console.log('2 got rerendered');

  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <View>
        <Text>Component 2</Text>
      </View>
      <Component3 />
    </View>
  );
};

export default memo(Component2);
