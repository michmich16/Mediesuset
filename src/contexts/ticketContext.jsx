import { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

export const useTicket = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    return (
        <TicketContext.Provider value={{ selectedTicket, setSelectedTicket }}>
            {children}
        </TicketContext.Provider>
    );
};
