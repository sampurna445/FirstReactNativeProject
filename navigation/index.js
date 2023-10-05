import {useEffect, useState} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';

import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
  TestPropsScreen,
} from '../screens';
import TestPureComponent from '../screens/TestPureComponent';
import {PersistanceHelper} from '../helpers';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState('false');
  useEffect(() => {
    fetchUserEmail();
    let event = EventRegister.addEventListener('LoginEvent', data => {
      fetchUserEmail();
    });
    return () => {
      EventRegister.removeEventListener(event);
    };
  }, []);

  const fetchUserEmail = async () => {
    const userEmail = await PersistanceHelper.getValue('userEmail');
    if (userEmail && userEmail.length > 0) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  };
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testPropsScreen"
          component={TestPropsScreen}
          options={{title: 'Test Props Screen Component'}}
        />
        <Stack.Screen
          name="testPureComponent"
          component={TestPureComponent}
          options={{title: 'Test Pure Component'}}
        />

        <Stack.Screen
          name="testStateProps"
          component={TestStatePropsScreen}
          options={{title: 'Test State and Props'}}
        />
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

  return (
    <Stack.Navigator>
      {/* {isUserLoggedIn ? getMainStack() : getAuthStack()} */}
      {getMainStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
