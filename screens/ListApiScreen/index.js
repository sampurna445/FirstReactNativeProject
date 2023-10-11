import {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {ApiHelper} from '../../helpers';
import {kApiTodos} from '../../config/WebServices';

const ListApiScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requsetApi();
  }, []);

  const requsetApi = async () => {
    const response = await ApiHelper.get(kApiTodos);

    setData(response);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 10, backgroundColor: 'pink'}}>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <Text>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default ListApiScreen;
