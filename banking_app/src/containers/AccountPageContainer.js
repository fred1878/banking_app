import AccountDetails from "../components/AccountPage/AccountDetails";
import AccountPagePaymentList from "../components/AccountPage/AccountPagePaymentList";
import AccountPageSubscriptionList from "../components/AccountPage/AccountPageSubscriptionList";
import { useState, useEffect } from 'react';

const AccountPageContainer = ({account, setAccount}) => {
  

  // useEffect(() => {
  //   fetch("http://localhost:8080/accounts/" + testAccountId)
  //     .then(response => response.json())
  //     .then(data => {
  //       setAccount(data);
  //     })
      
  // }, [testAccountId])

  return(
    <>
      <AccountDetails account={account}/>
      <div className="account-lists">
        <AccountPageSubscriptionList account={account}/>
        <AccountPagePaymentList account={account}/>
      </div>
    </>
  )
}

export default AccountPageContainer;