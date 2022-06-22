import NewSubPopup from "./NewSubPopup";
import useModal from "../../hooks/useModal";
import { useState } from "react";

const NewSubscriptionButton = () => {
  const { isShowing, toggle } = useModal();
  const [stateSub, setStateSub] = useState({
    name: '',
    category: '',
    price: '',
    date_of_payment: '',
    is_active: true,
    account: '',
})
  const handleNewSubscription = (event) => {
    event.preventDefault();

    console.log("new subscription added")
  }


  return(
    <>
      <div className='new-expense-button' onClick={toggle}>
        <p>+ Add Subscription</p> 
      </div> 
      <NewSubPopup isShowing={isShowing}
                        toggle={toggle}/>
    </>
  )

}

export default NewSubscriptionButton;