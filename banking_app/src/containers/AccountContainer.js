import AccountHolder from "../components/AccountHolder";
import AccountDetails from "../components/AccountDetails";
import { useEffect, useState } from "react";

const AccountContainer = () => {
    const [account, setAccount] = useState([])

    useEffect(() => {
        // endpoint url below?
        fetch("http://localhost:8080/")
        .then(response => response.json())
        .then(data => setAccount(data))
        
    }, [])

    return (
        <>
        </>
    )

}

