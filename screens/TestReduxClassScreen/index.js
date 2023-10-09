import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../../features/counter/counterSlice';

class TestReduxClassScreen extends React.Component {
  render() {
    const {counter} = this.props;

    return (
      <View>
        <Text>Test Redux Class Componnet</Text>

        <Text>{counter.value}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.increment();
          }}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.decrement();
          }}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const actions = {increment, decrement};
const mapStateToProps = state => ({
  counter: state.counter,
});
export default connect(mapStateToProps, actions)(TestReduxClassScreen);
