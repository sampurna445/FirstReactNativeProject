import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {connect} from 'react-redux';
const TestReduxScreen = props => {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return (
    <View>
      <Text>Test Redux Func Componnet</Text>

      <Text>{count}</Text>
      {/* <Text>{props.counter.value}</Text> */}
      <TouchableOpacity
        onPress={() => {
          // props.increment();
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // props.decrement();
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TextInput
        value={inputVal}
        keyboardType="numeric"
        style={{height: 40, backgroundColor: 'yellow', padding: 5, margin: 10}}
        onChangeText={changedText => {
          setInputVal(changedText);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          // props.decrement();
          dispatch(incrementByAmount(parseInt(inputVal)));
        }}>
        <Text>Increment By Value</Text>
      </TouchableOpacity>
    </View>
  );
};
// const actions = {increment, decrement};
// const mapStateToProps = state => ({
//   counter: state.counter,
// });
export default TestReduxScreen;
//export default connect(mapStateToProps, actions)(TestReduxScreen);
