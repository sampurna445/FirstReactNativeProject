import React from 'react';
import {View, Text, TextInput} from 'react-native';
// import _ from 'loadash';

class TestPureClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: '',
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //return true when current state is not equalt to previous state
  //                   OR
  //return true when current prop is not equalt to previous prop
  // return (
  //   !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  // );
  // return true;
  //return nextProps.errorMessage!==this.props.errorMessage;

  //}
  render() {
    console.log('render of test pure class component');
    return (
      <View>
        <Text>Testing class TestPureComponent</Text>
        <TextInput
          value={this.state.testValue}
          onChangeText={changedText => {
            this.setState({testValue: changedText});
          }}
          placeholder=""
          style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
        />
      </View>
    );
  }
}
export default TestPureClassComponent;
