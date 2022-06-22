
import AccountPageSubscription from './AccountPageSubscription'
import NewSubscriptionButton from './NewSubscriptionButton'

const AccountPageSubscriptionList = ({account}) => {

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
        <NewSubscriptionButton />
      </div>
    </div>
  )
}
  
export default AccountPageSubscriptionList;