import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
