import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

const CreateAccountHolder = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo, postAccountHolder}) => {

const navigate = useNavigate();
const [startDate, setStartDate] = useState(new Date());
const [stateAccountHolder, setStateAccountHolder] = useState({
    name: '',
    dob: '',
    address: '',
    employmentStatus: '',
    accounts: []
})

const handleChange = (event) => {
    let propertyName = event.target.name
    let copiedAccountHolder = {...stateAccountHolder}
    copiedAccountHolder[propertyName] = event.target.value
    console.log(event.target.value)
    setStateAccountHolder(copiedAccountHolder)
}

const handleDateChange = (event) => {
    let copiedAccountHolder = {...stateAccountHolder}
    copiedAccountHolder.dob = JSON.stringify(event).substring(1,11)
    setStateAccountHolder(copiedAccountHolder)
}

const handleEmployment = (event) => {
    let copiedAccountHolder = {...stateAccountHolder}
    copiedAccountHolder.employmentStatus = event.target.value
    setStateAccountHolder(copiedAccountHolder)
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true)
    setAccountInfo(stateAccountHolder)
    postAccountHolder(stateAccountHolder)
    navigate('/accountholder', {replace: true})
}

return(
<>
<div className="LoginContainer">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleFormSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
  			        <input type="text" className="login__input" placeholder="Enter Name" name="name" value={stateAccountHolder.name} onChange={handleChange}/>
	  			</div>
                {/* <div className="login__field">
					<i className="login__icon fas fa-user"></i>
  					<input type="text" className="login__input" placeholder="Date of Birth YYYY-MM-DD" name="dob" value={stateAccountHolder.dob} onChange={handleChange}/>
	  			</div> */}
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
  					<input type="text" className="login__input" placeholder="Address" name="address" value={stateAccountHolder.address} onChange={handleChange}/>
	  			</div>
                <div>
                <DatePicker name="dob"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                onSelect={handleDateChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                />
                </div>
                <div>
                    <label htmlFor="employmentStatus">Choose your Employment Status:</label>
                    <select id="employmentStatus" onChange={handleEmployment}>
                        <option>Select One:</option>
                        <option value={'FULL_TIME'}>Full Time</option>
                        <option value={'PART_TIME'}>Part Time</option>
                        <option value={'UNEMPLOYED'}>Unemployed</option>
                        <option value={'SELF_EMPLOYED'}>Self Employed</option>
                        <option value={'STUDENT'}>Student</option>
                        <option value={'OTHER'}>Other</option>
                    </select>
                </div>
		  		<button className="button login__submit" type="submit">
			  		<span className="button__text">Sign Up Now</span>
				  	<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		    <div className="screen__background">
		    	<span className="screen__background__shape screen__background__shape4"></span>
		  	    <span className="screen__background__shape screen__background__shape3"></span>		
		    	<span className="screen__background__shape screen__background__shape2"></span>
		    	<span className="screen__background__shape screen__background__shape1"></span>
		    </div>
	    </div>
    </div>
</>

)
}

export default CreateAccountHolder;