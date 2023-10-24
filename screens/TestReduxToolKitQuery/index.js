import React from 'react';
import {Text, View} from 'react-native';
import {useGetTodosQuery} from '../../config/todosApiUsingRTKQuery';

const TestReduxToolKitQuery = () => {
  const {data, error, isLodaing} = useGetTodosQuery();

  console.log('DATA:' + data);
  console.log('Error:' + error);
  console.log('isLoading:' + isLodaing);
  return (
    <View>
      <Text>Testing Redux ToolKit Query</Text>
    </View>
  );
};

export default TestReduxToolKitQuery;
