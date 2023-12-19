'use client'

import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface IUserContext{
    username: string;
    handleChangeUser: (username: string) => void;
}

const UserContext = createContext({} as IUserContext);

export const useUserContext = () => {
    return useContext(UserContext);
}


export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const usernameLocalStorage = localStorage.getItem('username');
        if(usernameLocalStorage) setUsername(usernameLocalStorage);
    }, [])

    const handleChangeUser = useCallback((name: string) => {
        setUsername(name);
        localStorage.setItem('username', name);
    }, []);

    return(
        <UserContext.Provider value={{username, handleChangeUser}}>
            {children}
        </UserContext.Provider>
    )
}