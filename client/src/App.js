import { lazy, Suspense } from "react";
import { Globalstyle } from "./Global_Reset_Stlye.js";
import { Provider } from "react-redux"; //!使provider包覆的組件有辦法使用store 非常重要
import store from "./store/index";
import { AuthContextProvider } from "./Pages/auth";
import Header from "./Common/Header";
import { ProtectedRoute } from "./Pages/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./Pages/home/index.js"));
const Detail = lazy(() => import("./Pages/detail/index.js"));
const LoginPage = lazy(() => import("./Pages/loginPage/index.js"));
const AdminPage = lazy(() => import("./Pages/adminPage/AdminPage"));
function App() {
  return (
    <div>
      <Globalstyle></Globalstyle>
      <Provider store={store}>
        <BrowserRouter>
          <AuthContextProvider>
            <Header></Header>
            <Suspense fallback={<h1>LAZY LOADING....</h1>}>
              <Routes>
                <Route exact path="/*" element={<Home></Home>}></Route>
                <Route path="detail/*" element={<Detail></Detail>}></Route>
                <Route
                  path="/users/*"
                  element={<LoginPage></LoginPage>}
                ></Route>
                <Route
                  path="admin/"
                  element={
                    <ProtectedRoute>
                      <AdminPage></AdminPage>
                    </ProtectedRoute>
                  }
                ></Route>
                {/* <Route
                path="fuck/:這是私人招待頁面"
                element={
                  <ProtectedRoute>
                    <Detail></Detail>
                  </ProtectedRoute>
                }
              ></Route> */}
              </Routes>
            </Suspense>
          </AuthContextProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
// json-server --watch db.json --port 5000
