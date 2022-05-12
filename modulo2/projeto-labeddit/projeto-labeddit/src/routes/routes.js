import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import SiginupPage from '../pages/SignupPage/SiginupPage'
import ErrorPage from '../pages/ErrorPage'


function RoutesApp() {
  return (
    <BrowserRouter>
        
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/signup" element={<SiginupPage />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}


export default RoutesApp