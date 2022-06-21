import Login from "./Login"
import AccountPageContainer from "../containers/AccountPageContainer"
import { BrowserRouter as Router, Route, Link, Navigate, useNavigate, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AccountHolder from "./AccountHolder";

const Home = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [accountInfo, setAccountInfo] = useState([])
const [account, setAccount] = useState([]);


    return(
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            accountInfo={accountInfo}
            setAccountInfo={setAccountInfo}
            account={account} setAccount={setAccount}
            />} />
            <Route path='/accountholder/*' element={<AccountHolder 
            accountInfo={accountInfo} 
            account={account} setAccount={setAccount}
            />}/>
            <Route path='/accountpage/*' element={<AccountPageContainer account={account} setAccount={setAccount}/>} /> 
        </Routes>
        </>

    )
}

export default Home;