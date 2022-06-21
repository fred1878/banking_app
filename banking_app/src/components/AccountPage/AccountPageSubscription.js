

const AccountPageSubscription = ({subscription}) => {
  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })
  //formatBalance.format(payment.price)
  return(
    <div className="subscription-item">
      <h4>{subscription.name}</h4>
      <p>{formatBalance.format(subscription.price)}</p>
      <p>{subscription.dateOfPayment}</p>
      <p>{subscription.category}</p>
      <p>{subscription.isActive}</p>
    </div>
  )
}

export default AccountPageSubscription;