import {createContext, useContext, useState, memo} from 'react';
import {Text, View, TextInput} from 'react-native';

const TestPropsScreen = () => {
  return (
    <View>
      <Text>test props</Text>

      <Component1 />
    </View>
  );
};

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  console.log('1 got rerendered');

  return (
    <View style={{backgroundColor: 'red', margin: 5}}>
      <TextInput
        value={user}
        onChangeText={changedText => {
          setUser(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 5, padding: 5}}
      />

      <UserContext.Provider value={user}>
        <View>
          <Text>{`Hello ${user}!`}</Text>
        </View>
        <Component2 />
        <Component5 />
      </UserContext.Provider>

      <Component5 />
    </View>
  );
}

const Component2 = memo(() => {
  console.log('2 got rerendered');

  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <View>
        <Text>Component 2</Text>
      </View>
      <Component3 />
    </View>
  );
});

function Component3() {
  console.log('3 got rerendered');

  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <View>
        <Text>Component 3</Text>
      </View>
      <Component4 />
    </View>
  );
}

function Component4() {
  console.log('4 got rerendered');

  const user = useContext(UserContext);

  return (
    <View style={{backgroundColor: 'orange', margin: 5}}>
      <View>
        <Text>Component 4</Text>
        <Text>{`Hello ${user} again!`}</Text>
      </View>
      <Component5 />
    </View>
  );
}

function Component5() {
  console.log('5 got rerendered');

  const user = useContext(UserContext);

  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <View>
        <Text>Component 5</Text>
      </View>
      <View>
        <Text>{`Hello ${user} again!`}</Text>
      </View>
    </View>
  );
}

export default TestPropsScreen;
