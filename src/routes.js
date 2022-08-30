import { Route, Routes } from "react-router";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";
import {PostsContextProvider} from "./postsContext";

export default function AppRoutes() {
  return (
    <PostsContextProvider>
      <Routes>
        <Route exect path={'/login'} element={<SignUp />} />
        <Route exect path={'/'} element={<Main />} />
      </Routes>
    </PostsContextProvider>
  )
}