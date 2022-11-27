import { lazy, Suspense } from "react";
import { Globalstyle } from "./Global_Reset_Stlye.js";
import { Provider } from "react-redux"; //!使provider包覆的組件有辦法使用store 非常重要
import store from "./store/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./Pages/home/index.js"));
const Detail = lazy(() => import("./Pages/detail/index.js"));
const LoginPage = lazy(() => import("./Pages/loginPage/index.js"));

function App() {
  return (
    <div>
      <Globalstyle></Globalstyle>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<h1>LOADING....</h1>}>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route path="detail/:phoneID" element={<Detail></Detail>}></Route>
              <Route path="login" element={<LoginPage></LoginPage>}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
