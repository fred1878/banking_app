import AccountContainer from '../containers/AccountContainer'

const AccountHolder = ({accountInfo,account,setAccount}) => {
  return(
    <>
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