import AccountPagePayment from './AccountPagePayment'
import NewPaymentButton from './NewPaymentButton';

const AccountPagePaymentList = ({account, setAccount, newPayment}) => {

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
      <div id='payment-list'>
        {paymentComponents}
        <NewPaymentButton accountId={account.id} account={account} setAccount={setAccount}/>
      </div>
    </div>
  )
}
  
export default AccountPagePaymentList;