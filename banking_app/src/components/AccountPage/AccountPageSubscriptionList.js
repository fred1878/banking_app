
import AccountPageSubscription from './AccountPageSubscription'
import NewSubscriptionButton from './NewSubscriptionButton'

const AccountPageSubscriptionList = ({account, setAccount}) => {

  const subscriptions = account.subscriptions;
  const subscriptionComponents = subscriptions.map(subscription => {
    return(
      <AccountPageSubscription
        key={subscription.id}
        subscription={subscription}/>

    )
  });

  return(
    <div id="subscriptions-section">
      <h3>Subscriptions</h3>
      <div id='subscription-list'>
        {subscriptionComponents}
        <NewSubscriptionButton accountId={account.id} account={account} setAccount={setAccount}/>
      </div>
    </div>
  )
}
  
export default AccountPageSubscriptionList;