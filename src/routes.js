import { Route, Routes, Navigate } from "react-router";
import { Main } from "./pages/Main";
import { SignUp } from "./pages/SignUp";
import {PostsContextProvider} from "./postsContext";

export default function AppRoutes() {
  return (
    <PostsContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route exect path={'/login'} element={<SignUp />} />
        <Route exect path={'/home'} element={<Main />} />
        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>
    </PostsContextProvider>
  )
}