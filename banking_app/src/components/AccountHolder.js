import AccountContainer from '../containers/AccountContainer'

const AccountHolder = ({accountInfo}) => {
  return(
    <>
    <div>
      <h2>Account Holder</h2>
      <p>Account ID: {accountInfo.id}</p>
      <p>Name: {accountInfo.name}</p>
      <p>Date of Birth: {accountInfo.dob}</p>
      <p>Address: {accountInfo.address}</p>
      <p>Accounts: {accountInfo.accounts.length}</p>
    </div>
    <AccountContainer accountInfo={accountInfo}/>
    </>

  )
}

export default AccountHolder;