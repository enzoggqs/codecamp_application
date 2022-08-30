import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";

export default function AppRoutes() {
  const isLogged = useSelector((state) => state.currentUser.isLogged)

  return (
    <Routes>
      <Route exect path={'/login'} element={<SignUp />} />
      <Route exect path={'/'} element={<Main />} />
    </Routes>
  )
}