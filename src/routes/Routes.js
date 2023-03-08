import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/addUser" element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
