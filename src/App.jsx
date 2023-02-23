import reactLogo from './assets/react.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Createpost from './pages/createpost'
import Otheruser from './pages/otheruser'
import Postpage from './pages/postpage'
import Profile from './pages/profile'
import Nav from './components/nav'
import './App.css'

function App() {
  const [allPosts, setAllPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const updatePosts = (updatedPosts) => {
    setFilteredPosts(updatedPosts)
  }
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/all`)
        if (res) {
          console.log(res.data, 'rd')
          setAllPosts(res.data)
          setFilteredPosts(res.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])

  return (
    <div className="App">
      <Nav updatePosts={updatePosts} />
      <Routes>
        <Route path='/' element={<Home filteredPosts={filteredPosts} allPosts={allPosts} setAllPosts={setAllPosts} />} />
        <Route path='/profile' element={<Profile allPosts={allPosts} setAllPosts={setAllPosts} setFilteredPosts={setFilteredPosts} />} />
        <Route path='/post/:id' element={<Postpage />} />
      </Routes>
    </div>
  )
}

export default App
