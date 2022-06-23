import Login from "./Login"
import AccountPageContainer from "../containers/AccountPageContainer"
import { Route, Link, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AccountHolder from "./AccountHolder";
import CreateAccountHolder from "./CreateAccountHolder";
import NewAccount from "./NewAccount";
import SplashPage from "./SplashPage";


const Home = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accountInfo, setAccountInfo] = useState([])
    const [account, setAccount] = useState([])

    // useEffect(() => {
    //     if(isLoggedIn){
    //         console.log('logged in')
    //     } else {
    //         console.log('logged out')
    //     }
    // }, [isLoggedIn])

    const logout = () => {
        setIsLoggedIn(false)
        setAccountInfo([])
    }

    const postAccountHolder = (newAccountHolder) => {
        fetch('http://localhost:8080/account_holders', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAccountHolder)
        })
    }

    const deleteAccountHolder = (id) => {
        console.log('deleting id ' + id)
        fetch('http://localhost:8080/account_holders/id=' + id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
    }

    const postAccount = (newAccount) => {
        fetch('http://localhost:8080/accounts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAccount)
        })
    }

    const deleteAccount = (id) => {
        fetch('http://localhost:8080/accounts/'+ id , {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
    }


    return (
        <>
            <div className="topnav">
                <a><Link to='/'>Home</Link></a>
                {isLoggedIn ? (<a><Link to='/' onClick={logout}>Logout</Link></a>) : <a><Link to='/login'>Login</Link></a>}
                {isLoggedIn ? <></> : (<a><Link to={'/createaccountholder'}>Create Account</Link></a>)}
                <div className="topnav-right">
                    {isLoggedIn ? <a className="topnav-dropdown"><Link to={'/accountholder'}>Logged in as {accountInfo.name}</Link>
                    </a>
                        : <></>}
                </div>
            </div>



            <div className="footer">
                <div id="footerButton"></div>
                <div id="footerContainer">
                    <div id="cont">
                        <div className="footer_center">
                            <h3 className="footerText">FFBanking: Brought to you by Ed, Pete and Hamza ~ Est Since 2022 ©</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<SplashPage/>}/>
                <Route path='/newaccount' element={<NewAccount
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    accountInfo={accountInfo}
                    setAccountInfo={setAccountInfo}
                    account={account}
                    setAccount={setAccount}
                    postAccount={postAccount}
                />} />
                <Route path='/login' element={<Login
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    accountInfo={accountInfo}
                    setAccountInfo={setAccountInfo}
                    account={account}
                    setAccount={setAccount}
                />} />
                <Route path='/accountholder/*'
                    element={<AccountHolder
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        accountInfo={accountInfo}
                        account={account}
                        setAccount={setAccount}
                        setAccountInfo={setAccountInfo}
                        deleteAccountHolder={deleteAccountHolder}
                        deleteAccount={deleteAccount}
                    />} />
                <Route path='/accountpage/*' element={<AccountPageContainer account={account} setAccount={setAccount} />} />
                <Route path='/createaccountholder' element={<CreateAccountHolder
                    postAccountHolder={postAccountHolder}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    accountInfo={accountInfo}
                    setAccountInfo={setAccountInfo}
                />} />
            </Routes>
        </>
    )
}

export default Home;