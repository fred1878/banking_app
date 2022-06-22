import NewSubPopup from "./NewSubPopup";
import useModal from "../../hooks/useModal";

const NewSubscriptionButton = () => {
  const { isShowing, toggle } = useModal();

  const handleNewSubscription = (event) => {
    event.preventDefault();
    console.log("new subscription added")
  }

  return(
    <>
      <div className='new-expense-button' onClick={toggle}>
        {/* <details> 
          <summary>+ Add Subscription</summary>
          Enter details here
          Hellooo<br/>
          ahaaha
          feqadas
        </details> */}
          <p>+ Add Subscription</p>
         
      </div> 
      <NewSubPopup isShowing={isShowing}
                        toggle={toggle}/>
    </>
  )

}

export default NewSubscriptionButton;