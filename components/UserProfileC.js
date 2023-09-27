import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class UserProfileC extends React.Component {
  constructor(props) {
    super(props);
    const {viewBGColor, textColor} = props;
    this.state = {
      toggleButton: false,
      textInputValue: '',
      viewBGColorState: viewBGColor,
      viewTextColorState: textColor,
    };
  }
  onTapButton = () => {
    this.setState({toggleButton: !toggleButton});
  };
  render() {
    const {toggleButton, textInputValue, viewBGColorState, viewTextColorState} =
      this.state;

    return (
      <View>
        <Text
          style={{
            color: viewTextColorState,
            backgroundColor: viewBGColorState,
          }}>
          Hello World
        </Text>
        <Text
          style={{
            color: viewTextColorState,
            backgroundColor: viewBGColorState,
          }}>
          This is a class component.
        </Text>
        <TextInput
          value={this.state.textInputValue}
          defaultValue="Enter Text"
          onChangeText={changedText => {
            this.setState({textInputValue: changedText});
          }}></TextInput>
        <Text>
          Button Toggle states is: {toggleButton == true ? 'YES' : 'NO'}
        </Text>
        <Button
          onPress={() => {
            this.onTapButton;
          }}
          title="Tap Button"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'red'});
          }}
          title="Set to Red"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'blue'});
          }}
          title="Set to Blue"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'orange'});
          }}
          title="Set to Orange"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'yellow'});
          }}
          title="Set to Yellow"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'black'});
          }}
          title="Set to Black"
          color="#841584"
        />
      </View>
    );
  }
}

export default UserProfileC;
