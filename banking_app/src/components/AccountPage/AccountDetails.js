

const AccountDetails = ({account}) => {
  
  const convertAccountType = (type) => {
    if (type == "JOINT_ACCOUNT")
      return "JOINT ACCOUNT"
    else return "BASIC ACCOUNT"
  }

  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })

  const isDebit = (type) => {
    if (type) {
      return "DEBIT"
    } 
    return "CREDIT"
  }

  return(
    <>
      <h3>{account.accountNumber}</h3>
      <p>{convertAccountType(account.accountType)}</p>
      {/* <p>Balance : {new Intl.NumberFormat('en-UK', {style: 'currency',currency: 'GBP',}).format(account.balance)}</p> */}
      <p>Account Balance : {formatBalance.format(account.balance)}</p>
      <p>{isDebit(account.isDebit)}</p>
      <p>Card Details:</p>
      <ul>
        <li><p>CVC: {account.cvc}</p></li>
        <li><p>Expiration Date: {account.expirationDate}</p></li>
        <li><p>Pin Number: {account.pinNumber}</p></li>
      </ul>
    </>
  )
  }
  
export default AccountDetails;