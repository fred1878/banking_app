import {useNavigate} from "react-router-dom"
import {useEffect} from 'react';

const AccountContainer = ({accountInfo,account,setAccount,deleteAccount,setAccountInfo}) => {

    const navigate = useNavigate()

    const accounts = accountInfo.accounts

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

    const handleDeleteAccount = (event) => {
        deleteAccount(event.target.value)
    }

    useEffect(() => {
        fetch("http://localhost:8080/account_holders/name=" + accountInfo.name)
        .then(response => response.json())
        .then(data => {
            setAccountInfo(data[0])
    })
}, [accountInfo])

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Debit/Credit</th>
                        <th>Delete Account</th>
                    </tr>
                    {accounts.map((val,key) => {
                        return(
                            <tr key={key}>
                                <td id="accountNumber" onClick={handleClick}>{val.accountNumber}</td>
                                <td>{val.accountType}</td>
                                <td>{new Intl.NumberFormat('en-UK', {style: 'currency',currency: 'GBP'}).format(val.balance)}</td>
                                <td>{val.debit ? 'Debit' : 'Credit'}</td>
                                <td><button value={val.id} onClick={handleDeleteAccount}>Delete Account</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default AccountContainer;