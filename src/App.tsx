import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import LoginPage from "./components/Login";
import Message from "./components/Message";
import PublicRoutes from "./auth/PublicRoutes";
import ProtectedRoutes from "./auth/ProtctedRoutes";
const App = () => {
  // const isLogin = useSelector((state) => console.log(state));
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/success" element={<Message />} />
        </Route>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
