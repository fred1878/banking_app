

const AccountPagePayment = ({payment}) => {
  
    return(
      <div className="payment-item">
        <h4>{payment.name}</h4>
        <p>{payment.amount}</p>
        <p>{payment.date}</p>
        <p>{payment.category}</p>
      </div>
    )
  }
  
  export default AccountPagePayment;