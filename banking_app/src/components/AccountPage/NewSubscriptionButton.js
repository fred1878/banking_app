import NewSubPopup from "./NewSubPopup";
import useModal from "../../hooks/useModal";
import { useState } from "react";

const NewSubscriptionButton = ({accountId,account, setAccount}) => {
  const { isShowing, toggle } = useModal();
  const [stateSub, setStateSub] = useState({
    name: '',
    category: '',
    price: 0,
    date_of_payment: '',
    is_active: true,
    account: {id:accountId},
})
  const postSubscription = (newSubscription) => {
    fetch("http://localhost:8080/subscriptions", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSubscription)
    })
      .then(setAccount(account))
    console.log("new subscription added")
  }


  return(
    <>
      <div className='new-expense-button' onClick={toggle}>
        <p>+ Add Subscription</p> 
      </div> 
      <NewSubPopup isShowing={isShowing}
                        toggle={toggle}
                        stateSub={stateSub}
                        setStateSub={setStateSub}
                        postSubscription={postSubscription}/>
    </>
  )

}

export default NewSubscriptionButton;