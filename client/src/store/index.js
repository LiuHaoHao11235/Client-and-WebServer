import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; //在創建store時被使用
import headerReducer from "../Common/Header/store/header-Reducer";
import homePageReducer from "../Pages/home/store/homePage-Reducer";
import AddCartReducer from "../Common/DetailCard/store/AddCart-Reduce";
const store = configureStore({
  reducer: {
    header: headerReducer, //!header層包覆了header組件的reducer 最終reducer的資料結構會是 { header:aaa body:bbb footag:ccc }
    homepage: homePageReducer,
    addcart: AddCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
