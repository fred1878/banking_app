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
    <>
      <h3></h3>
      <div id='payment-list'>{paymentComponents}</div>
    </>
  )
}
  
export default AccountPagePaymentList;