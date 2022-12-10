import { combineReducers } from "redux";
import headerReducer from "../Common/Header/store/header-Reducer";
import homePageReducer from "../Pages/home/store/homePage-Reducer";
import AddCartReducer from "../Common/DetailCard/store/AddCart-Reduce";
const reducer = combineReducers({
  header: headerReducer, //!header層包覆了header組件的reducer 最終reducer的資料結構會是 { header:aaa body:bbb footag:ccc }
  homepage: homePageReducer,
  addcart: AddCartReducer,
});
export default reducer;
