import {useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {ApiHelper} from '../../helpers';
import {kApiTodos, kApiGetItems, kApiPostItems} from '../../config/WebServices';
import {itemsActions} from '../../features/items/itemsSclice';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../features/user/userSlice';

const {request} = itemsActions;

const ListApiScreen = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const items = useSelector(state => state.item);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));
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
              <Text>{item.image}</Text>
              <Text>{item.details}</Text>
              <Text>Testing</Text>
            </View>
          );
        }}
        ListFooterComponent={
          <View style={{flex: 1, marginHorizontal: 10}}>
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={changedText => {
                setTitle(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TextInput
              placeholder="Image"
              value={image}
              onChangeText={changedText => {
                setImage(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TextInput
              placeholder="Details"
              value={details}
              onChangeText={changedText => {
                setDetails(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TouchableOpacity
              style={{
                height: 40,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
              }}
              onPress={() => {
                dispatch(
                  request({
                    url: kApiPostItems,
                    data: {title, image, details, requestType: 'POST'},
                  }),
                );
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(userActions.logout());
              }}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
export default ListApiScreen;
