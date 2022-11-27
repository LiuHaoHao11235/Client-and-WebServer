import { Globalstyle } from "./Global_Reset_Stlye.js";
import { Provider } from "react-redux"; //!使provider包覆的組件有辦法使用store 非常重要
import store from "./store/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/index.js";
import Detail from "./Pages/detail/index.js";
import LoginPage from "./Pages/loginPage/index.js";
function App() {
  return (
    <div>
      <Globalstyle></Globalstyle>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="detail/:phoneID" element={<Detail></Detail>}></Route>
            <Route path="login" element={<LoginPage></LoginPage>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
