import Login from "./Login"
import AccountPageContainer from "../containers/AccountPageContainer"
import { Route, Link, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AccountHolder from "./AccountHolder";
import CreateAccountHolder from "./CreateAccountHolder";


const Home = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [accountInfo, setAccountInfo] = useState([])
const [account, setAccount] = useState([])

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

const postAccountHolder = (newAccountHolder) => {
    fetch('http://localhost:8080/account_holders',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newAccountHolder)
    })
    .then(response => response.JSON)
}



    return(
        <>
            <div className="topnav">
                <a><Link to='/'>Home</Link></a>
                {isLoggedIn ? (<a><Link to='/' onClick={logout}>Logout</Link></a>) : <a><Link to='/login'>Login</Link></a>}
                {isLoggedIn ?  <></> : (<a><Link to={'/createaccountholder'}>Create Account</Link></a>)}
                <div className="topnav-right">
                    {isLoggedIn ? <a><Link to={'/accountholder'}>Logged in as {accountInfo.name}</Link></a> : <></>}
                </div>
            </div>

{/*         <div class="content-width">
                <div class="slideshow">
                    <!-- Slideshow Items -->
                    <div class="slideshow-items">
                        <div class="item">
                            <div class="item-image-container">
                                <img class="item-image" src="https://static01.nyt.com/images/2016/08/04/multimedia/hijabiworld/hijabiworld-superJumbo.jpg" />
                            </div>
                            <!-- Staggered Header Elements -->
                            <div class="item-header">
                                <span class="vertical-part"><b>C</b></span>
                                <span class="vertical-part"><b>L</b></span>
                                <span class="vertical-part"><b>I</b></span>
                                <span class="vertical-part"><b>E</b></span>
                                <span class="vertical-part"><b>N</b></span>
                                <span class="vertical-part"><b>T</b></span>
                                <span class="vertical-part"><b>#1</b></span>
                            </div>
                            <!-- Staggered Description Elements -->
                            <div class="item-description">
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial </b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span> 
                                <span class="vertical-part">
                                    <b>Client Testimonial</b>
                                </span>           
        </div>
      </div>
      <div class="item">
        <div class="item-image-container">
          <img class="item-image" src="https://www.universityofcalifornia.edu/sites/default/files/black-man-suit.jpg" />
        </div>
        <!-- Staggered Header Elements -->
        <div class="item-header">
          <span class="vertical-part"><b>C</b></span>
          <span class="vertical-part"><b>L</b></span>
          <span class="vertical-part"><b>I</b></span>
          <span class="vertical-part"><b>E</b></span>
          <span class="vertical-part"><b>N</b></span>
          <span class="vertical-part"><b>T</b></span>
          <span class="vertical-part"><b>#2</b></span>
        </div>
        <!-- Staggered Description Elements -->
        <div class="item-description">
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
              <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
        </div>
      </div>
      <div class="item">
        <div class="item-image-container">
          <img class="item-image" src="https://media.istockphoto.com/photos/portrait-of-mature-businessman-smiling-in-office-picture-id1026529200?k=20&m=1026529200&s=612x612&w=0&h=cx6mXZkspERW9UAn-CEKCFdrtdsbb2wrlCJiraledg4=" />
        </div>
        <!-- Staggered Header Elements -->
        <div class="item-header">
          <span class="vertical-part"><b>C</b></span>
          <span class="vertical-part"><b>L</b></span>
          <span class="vertical-part"><b>I</b></span>
          <span class="vertical-part"><b>E</b></span>
          <span class="vertical-part"><b>N</b></span>
          <span class="vertical-part"><b>T</b></span>
          <span class="vertical-part"><b>#3</b></span>
        </div>
        <!-- Staggered Description Elements -->
        <div class="item-description">
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
              <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span>
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
          <span class="vertical-part">
            <b>Client Testimonial</b>
          </span> 
        </div>
      </div>
    </div>
    <div class="controls">
      <ul>
        <li class="control" data-index="0"></li>
        <li class="control" data-index="1"></li>
        <li class="control" data-index="2"></li>
      </ul>
    </div>
  </div>
</div> */}

        <Routes>
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
            accountInfo={accountInfo} 
            account={account} 
            setAccount={setAccount}
            />}/>
            <Route path='/accountpage/*' element={<AccountPageContainer account={account} setAccount={setAccount}/>} /> 
            <Route path='/createaccountholder' element={<CreateAccountHolder
            postAccountHolder={postAccountHolder}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            accountInfo={accountInfo}
            setAccountInfo={setAccountInfo}
            />}/>
        </Routes>
        </>
    )
}

export default Home;