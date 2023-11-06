import {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  kApiTodos,
  kApiGetItems,
  kApiPostItem,
  kApiGetPopularMoviews,
} from '../../config/WebServices';
import {ApiHelper} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {itemsActions} from '../../features/items/itemsSlice';
import {PersistanceHelper} from '../../helpers';
import {userActions} from '../../features/user/userSlice';

const {request, requestEvery, requestLatest} = itemsActions;

const ListApiScreen = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const items = useSelector(state => state.item);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));
    // requestApi();

    return () => {
      console.log('list api screen is getting unmounted 1');
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('list api screen is getting unmounted 2');
    };
  }, []);

  // const requestApi = async () => {
  //   const response = await ApiHelper.get(kApiTodos);

  //   setData(response);
  // };

  return (
    <View>
      <Button
        title={'Take'}
        onPress={() => {
          dispatch(
            request({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}
      />
      <Button
        title={'Take Latest'}
        onPress={() => {
          dispatch(
            requestLatest({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}
      />
      <Button
        title={'Take Every'}
        onPress={() => {
          dispatch(
            requestEvery({url: 'https://jsonplaceholder.typicode.com/todos'}),
          );
        }}
      />
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
                    url: kApiPostItem,
                    data: {title, image, details, requestType: 'POST'},
                  }),
                );

                // setTitle('');
                // setImage('');
                // setDetails('');
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
