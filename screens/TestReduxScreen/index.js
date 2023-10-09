import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {connect} from 'react-redux';
import {addCar} from '../../features/cars/carSlice';

const TestReduxScreen = props => {
  const [inputVal, setInputVal] = useState('');
  const [currentCar, setCurrentCar] = useState('');

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const cars = useSelector(state => state.car);
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
      <FlatList
        data={cars}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />

      <TextInput
        value={currentCar}
        onChangeText={changedText => {
          setCurrentCar(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(addCar(currentCar));
        }}>
        <Text>Add Car</Text>
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
