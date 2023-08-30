// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavBar />
        {/* <h1 className="text-3xl font-bold underline animate-pulse">
          Hello world!
        </h1> */}
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
    </Router>
      </>
  )
}

export default App
