import Login from "./Login"
import AccountPageContainer from "../containers/AccountPageContainer"
import { Route, Link, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AccountHolder from "./AccountHolder";
import CreateAccountHolder from "./CreateAccountHolder";
import NewAccount from "./NewAccount";


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
            .then(response => response.JSON)
    }

    const deleteAccountHolder = (id) => {
        console.log('deleting id ' + id)
        fetch('http://localhost:8080/account_holders/id=' + id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.JSON)
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

            {/* (hover heading) */}
            {/* <div className="homepageContainer">
                <div className="box">

                    <div className="mainTitle">
                        <span className="block"></span>
                        <h1 className="mainTitleText">FFBanking<span></span></h1>
                    </div>

                    <div className="role">
                        <div className="block"></div>
                        <p className="subText">Lets keep it in the family</p>
                    </div>

                </div>
            </div> */}

            <Routes>
                <Route path='/' />
                <Route path='/newaccount' element={<NewAccount
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    accountInfo={accountInfo}
                    setAccountInfo={setAccountInfo}
                    account={account}
                    setAccount={setAccount}
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