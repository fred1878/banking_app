

const AccountHolder = ({accountInfo}) => {
  return(

    <div>
      <h1>Account Holder</h1>
      <p>Account ID: {accountInfo.id}</p>
      <p>Name: {accountInfo.name}</p>
      <p>Date of Birth: {accountInfo.dob}</p>
      <p>Address: {accountInfo.address}</p>
      
      
    </div>

    

  )
}

export default AccountHolder;