

const AccountPagePayment = ({payment}) => {
  
  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })

  return(
    <div className="payment-item">
      <div id='payment-left'>
        <h4>{payment.name}</h4>        
        <p>{payment.category}</p>
      </div>
      <div id='payment-right'>
        <p>{formatBalance.format(payment.amount)}</p>
        <p>{payment.date}</p>
      </div>
    </div>
    )
  }
  
  export default AccountPagePayment;