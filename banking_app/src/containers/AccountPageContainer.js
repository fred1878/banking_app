import AccountDetails from "../components/AccountPage/AccountDetails";
import AccountPagePaymentList from "../components/AccountPage/AccountPagePaymentList";
import AccountPageSubscriptionList from "../components/AccountPage/AccountPageSubscriptionList";
import { useState, useEffect } from "react";

const AccountPageContainer = ({account, setAccount}) => {
    
  const [subscriptions, setSubscriptions] = useState([])
  const [payments, setPayments] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/accounts/" + account.id)
      .then(response => response.json())
      .then(data => {
        setAccount(data);
      })
  }, [account])

  

  const newPayment = () => {
    fetch("http://localhost:8080/payments")
  }
  // useEffect(() => {
  //   fetch("http://localhost:8080/accounts/" + account.id)
  //     .then(response => response.json())
  //     .then(data => setActualAccount())
  // }, [account])

  return(
    <>
      <AccountDetails account={account} />
      <div className="account-lists">
        <AccountPageSubscriptionList account={account} setAccount={setAccount}/>
        <AccountPagePaymentList account={account} setAccount={setAccount}/>
      </div>
    </>
  )
}

export default AccountPageContainer;