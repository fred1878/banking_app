import { useEffect, useRef, useState } from "react";


const Login = () => {

    const loginByName = () => {
      const name = loginName.current.value
      fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => console.log(data[0].id))
      
    }

    const loginName = useRef()

    return(
      <>
        <h1>LOGIN PAGE</h1>
        <input ref={loginName} type="text" placeholder="Enter login name"></input><button onClick={loginByName}>Login</button>
      </>
    )
  
}

export default Login;