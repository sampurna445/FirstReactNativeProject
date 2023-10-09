import {} from 'react';
import {View, Text} from 'react-native';
import Component4 from './Component4';
const Component3 = () => {
  console.log('3 got rerendered');

  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <View>
        <Text>Component 3</Text>
      </View>
      <Component4 />
    </View>
  );
};
export default Component3;
