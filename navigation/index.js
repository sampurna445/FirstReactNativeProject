import {} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="testFlex"
          component={TestFlexScreen}
          options={{title: 'Testing Flex System'}}
        />
        <Stack.Screen
          name="testStateProps"
          component={TestStatePropsScreen}
          options={{title: 'Test State and Props'}}
        />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigator;
