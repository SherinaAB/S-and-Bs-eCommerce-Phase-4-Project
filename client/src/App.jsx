import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import CreateAccount from './components/pages/CreateAccount'
import ShoppingCart from './components/pages/ShoppingCart'


function App() {
  const [user, setUser] = useState(null)

  function fetchUsers(){
    fetch('/api/users')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => setUser(data))
      }
      else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
    fetchUsers()
  },[])
  if(!user){
    return (
    <>
    <Login/>
    </>
    )
  }
  
  return (
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/createaccount" Component={CreateAccount}></Route>
          <Route path="/shoppingcart" Component={ShoppingCart}></Route>
        </Routes>
    </Router>
      </>
  )
}

export default App
