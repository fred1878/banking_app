import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"

const NewPaymentPopup = ({ isShowing, toggle, statePayment, setStatePayment, postPayment }) => {
    const [startDate, setStartDate] = useState(new Date());


    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedPayment = {...statePayment}
        console.log(event.target.value)
        copiedPayment[propertyName] = event.target.value;
        setStatePayment(copiedPayment)
        //console.log(JSON.stringify(copiedPayment))
    }

    const handleDateChange = (event) => {
        let copiedPayment = {...statePayment}
        //console.log(JSON.stringify(event).substring(1,11))
        copiedPayment.date = JSON.stringify(event).substring(1,11)
        setStatePayment(copiedPayment)
        console.log(statePayment)
    }

    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(statePayment, event.target)
      postPayment(statePayment)        
      toggle()
    }

    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className="modal-overlay" />
                <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="modal">
                        <div className="modal-header">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h3>Add New Payment</h3>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor='payment-name'>Payment Name</label>
                            <input type='text' id='payment-name' name='name' onChange={handleChange}/><br />
                            <label htmlFor='payment-price'>Price</label>
                            <input type='text' id='payment-price' name='amount' onChange={handleChange}/><br />

                            <label htmlFor='payment-type-select'>Type</label>
                            <select id="payment-type-select" name='category' onChange={handleChange}>
                                <option>Select One:</option>
                                <option value={'BILLS'}>Bills</option>
                                <option value={'ENTERTAINMENT'}>Entertainment</option>
                                <option value={'EATING_OUT'}>Eating Out</option>
                                <option value={'SHOPPING'}>Shopping</option>
                                <option value={'TRANSPORT'}>Transport</option>
                                <option value={'HEALTH'}>Health</option>
                                <option value={'CHARITY'}>Charity</option>
                                <option value={'OTHER'}>Other</option>
                            </select>

                            <DatePicker name="date"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                onSelect={handleDateChange}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select" 
                            />
                             <button type='submit'>Add Payment</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>, document.body

        ) : null
    )

}

export default NewPaymentPopup