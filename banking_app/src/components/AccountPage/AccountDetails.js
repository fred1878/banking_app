import Moment from "react-moment";


const AccountDetails = ({account}) => {
  
  const convertAccountType = (type) => {
    if (type === "JOINT_ACCOUNT")
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
    <div id='account-details-container'>
      <div id='account-details-left'>
        <h3 id='account-title'>{account.accountNumber}</h3>
        <p>{convertAccountType(account.accountType)}</p>
            <li><p>{isDebit(account.debit)}</p></li>
        <div id='account-card-details'>
          <p>Card Details:</p>
          <ul>
            <li><p>CVC: {account.cvc}</p></li>
            <li><p>Expires: <Moment parse='MMYY' format='MM/YY'>{account.expirationDate}</Moment></p></li>
            <li><p>Pin: {account.pinNumber}</p></li>
          </ul>
        </div>
      </div>
      <div id='account-details-right'>
        <p>Balance : {formatBalance.format(account.balance)}</p>
      </div>
    </div>
  )
  }
  
export default AccountDetails;