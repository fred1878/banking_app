import Moment from "react-moment";


const AccountPagePayment = ({ payment }) => {

  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })

  return (
    <div className="payment-item">
      <div id='payment-left'>
        <h4>{payment.name}</h4>
        <p>{payment.category}</p>
      </div>
      <div id='payment-right'>
        <p>{formatBalance.format(payment.amount)}</p>
        <p> {<Moment format="D MMM YYYY">{payment.date}</Moment>}</p>
      </div>
    </div>
  )
}
// {<Moment format="DD/MM/YY">{payment.date}</Moment>}


export default AccountPagePayment;