import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react";
import AccountPageContainer from "./AccountPageContainer";

const AccountContainer = ({accountInfo}) => {

    const navigate = useNavigate()
    const [account, setAccount] = useState([]);

    const data = accountInfo.accounts

    const handleClick = (event) => {
        console.log(event.target.value)
        
        navigate('/accountholder/accountpage',{replace: true})
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Type</th>
                        
                        <th>Balance</th>
                        <th>Debit/Credit</th>
                    </tr>
                    {data.map((val,key) => {
                        return(
                            <tr key={key} onClick={handleClick}>
                                <td>{val.accountNumber}</td>
                                <td>{val.accountType}</td>
                                <td>{new Intl.NumberFormat('en-UK', {style: 'currency',currency: 'GBP'}).format(val.balance)}</td>
                                <td>{val.debit ? 'Debit' : 'Credit'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Routes>
                <Route path='/accountpage' element={<AccountPageContainer account={account} setAccount={setAccount}/>} /> 
            </Routes>
        </>
    )

}

export default AccountContainer;