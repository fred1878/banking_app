

const AccountPageSubscription = ({subscription}) => {
  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })
  //formatBalance.format(payment.price)
  return(
    <div className="subscription-item">
      <div id="subscription-left">
        <h4>{subscription.name}</h4>
        <p>{subscription.category}</p>
      </div>
      <div id="subscription-right">
        <div className="price">
          <p>{formatBalance.format(subscription.price)}</p>
        </div>
        <p>{subscription.dateOfPayment}</p>
      </div>
    </div>

    
  )
}

export default AccountPageSubscription;