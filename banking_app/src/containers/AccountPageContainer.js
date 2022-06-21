import AccountDetails from "../components/AccountPage/AccountDetails";
import AccountPagePaymentList from "../components/AccountPage/AccountPagePaymentList";
import AccountPageSubscriptionList from "../components/AccountPage/AccountPageSubscriptionList";
import { useState, useEffect } from "react";

const AccountPageContainer = ({account, setAccount}) => {
  
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const [actualAccount, setActualAccount] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/accounts/" + account.id)
  //     .then(response => response.json())
  //     .then(data => setActualAccount())
  // }, [account])

  return(
    <>
      <AccountDetails account={account} />
      <div className="account-lists">
        <AccountPageSubscriptionList account={account}/>
        <AccountPagePaymentList account={account}/>
      </div>
    </>
  )
}

export default AccountPageContainer;