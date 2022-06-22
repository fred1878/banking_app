import { useNavigate } from 'react-router-dom'
import AccountContainer from '../containers/AccountContainer'
import { Link } from 'react-router-dom'

const AccountHolder = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo, account, setAccount, deleteAccountHolder}) => {

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
    <>
    <a className="topnav-dropdown">
      <button className="dropbtn" onMouseOver={handleDropdownMouseOver}>Account Settings</button>
      <div className="topnav-dropdown-content">
        <a onMouseDown={handleDeleteAccountHolder}>Delete Account Holder</a>
        <a><Link to={'/newaccount'}>Edit Account Holder</Link></a>
      </div>
    </a>
    <div className='accountholder'>
      <p>Name: {accountInfo.name}</p>
      <p>Date of Birth: {accountInfo.dob}</p>
      <p>Address: {accountInfo.address}</p>
    </div>
    <AccountContainer accountInfo={accountInfo} account={account} setAccount={setAccount}/>
    </>

  )
}

export default AccountHolder;