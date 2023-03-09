import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ShowAllUsers from "../pages/ShowAllUsers/ShowAllUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/addUser" element={<AddUser />}></Route>
        <Route exact path="/showAllUsers" element={<ShowAllUsers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
