import AccountPagePayment from './AccountPagePayment'

const AccountPagePaymentList = ({account}) => {

  const payments = account.payments;
  const paymentComponents = payments.map(payment => {
    return(
      <AccountPagePayment
        key={payment.id}
        payment={payment}/>
    )
  });

  return(
    <div id="payments-section">
      <h3>Payments</h3>
      <div id='payment-list'>{paymentComponents}</div>
    </div>
  )
}
  
export default AccountPagePaymentList;