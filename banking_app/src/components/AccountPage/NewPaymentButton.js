import useModal from "../../hooks/useModal";
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import NewPaymentPopup from './NewPaymentPopup'


const NewPaymentButton = ({setAccount, account, accountId}) => {
  const { isShowing, toggle } = useModal();
  const [statePayment, setStatePayment] = useState({
    name: '',
    category: '',
    amount: 0,
    date: '',
    account: {id:accountId},
  })   

  const postPayment = (newPayment) => {
    fetch("http://localhost:8080/payments", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPayment)
    })
      .then(() => {
        let acno = account.accountNumber;
        //navigate('/accountpage/'+acno,{replace: true})
        console.log(account);
        setAccount(account);
      })
  }

  return(
    <>
      <div className='new-expense-button' onClick={toggle}>
        <p>+ Add Payment</p> 
      </div> 
      <NewPaymentPopup isShowing={isShowing}
                        toggle={toggle}
                        statePayment={statePayment}
                        setStatePayment={setStatePayment}
                        postPayment={postPayment}/>
    </>
  )


}

export default NewPaymentButton;
