import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        if (!userData) {
            if (sessionStorage.getItem("userData")) {
                setUserData(JSON.parse(sessionStorage.getItem("userData")));
            }
        }
        if (userData?.access_token) {
            sessionStorage.setItem("userData", JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    )
}