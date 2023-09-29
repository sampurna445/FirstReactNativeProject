import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TestFlexScreen = ({route, navigation}) => {
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text>{Platform.OS === 'android' ? 'ANDROID' : 'IOS'}</Text>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'red',
          alignSelf: 'flex-start',
        }}></View>
      <View style={{width: 80, height: 80, backgroundColor: 'yellow'}}></View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'green',
          alignSelf: 'flex-end',
        }}></View>
      <Text>sample text</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('testStateProps', {
            firstName: 'Sam',
            lastName: 'Jones',
          });
        }}
        style={{
          height: 40,
          backgroundColor: 'blue',
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Press</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TestFlexScreen;
