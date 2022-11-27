import {
  legacy_createStore as createStore, //新方法是legacy_createStore才對
  compose, //compose方法用來結合composeEnhancer們 為單一composeEnhancer
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk"; //在創建store時被使用
import reducer from "./total-reducer";
const composeEnhancers = [
  applyMiddleware(thunk), //!使action被Dispatch後能夠返回函數 而不只是object
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //*牛皮坳 將需要結合的composeEnhancer放在一起(同一個陣列) 之後解構後 用compose方法將他們合成為單一function
];
const store = createStore(reducer, compose(...composeEnhancers)); //TODO:利用reducer中的state狀態來創建store store負責存state狀態 並使用REDUX擴容插件
export default store;
