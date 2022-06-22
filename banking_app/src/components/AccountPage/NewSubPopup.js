
import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"

const NewSubPopup = ({ isShowing, toggle }) => {
    const [startDate, setStartDate] = useState(new Date());

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
                        <h3>Add New Subscription</h3>
                        <form>
                            <label htmlFor='subscription-name'>Subscription Name</label>
                            <input type='text' id='subscription-name' /><br />
                            <label htmlFor='subscription-price'>Price</label>
                            <input type='text' id='subscription-price' /><br />

                            <label htmlFor='subscription-type-select'>Type</label>
                            <select id="subscription-type-select">
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

                            <DatePicker name="dob"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                // onSelect={handleDateChange}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select" 
                            />
                             <button type='submit'>Add Subscription</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>, document.body

        ) : null
    )

}

export default NewSubPopup

