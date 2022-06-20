import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Link, Navigate, useNavigate, Routes } from 'react-router-dom'



const Login = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo}) => {
  const navigate = useNavigate();

    const loginByName = () => {
      const name = loginName.current.value
      fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => {
        if(data[0].name == name){
          setIsLoggedIn(true)
          setAccountInfo(data[0])
          document.getElementById('greeting').innerText = 'Welcome ' + name 
          navigate('/accountholder', {replace: true})
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
          <button id="logout" onClick={logout}>Logout</button>
        
      </>
    )
}

export default Login;