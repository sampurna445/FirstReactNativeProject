import {View, Text, TextInput} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const Component5 = () => {
  console.log('5 got rerendered');

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <View>
        <Text>Component 5</Text>
      </View>
      <View>
        <TextInput
          value={data}
          onChangeText={changedText => {
            setData(changedText);
          }}
          style={{backgroundColor: 'pink', height: 40, margin: 5, padding: 5}}
        />
        <Text>{`Hello ${data} again!`}</Text>
      </View>
    </View>
  );
};
export default Component5;
