import React, { useContext } from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';
import Footer from './components/Footer';
import AuthContext, { AuthProvider } from './contexts/AuthContext';
import NewPost from './components/NewPost';
import PageNotFound from './components/PageNotFound';
import PostPage from './components/PostPage';
import Profile from './pages/Profile';
import CommentPage from './components/CommentPage';




const App = () => {





  return (
    <div className='App'>
      <AuthProvider>
      <Header/>
        <Routes>
          <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/user/:id/' element={<Profile/>}/>
          <Route path="/post/" element={<PrivateRoute><NewPost/></PrivateRoute>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/post/:id/comment' element={<CommentPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </div>
  )
}

export default App
