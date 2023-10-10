import {} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  return (
    <View>
      <Text>Test Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 5,
                marginVertical: 5,
                marginHorizontal: 20,
                backgroundColor: 'pink',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {item.item.name}
                </Text>
                <Text>{item.item.details}</Text>
              </View>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {item.item.price}
              </Text>
              <Text>{item.quantity}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default CartScreen;
