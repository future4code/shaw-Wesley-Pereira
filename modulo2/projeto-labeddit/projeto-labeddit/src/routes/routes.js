import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import ErrorPage from '../pages/ErrorPage/ErroPage'



function RoutesApp() {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/feed/:id" element={<FeedPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}


export default RoutesApp