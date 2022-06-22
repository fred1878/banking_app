

const NewPaymentButton = ({newPayment}) => {
  
  const handleNewPayment = (event) => {
    event.preventDefault();
    console.log("new payment added")
    newPayment();
  }

  return(
    <div className='new-expense-button' >
      <details> 
        <summary>+ Add Payment</summary>
        Enter details here
        Hellooo<br/>
        ahaaha
        feqadas
      </details>
    </div>
  )

}

export default NewPaymentButton;
