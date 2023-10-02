import {} from 'react';
import {View, Text} from 'react-native';
const TestPureFuncComponent = () => {
  console.log('render of pure func component is running');
  return (
    <View>
      <Text>Test Pure Func Component</Text>
    </View>
  );
};
export default TestPureFuncComponent;
