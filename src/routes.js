import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exect path={'/register'} element={<SignUp />} />
      <Route exect path={'/'} element={<Main />} />
    </Routes>
  )
}