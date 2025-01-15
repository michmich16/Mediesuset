import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink to="/">
                        FORSIDE
                    </NavLink>
                </li>
                <li className={style.dropdown}>
                    <NavLink to="/events">
                        EVENTS
                    </NavLink>
                    <ul className={style.dropdownMenu}>
                        <li>
                            <NavLink to="/events/lineup">
                                LINE-UP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/events/program">
                                PROGRAM
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/camps">
                        CAMPS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tickets">
                        BILLETTER
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/info">
                        PRAKTISK INFO
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        LOGIN
                    </NavLink>
                </li>
                <li>
                    <button>search</button>
                </li>
            </ul>
        </nav>
    );
};
