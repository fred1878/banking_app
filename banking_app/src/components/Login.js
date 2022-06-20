import { useEffect, useRef, useState } from "react";
import AccountHolder from "./AccountHolder";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginByName = () => {
      const name = loginName.current.value
      fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => {
        if(data[0].name == name){
          setIsLoggedIn(true)
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

    const loginName = useRef()

    return(
      <>
        <h1>LOGIN PAGE</h1>
        <input ref={loginName} type="text" placeholder="Enter login name"></input><button onClick={loginByName}>Login</button>
          <Routes>
            <Route path='/accountholder' element={<AccountHolder/>}></Route>
          </Routes>
      </>
    )
  
}

export default Login;