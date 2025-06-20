import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Registration from "../Components/Registration";

export default function AuthPage() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}
