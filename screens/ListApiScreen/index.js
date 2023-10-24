import {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {ApiHelper} from '../../helpers';
import {kApiTodos} from '../../config/WebServices';
import {itemsActions} from '../../features/items/itemsSclice';
import {useDispatch, useSelector} from 'react-redux';

const {request} = itemsActions;

const ListApiScreen = () => {
  const items = useSelector(state => state.item);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(request({url: kApiTodos}));
    // requsetApi();
  }, []);

  // const requsetApi = async () => {
  //   const response = await ApiHelper.get(kApiTodos);

  //   setData(response);
  // };

  return (
    <View>
      <FlatList
        data={items.items}
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
