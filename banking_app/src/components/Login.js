import { useRef } from "react";
import {  useNavigate } from 'react-router-dom'

const Login = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo}) => {
  const navigate = useNavigate();

    const loginByName = (event) => {
      event.preventDefault()
      const name = loginName.current.value
      fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => {
        if(data[0].name === name){
          setIsLoggedIn(true)
          setAccountInfo(data[0])
          navigate('/accountholder', {replace: true})
        }
      })
    }

    const loginName = useRef()

return(
  <>
  <div className="LoginContainer">
	  <div className="screen">
		  <div className="screen__content">
			  <form className="login">
				  <div className="login__field">
					  <i className="login__icon fas fa-user"></i>
  					<input ref={loginName} type="text" className="login__input" placeholder="Enter Name" />
	  			</div>
		  		<button onClick={loginByName} className="button login__submit">
			  		<span className="button__text">Log In Now</span>
				  	<i className="button__icon fas fa-chevron-right"></i>
				  </button>				
			  </form>
		  </div>
		    <div className="screen__background">
		    	<span className="screen__background__shape screen__background__shape4"></span>
		  	  <span className="screen__background__shape screen__background__shape3"></span>		
		    	<span className="screen__background__shape screen__background__shape2"></span>
		    	<span className="screen__background__shape screen__background__shape1"></span>
		    </div>
	    </div>
    </div>
  </>
)

}

// return(
//    <>
//      <h1>LOGIN PAGE</h1>
//      <div id="greeting"></div>
//     <input ref={loginName} type="text" placeholder="Enter login name"></input><button onClick={loginByName}>Login</button>
//    </>
// )

export default Login;