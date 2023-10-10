import {} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../features/cart/cartSlice';

const itemList = [
  {name: 'Macbook', details: 'Macbook pro with core i9', price: 2000},
  {name: 'iPhone 15', details: 'iPhone 15', price: 1500},
  {name: 'iPad', details: 'Sleak and smart', price: 800},
  {name: 'LED', details: 'Reliable true colors', price: 1200},
  {name: 'Microwave Oven', details: 'Power saver', price: 500},
  {name: 'Dining Table', details: 'set of 6', price: 900},
  {name: 'Workstation', details: '4 cubicles', price: 400},
];

const ListScreen = props => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('cartScreen');
        }}
        style={{
          marginHorizontal: 10,
          backgroundColor: 'blue',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Open Cart View</Text>
      </TouchableOpacity>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 5,
                marginVertical: 5,
                marginHorizontal: 10,
                backgroundColor: 'pink',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
              </View>

              <View
                style={{
                  marginTop: 10,
                  alignSelf: 'flex-end',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                }}>
                <Text style={{marginHorizontal: 20}}>{item.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  style={{backgroundColor: 'yellow', padding: 10}}>
                  <Text>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;
