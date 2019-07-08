import { combineReducers } from 'redux';
import axios from 'axios';

const GET_LIST = 'GET_LIST';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const insrementAction = (candy) => ({
  type: INCREMENT,
  candy
});

export const decrementAction = (candy) => ({
  type: DECREMENT,
  candy
});

const getCandiesAction = (candies) => ({
  type: GET_LIST,
  candies,
});

export const getCandiesThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandiesAction(data));
    } catch (err) {
      console.log(err);
    }
  }
} 

const initialState = {
  candies: [],
  candy: {}
};

const candyReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, candies:{quantity: action.candy.quantity + 1}};
    case DECREMENT:
      return {...state, candies:{quantity: action.candy.quantity - 1}};
    default:
      return state;
  }
}

const bagReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST:
      return action.candies;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  candies: bagReducer,
  candy: candyReducer,
});

export default rootReducer;