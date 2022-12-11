const ADD_CART_LIST = "ADD_CART_LIST";
const PRODUCT_IS_LOADED = "PRODUCT_IS_LOADED";
const PRODUCT_IS_LOADING = "PRODUCT_IS_LOADING";
const DELETE_PRODUCT_FROM_SHOPLIST = "DELETE_PRODUCT_FROM_SHOPLIST";
const initState = {
  CartList: [],
  ProductInCartList: [],
  Product_Loading_State: true,
};
const filterArr = (arr1, arr2) => {
  console.log(arr2);
  const arr = [...arr1, ...arr2];
  const newArr = arr.filter((t) => {
    return !(arr1.includes(t) && arr2.includes(t));
  });
  return newArr;
};
const AddCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      const CheckOutProductInCartList = () => {
        var checkoutstate = [false, newState.ProductInCartList.length];
        newState.ProductInCartList.forEach((ProductInCart, index) => {
          // console.log("ProductInCart", ProductInCart);
          if (ProductInCart === action.name) {
            checkoutstate = [true, index];
          }
        });
        return checkoutstate;
      };
      const checkOutState = CheckOutProductInCartList();
      // console.log(checkOutState);
      if (checkOutState[0]) {
        console.log("商品已經在購物車中");
        newState.CartList[checkOutState[1]].number++;
      } else if (!checkOutState[0]) {
        console.log("商品第一次入購物車中");
        const productDetail = {
          key: checkOutState[1],
          name: action.name,
          Specification: `123464`,
          price: action.price,
          number: 1,
        };
        newState.ProductInCartList.push(action.name);
        newState.CartList.push(productDetail);
      }
      return newState;
    }
    case PRODUCT_IS_LOADED: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.Product_Loading_State = false;
      return newState;
    }
    case PRODUCT_IS_LOADING: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.Product_Loading_State = true;
      return newState;
    }
    case DELETE_PRODUCT_FROM_SHOPLIST: {
      const newState = JSON.parse(JSON.stringify(state));
      const newProductInCartList = filterArr(
        newState.ProductInCartList,
        action.selectedProductList
      );
      newState.ProductInCartList = newProductInCartList;
      action.selectedRowIndex.forEach((selectedIndex) => {
        newState.CartList.splice(selectedIndex, 1);
      });
      console.log(newState.CartList);
      console.log(newState.ProductInCartList);
      return newState;
    }
    default:
      return state;
  }
};
export default AddCartReducer;
