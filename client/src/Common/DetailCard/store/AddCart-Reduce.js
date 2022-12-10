const ADD_CART_LIST = "ADD_CART_LIST";

const initState = {
  CartList: [],
};

const AddCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.CartList.push(action.item);
      return newState;
    }
    default:
      return state;
  }
};
export default AddCartReducer;
