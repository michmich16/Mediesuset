import { Hero } from '../components/Hero/Hero';
import { useContext, useState } from 'react';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { UserContext } from '../contexts/userContext';
import { InputField } from '../components/InputField/InputField';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { FaAt } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import style from '../styles/loginPage.module.scss';


export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loginMessage, setLoginMessage] = useState();

    const { setUserData } = useContext(UserContext);
    console.log(email, password);

    function submitData() {

        const body = new URLSearchParams();
        body.append(`username`, email);
        body.append('password', password);

        const options = {
            method: "POST",
            body: body,
        };

        fetch('https://api.mediehuset.net/token', options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data);
                    setLoginMessage(`Du er nu logget ind`);
                } else {
                    setLoginMessage('Forkert brugernavn eller password');
                }
            })
            .catch((err) => setError(err));
    }

    return (
        <>
            <Hero img="camp2-foto-colourbox.jpg" imgPosition={'100% 30%'} />
            <MarginContainer>
                <GridContainer columns={1} gap={"1rem"}>
                    <SectionTitle title={"LOGIN"} text={loginMessage} />
                    <form>
                    <p style={{ textAlign: "center" }}>Indtast login oplysninger</p>
                        <div className={style.inputStyle}>
                            <FaAt />
                            <InputField
                                type="email"
                                placeholder="Indtast din mail.."
                                name="Email"
                                id="emailField"
                                action={setEmail}
                            />
                        </div>
                        <div className={style.inputStyle}>
                            <BiSolidLock />
                            <InputField
                                type="password"
                                placeholder={"Indtast dit password..."}
                                name="Password"
                                id="passwordField"
                                action={setPassword}
                            />
                        </div>
                    </form>
                    <button className={style.loginBtnStyle} onClick={() => submitData()}>LOGIN</button>
                </GridContainer>
            </MarginContainer>

        </>
    );
};
