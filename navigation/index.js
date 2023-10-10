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
  TestReduxScreen,
  TestReduxClassScreen,
  ListScreen,
} from '../screens';
import TestPureComponent from '../screens/TestPureComponent';
import {PersistanceHelper} from '../helpers';
import {loginUser, logoutUser} from '../features/userAuth/userAuthSlice';
import {useDispatch, useSelector} from 'react-redux/es/hooks/useSelector';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState('false');

  const [currentUserAuth, setCurrentUserAuth] = useState('');

  // const dispatch = useDispatch();
  // const userAuth = useSelector(state => state.userAuth);

  // const isUserAuth = () => {
  //   if (userAuth.length > 0 && userAuth) {
  //     dispatch(loginUser);
  //   } else {
  //     dispatch(logoutUser);
  //   }
  // };

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
          name="listScreen"
          component={ListScreen}
          options={{title: 'List Screen Component'}}
        />
        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{title: 'Test Redux Func Component'}}
        />
        <Stack.Screen
          name="testReduxClassScreen"
          component={TestReduxClassScreen}
          options={{title: 'Test Redux Class  Component'}}
        />

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
