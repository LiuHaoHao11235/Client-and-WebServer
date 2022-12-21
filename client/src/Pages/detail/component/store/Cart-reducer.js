const ADD_CART_LIST = "ADD_CART_LIST";
const PRODUCT_IS_LOADED = "PRODUCT_IS_LOADED";
const PRODUCT_IS_LOADING = "PRODUCT_IS_LOADING";
const DELETE_PRODUCT_FROM_SHOPLIST = "DELETE_PRODUCT_FROM_SHOPLIST";
const EDIT_PRODUCT_FROM_SHOPLIST = "EDIT_PRODUCT_FROM_SHOPLIST";
const SELECT_PHONE_COLOR = "SELECT_PHONE_COLOR";
const REFETCH_SPECIFICATION = "REFETCH_SPECIFICATION";
const SET_PRODUCT_INDEX = "SET_PRODUCT_INDEX";
const initState = {
  CartList: [],
  ProductInCartList: [],
  Product_Loading_State: true,
  ProductSpecification: { color: "", rom: "128G", ColorIndex: 0 },
  ProductIndex: "",
};
const filterArr = (arr1, arr2) => {
  const newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    var repeat = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};
const AddCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART_LIST: {
      const ProductName = action.name + state.ProductSpecification.color;
      const newState = JSON.parse(JSON.stringify(state));
      const CheckOutProductInCartList = () => {
        var checkoutstate = [false, newState.ProductInCartList.length];
        newState.ProductInCartList.forEach((ProductInCart, index) => {
          // console.log("ProductInCart", ProductInCart);
          if (ProductInCart === ProductName) {
            checkoutstate = [true, index];
          }
        });
        return checkoutstate;
      };
      const checkOutState = CheckOutProductInCartList();
      // console.log(checkOutState);
      if (checkOutState[0]) {
        // console.log(`${ProductName}商品已經在購物車中`);
        newState.CartList[checkOutState[1]].number++;
      } else if (!checkOutState[0]) {
        // console.log(`${ProductName}商品第一次入購物車中`);
        const productDetail = {
          key: checkOutState[1],
          name: action.name.slice(0, -4),
          Specification: `顏色:${state.ProductSpecification.color} 容量:${state.ProductSpecification.rom}`,
          price: action.price,
          number: 1,
          fullname: ProductName,
        };
        newState.ProductInCartList.push(ProductName);
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
      action.selectedRowKey.forEach((selectedKey) => {
        for (var i = 0; i < newState.CartList.length; i++) {
          if (newState.CartList[i].key === selectedKey) {
            newState.CartList.splice(i, 1);
          }
        }
      });
      // console.log("Reducer newProductInCartList", newProductInCartList);
      // console.log("Reducer CartList", newState.CartList);
      return newState;
    }
    case EDIT_PRODUCT_FROM_SHOPLIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.CartList = action.NewCartList;
      return newState;
    }
    case SELECT_PHONE_COLOR: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.ProductSpecification.color = action.color;
      newState.ProductSpecification.ColorIndex = action.ColorIndex;
      return newState;
    }
    case REFETCH_SPECIFICATION: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.ProductSpecification = action.ProductSpecification;
      newState.ProductIndex = "";
      console.log("重新取得商品規格", action.ProductSpecification);
      return newState;
    }
    case SET_PRODUCT_INDEX: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.ProductIndex = action.ProductIndex;
      newState.ProductSpecification.rom = action.rom;
      return newState;
    }
    default:
      return state;
  }
};
export default AddCartReducer;
