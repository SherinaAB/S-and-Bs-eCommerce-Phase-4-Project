import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import AddNewItem from './components/pages/AddNewItem'
// import ShoppingCart from './components/pages/ShoppingCart'


function App() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
    .then(res => res.json())
    .then(dat => setProducts(dat))
  }, [])

  function updateUser(new_user){
    setUser(new_user)
  }

  function fetchUsers(){
    fetch('/api/check_session')
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
    <Router>
    <NavBar />
    <Switch>
          <Route exact path="/">
            <Home products={products}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
        </Switch>
    </Router>
    {/* <Login updateUser={updateUser}/> */}
    </>
    )
  }
  
  // if user
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <About/>
          </Route>
          <Route exact path="/addnewitem">
            <AddNewItem/>
          </Route>
          {/* <Route path="/login" element={Login}></Route>
          <Route path="/about" element={About}></Route>
          <Route path="/contact" element={Contact}></Route>
          <Route path="/createaccount" element={CreateAccount}></Route>
          <Route path="/shoppingcart" element={ShoppingCart}></Route> */}
        </Switch>
    </Router>
  )
}

export default App
