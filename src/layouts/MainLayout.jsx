import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { UserProvider } from '../contexts/UserContext';

export const MainLayout = () => {

    return (
        <>
            <Header />
            <UserProvider>
                <Outlet />
            </UserProvider>
        </>
    )
}