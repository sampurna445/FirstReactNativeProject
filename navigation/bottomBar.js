import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Dashboard,
  TestFlexScreen,
  TestStatePropsScreen,
  TestPureComponent,
} from '../screens';

import TabBar from './tabBar';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="testPureComponent" component={TestPureComponent} />
      <Tab.Screen name="testStateProps" component={TestStatePropsScreen} />
      <Tab.Screen name="dashboard" component={Dashboard} />
      <Tab.Screen name="testFlex" component={TestFlexScreen} />
    </Tab.Navigator>
  );
};

export default BottomBar;
