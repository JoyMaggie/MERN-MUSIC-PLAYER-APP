import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Signup from './pages/Signup'
import Collections from './pages/Collections'
import Header from './components/Header'
import Footercom from './components/Footercom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/collections' element={<Collections/>}/>
      </Routes>
      <Footercom/>
    </BrowserRouter>
  )
}

export default App
