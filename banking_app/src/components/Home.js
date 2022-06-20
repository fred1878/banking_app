import Login from "./Login"
import AccountPageContainer from "../containers/AccountPageContainer"
import { BrowserRouter as Router, Route, Link, Navigate, useNavigate, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AccountHolder from "./AccountHolder";

const Home = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [accountInfo, setAccountInfo] = useState([])


    return(
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        <Routes>
            
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            accountInfo={accountInfo}
            setAccountInfo={setAccountInfo}
            />} />
            <Route path='/accountholder' element={<AccountHolder 
            accountInfo={accountInfo} 
            />}/>
            <Route path='/accountpage' element={<AccountPageContainer />} />
        </Routes>
        </>

    )
}

export default Home;