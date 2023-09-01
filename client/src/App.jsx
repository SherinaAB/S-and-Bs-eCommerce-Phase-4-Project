// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { useState,useEffect } from 'react'
// import './App.css'
// import NavBar from './components/NavBar'
// import Login from './components/Login'
// import Home from './components/pages/Home'
// import Contact from './components/pages/Contact'
// import About from './components/pages/About'
// import CreateAccount from './components/pages/CreateAccount'
// import ShoppingCart from './components/pages/ShoppingCart'


// function App() {
//   const [user, setUser] = useState(null)

//   // useEffect(()=>{
//   //   console.log("use effect")
//   //   fetch('/api/check_session')
//   //   .then(res =>{
//   //     if(res.ok){
//   //       data => setUser(data)
//   //     }
//   //     else{
//   //       setUser(null)
//   //     }
//   //   })
//   // },[])

//   // if(!user){
//   //   return (
//   //   <>
//   //   <Login />
//   //   </>
//   //   )
//   // }
  
//   return (
//     <>
//     <Router>
//       <NavBar />
//         <Routes>
//           <Route exact path="/" Component={Home}></Route>
//           <Route path="/login" Component={Login}></Route>
//           <Route path="/about" Component={About}></Route>
//           <Route path="/contact" Component={Contact}></Route>
//           <Route path="/createaccount" Component={CreateAccount}></Route>
//           <Route path="/shoppingcart" Component={ShoppingCart}></Route>
//         </Routes>
//     </Router>
//       </>
//   )
// }

// export default App


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
// import Contact from './components/pages/Contact'
import About from './components/pages/About'
import CreateAccount from './components/pages/CreateAccount'
// import ShoppingCart from './components/pages/ShoppingCart'


function App() {
  const [user, setUser] = useState(null)

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
            <Home/>
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
