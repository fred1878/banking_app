import { useEffect, useRef, useState } from "react";
import AccountHolder from "./AccountHolder";
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import AccountPageContainer from '../containers/AccountPageContainer'
import Home from "./Home";


const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [accountInfo, setAccountInfo] = useState([])

    const loginByName = () => {
      const name = loginName.current.value
      fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => {
        if(data[0].name == name){
          setIsLoggedIn(true)
          setAccountInfo(data)
          document.getElementById('greeting').innerText = 'Welcome ' + name 
          let p = document.createElement("p")
          p.innerHTML = "<a href='/accountholder'>Go to Account</a>"
          document.getElementById('greeting').appendChild(p)
        }
      })
    }

    useEffect(() => {
      if(isLoggedIn){
        console.log('logged in')
      } else {
        console.log('logged out')
      }
    }, [isLoggedIn])

    const logout = () => {
      setIsLoggedIn(false)
      setAccountInfo([])
    }

    const loginName = useRef()

    return(
      <>
        <h1>LOGIN PAGE</h1>
        <div id="greeting"></div>
        <input ref={loginName} type="text" placeholder="Enter login name"></input><button onClick={loginByName}>Login</button>
          <Routes>
            <Route path='/accountholder' element={<AccountHolder accountInfo={accountInfo}/>}/>
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/account' element={<AccountPageContainer/>}>Account</Route> */}
          </Routes>
          <button id="logout" onClick={logout}>Logout</button>
        
      </>
    )
}

export default Login;