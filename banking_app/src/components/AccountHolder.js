import { useNavigate } from 'react-router-dom'
import AccountContainer from '../containers/AccountContainer'
import { Link } from 'react-router-dom'
import Moment from "react-moment";


const AccountHolder = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo, account, setAccount, deleteAccountHolder, deleteAccount}) => {

  const navigate = useNavigate()

  const handleDropdownMouseOver = (event) => {
    const name = accountInfo.name
    fetch("http://localhost:8080/account_holders/name=" + name)
      .then(response => response.json())
      .then(data => {
        if(data[0].name === name){
          setAccountInfo(data[0])
        }
      })
  }

  const handleDeleteAccountHolder = (event) => {
    console.log(event);
    deleteAccountHolder(accountInfo.id)
    setIsLoggedIn(false)
    setAccountInfo({
      id: '',
      name: '',
      dob: '',
      address: '',
      employmentStatus: '',
      accounts: []
  })
    navigate('/',{replace:false})
  }

  return(
    <div id='account-holder-container'>
    <a className="topnav-dropdown">
      <button className="dropbtn" onMouseOver={handleDropdownMouseOver}>Account Settings</button>
      <div className="topnav-dropdown-content">
        <a onMouseDown={handleDeleteAccountHolder}>Delete Account Holder</a>
        <a><Link to={'/newaccount'}>Create New Account</Link></a>
      </div>
    </a>
    <div className='accountholder'>
      <br/><p id='holder-name'>{accountInfo.name}</p><br/>
      <p>Date of Birth: <Moment format='DD-MM-YYYY'>{accountInfo.dob}</Moment></p>
      <p>Address: {accountInfo.address}</p><br/>
    </div>
    <AccountContainer accountInfo={accountInfo} account={account} setAccount={setAccount} deleteAccount={deleteAccount} setAccountInfo={setAccountInfo}/>
    </div>
//<Moment format='DD-MM-YYY'>{accountInfo.dob}</Moment>
  )
}

export default AccountHolder;