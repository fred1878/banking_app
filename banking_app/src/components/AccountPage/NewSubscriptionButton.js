import NewSubPopup from "./NewSubPopup";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate()

  const postSubscription = (newSubscription) => {
    fetch("http://localhost:8080/subscriptions", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSubscription)
    })
      .then(() => {
        let acno = account.accountNumber;
        navigate('/accountpage/'+acno,{replace: true})
        console.log(account);
        setAccount(account);
      })
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