import {useState, memo, useMemo} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
const TestPureFuncComponent = () => {
  const [testVal, setTestVal] = useState('');
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  console.log('render of pure func component is running');
  return (
    <View>
      <Text>test func comp</Text>
      <TextInput
        value={testVal}
        onChangeText={changedText => {
          setTestVal(changedText);
        }}
        placeholder="Function textinput"
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <Text>{count}</Text>

      <TouchableOpacity
        onPress={() => {
          setCount(c => c + 1);
        }}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{calculation}</Text>
    </View>
  );
};
const expensiveCalculation = num => {
  console.log('Calculating...');

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};
export default memo(TestPureFuncComponent);
