const NewAccount = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo, account, setAccount}) => {
    


    return(
    <>
    <div className="LoginContainer">
	    <div className="screen">
		    <div className="screen__content">
			    <form className="login">
				    <div className="login__field">
					    <i className="login__icon fas fa-user"></i>
  					    <input type="text" className="login__input" placeholder="Enter Name" />
	  			    </div>
		  		    <button className="button login__submit">
			  		    <span className="button__text">Create New Account</span>
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

export default NewAccount;