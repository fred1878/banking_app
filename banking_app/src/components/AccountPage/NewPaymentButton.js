

const NewPaymentButton = () => {
  
  const handleNewPayment = (event) => {
    event.preventDefault();
    console.log("new payment added")
  }

  return(
    <div className='new-expense-button' onClick={handleNewPayment}>
        <p>+ Add Payment</p> 
    </div>
  )

}

export default NewPaymentButton;