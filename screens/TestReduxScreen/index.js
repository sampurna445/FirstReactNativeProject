import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../features/counter/counterSlice';
import {connect} from 'react-redux';
const TestReduxScreen = props => {
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
    </View>
  );
};
// const actions = {increment, decrement};
// const mapStateToProps = state => ({
//   counter: state.counter,
// });
export default TestReduxScreen;
//export default connect(mapStateToProps, actions)(TestReduxScreen);
