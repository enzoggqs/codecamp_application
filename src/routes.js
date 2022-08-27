import { Route, Routes } from "react-router";
import { SignUp } from "./pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exect path={'/register'} element={<SignUp />} />
    </Routes>
  )
}