import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../features/counter/counterSlice';

const TestReduxScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return (
    <View>
      <Text>Test Redux Func Componnet</Text>

      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TestReduxScreen;
