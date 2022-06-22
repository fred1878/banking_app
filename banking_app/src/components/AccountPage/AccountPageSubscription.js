import Moment from "react-moment";

const AccountPageSubscription = ({subscription}) => {
  const formatBalance = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })



  //formatBalance.format(payment.price)
  return(
    <div className="subscription-item"
         style = {{
          backgroundColor: subscription.is_active ? "rgb(255,255,255)"  :  "rgba(255, 255, 255, 0.3)" ,
          color: subscription.is_active ? "rgb(0,0,0)" : "rgba(0,0,0,0.5)",
         }}>
      <div id="subscription-left">
        <h4>{subscription.name}</h4>
        <p>{subscription.category.split("_").join(" ")}</p>
      </div>
      <div id="subscription-right">
        <p>{formatBalance.format(subscription.price)}</p>
        <p>{<Moment format="D MMM YYYY">{subscription.date_of_payment}</Moment>}</p>
      </div>
    </div>
  // {<Moment format="DD/MM/YY">{subscription.date_of_payment}</Moment>}
  // .split("_").join(" ")
    
  )
}

export default AccountPageSubscription;