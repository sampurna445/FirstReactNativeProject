import carSlice from './cars/carSlice';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import userAuthSlice from './userAuth/userAuthSlice';
import {todosApiUsingRTKQuery} from '../config/todosApiUsingRTKQuery';

export default {
  counter: counterSlice,
  car: carSlice,
  userAuth: userAuthSlice,
  cartReducer: cartSlice,
  todos: todosApiUsingRTKQuery.reducer,
};
