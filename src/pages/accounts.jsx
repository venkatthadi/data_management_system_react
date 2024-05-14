import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { AccountsContext } from "../utils/contexts/accountsContext";
import { AccountContainer } from "../components/AccountContainer";
import { useFetchAccounts } from "../utils/hooks/accounts/useFetchAccounts";

export function AccountsPage() {
    
    // const [ accounts, setAccounts ] = useState([]);
    // const { state } = useLocation();
    // const accountsData = useContext(AccountsContext);
    // useEffect(() => {
    //     if(state && state.accounts) {
    //         setAccounts(state.accounts);
    //     }
    // })

    const { accounts, loading1, errors1 } = useFetchAccounts();
    const [ accountsData, setAccountsData] = useState([]);
    // const { account, loading2, errors2 } = useFetchAccount(1);
    // const [ accountData, setAccountData ] = useState();
    useEffect(() => {
        if(!loading1 && !errors1 && accounts) {
            setAccountsData(accounts);
            // navigate("/users");
        }
    }, [loading1, errors1, accounts]);


    return(
        <> 
            <Header />
            <div className="container">
                {/* { accountsData.map((currentAccount) => (<div key={currentAccount.id}>{currentAccount.name}</div>)) } */}
                <AccountsContext.Provider value={ accountsData }>
                    <div className="container">
                        {loading1 ? "loading..." : <AccountContainer />}
                    </div>
                </AccountsContext.Provider>
            </div>
        </>
    );
}