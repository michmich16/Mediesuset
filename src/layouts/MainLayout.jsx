import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { UserProvider } from '../contexts/userContext';
import { TicketProvider } from "../contexts/ticketContext";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {

    return (
        <>
            <Header />
            <UserProvider>
                <TicketProvider>
                    <Outlet />
                </TicketProvider>
            </UserProvider>
            <Footer />
        </>
    )
}