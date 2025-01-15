import style from "./Header.module.scss";
import { Navigation } from "../Navigation/Navigation";
import Logo from "../../assets/images/logo.png";

export const Header = () => {
    return (

        <div className={style.grid}>
            <header className={style.header}>
                <img src={Logo} alt="logo" className={style.logo} />
                <div>
                    <h3>4 - 7. juli 2022</h3>
                </div>
            </header>
            <Navigation />
        </div>

    )
}