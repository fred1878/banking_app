import {useNavigate} from "react-router-dom"
import {useEffect} from 'react';

const AccountContainer = ({accountInfo,account,setAccount}) => {

    const navigate = useNavigate()

    const accounts = accountInfo.accounts

    const accountNumberList = accounts.map(account => account.accountNumber);

    const handleClick = (event) => {
        let click = `${event.target.innerText}`
        let acno = ''
        let acc = ''
        for(let i = 0; i < accountInfo.accounts.length;i++){
            acno = accountInfo.accounts[i].accountNumber
            if(acno === click)acc = accountInfo.accounts[i]
        }
        fetch('http://localhost:8080/accounts/' + acc.id)
          .then(response => response.json())
          //.then(data => console.log(data))
          .then(data => {
            setAccount(data);
            navigate(`/accountpage/${click}`,{replace: false});
        })
    }
    // useEffect(()=>{
    //     fetch("http://localhost:8080/accounts/" + account.id)
    //         .then(response => response.json())
    //         .then(data => setAccount(data))
    // },[account])


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
                    {accounts.map((val,key) => {
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