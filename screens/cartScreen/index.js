import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, addToCart} from '../../features/cart/cartSlice';
import {cartScreenStyles as styles} from './styles';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  // Calculate the total price of individual items in the cart
  const calculateItemTotal = item => {
    return item.price * item.quantity;
  };

  // Calculate the total price of the entire cart
  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0,
    );
  };

  const renderCartItem = ({item}) => {
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                // Dispatch an action to remove from the cart
                dispatch(removeFromCart(item));
              }}
              style={{padding: 5}}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                // Dispatch an action to add to the cart
                dispatch(addToCart(item));
              }}
              style={{padding: 5}}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{item.details}</Text>
        <Text>{item.price}</Text>
        <Text>Total: {calculateItemTotal(item)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <View style={{}}>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={item => item.name.toString()}
          />
          <Text style={{padding: 25, fontWeight: 'bold'}}>
            {' '}
            Total Cart Price: {calculateCartTotal()}
          </Text>
        </View>
      ) : (
        <View style={styles.centered}>
          <Text>Cart is Empty</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
