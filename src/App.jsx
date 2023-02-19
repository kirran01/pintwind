import reactLogo from './assets/react.svg'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Createpost from './pages/createpost'
import Otheruser from './pages/otheruser'
import Postpage from './pages/postpage'
import Profile from './pages/profile'
import Nav from './components/nav'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
