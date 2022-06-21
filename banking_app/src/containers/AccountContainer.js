import { Routes, Route, useNavigate} from "react-router-dom"
import { useState } from "react";
import AccountPageContainer from "./AccountPageContainer";

const AccountContainer = ({accountInfo,account,setAccount}) => {

    const navigate = useNavigate()

    const data = accountInfo.accounts

    const handleClick = (event) => {
        let click = `${event.target.innerText}`
        let acno = ''
        let acc = ''
        for(let i = 0; i < accountInfo.accounts.length;i++){
            acno = accountInfo.accounts[i].accountNumber
            if(acno == click)acc = accountInfo.accounts[i]
        }
        setAccount(acc)
        navigate(`/accountpage/${click}`,{replace: false})
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
                            <tr key={key}>
                                <td id="accountNumber" onClick={handleClick}>{val.accountNumber}</td>
                                <td>{val.accountType}</td>
                                <td>{new Intl.NumberFormat('en-UK', {style: 'currency',currency: 'GBP'}).format(val.balance)}</td>
                                <td>{val.debit ? 'Debit' : 'Credit'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default AccountContainer;