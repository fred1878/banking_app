import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAccount = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo, account, setAccount,postAccount}) => {

    const navigate = useNavigate()
    const generateAccountNumber = () => {
        return Math.floor(Math.random()*(9999999-999999))+10000000;
    }

    const generateCVC = () => {
        return Math.floor(Math.random()*(999-99))+100;
    }

    const generatePinNumber = () => {
        return Math.floor(Math.random()*(9999-999))+1000;
    }
    
    const [stateAccount, setStateAccount] = useState(    {
        "balance": 0,
        "accountNumber": generateAccountNumber(),
        "payments": [],
        "expirationDate": "0526",
        "cvc": generateCVC(),
        "pinNumber": generatePinNumber(),
        "subscriptions": [],
        "accountType": "BASIC_ACCOUNT",
        "accountHolders": [
            {
                "id": accountInfo.id
            }
        ],
        "debit": true
    })

    const handleAccountType = (event) => {
        let copiedAccount = {...stateAccount}
        copiedAccount.accountType = event.target.value
        setStateAccount(copiedAccount)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postAccount(stateAccount)
        navigate('/accountholder', {replace: true})
    }

    return(
    <>
    <div className="LoginContainer">
	    <div className="screen">
		    <div className="screen__content">
			    <form className="login" onSubmit={handleFormSubmit}>
                    <div>
                    <label htmlFor="accountType">Choose your Account Type</label>
                    <select id="accountType" onChange={handleAccountType}>
                        <option>Select One:</option>
                        <option value={'BASIC_ACCOUNT'}>Basic Account</option>
                        <option value={'JOINT_ACCOUNT'}>Joint Account</option>
                    </select>
                </div>
		  		    <button className="button login__submit" type="submit">
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