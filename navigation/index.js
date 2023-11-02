import {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
  TestPropsScreen,
  TestReduxScreen,
  TestReduxClassScreen,
  ListScreen,
  CartScreen,
  ListApiScreen,
  ApiSauceScreen,
  TestRefScreen,
  TestReduxToolKitQuery,
  LogoutScreenForUserSlice,
  LocationScreen,
  // TestClassLifeCycle,
} from '../screens';
import TestPureComponent from '../screens/TestPureComponent';
import {PersistanceHelper} from '../helpers';
import {loginUser, logoutUser} from '../features/userAuth/userAuthSlice';
import {clearCart} from '../features/cart/cartSlice';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {};
  }, []);
  const isUserLoggedIn = () => {
    return true;
    return user?.data?.id && user?.data?.id?.length > 15;
  };
  //const [isUserLoggedIn, setUserLoggedIn] = useState('false');

  //const [currentUserAuth, setCurrentUserAuth] = useState('');

  //const userAuth = useSelector(state => state.userAuth);

  // const checkuserLoggedIn = () => {
  //   if (userAuth.email == '') {
  //     setUserLoggedIn(false);
  //   } else {
  //     setUserLoggedIn(true);
  //   }
  // };
  // useEffect(() => {
  //   checkuserLoggedIn();
  // }, [userAuth]);

  // useEffect(() => {
  //   fetchUserEmail();
  //   let event = EventRegister.addEventListener('LoginEvent', data => {
  //     fetchUserEmail();
  //   });
  //   return () => {
  //     EventRegister.removeEventListener(event);
  //   };
  // }, []);

  // const fetchUserEmail = async () => {
  //   const userEmail = await PersistanceHelper.getValue('userEmail');
  //   if (userEmail && userEmail.length > 0) {
  //     setUserLoggedIn(true);
  //   } else {
  //     setUserLoggedIn(false);
  //   }
  // };
  const getMainStack = () => {
    return (
      <Stack.Group>
        {/* <Stack.Screen
          name="testClassLifeCycle"
          component={TestClassLifeCycle}
          options={{title: 'TestClassLifeCycle'}}
        /> */}
        <Stack.Screen
          name="locationScreen"
          component={LocationScreen}
          options={{title: 'Location Screen'}}
        />
        <Stack.Screen
          name="listApiScreen"
          component={ListApiScreen}
          options={{title: 'API'}}
        />
        <Stack.Screen
          name="logoutScreenForUserSlice"
          component={LogoutScreenForUserSlice}
          options={{title: 'Logout Screen For UserSlice'}}
        />

        <Stack.Screen
          name="testReduxToolKitQuery"
          component={TestReduxToolKitQuery}
          options={{title: 'Test Redux ToolKit Query'}}
        />
        <Stack.Screen
          name="TestRefScreen"
          component={TestRefScreen}
          options={{title: 'Test useRef Screen'}}
        />
        <Stack.Screen
          name="apiSauceScreen"
          component={ApiSauceScreen}
          options={{title: 'API Sauce Screen'}}
        />

        <Stack.Screen
          name="listScreen"
          component={ListScreen}
          options={{
            title: 'List Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
                title="Cart"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{
            title: 'Cart Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  dispatch(clearCart());
                }}
                title="Clear Cart"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
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
      {isUserLoggedIn() ? getMainStack() : getAuthStack()}
      {/* {getMainStack()} */}
    </Stack.Navigator>
  );
};

export default Navigator;
