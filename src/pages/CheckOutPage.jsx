import { useTicket } from '../contexts/TicketContext';
import { CheckOut } from '../components/CheckOut/CheckOut';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { Hero } from '../components/Hero/Hero';
import { FaAt } from 'react-icons/fa';
import { InputField } from '../components/InputField/InputField';
import { BiSolidLock } from 'react-icons/bi';
import { FaUser } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import style from '../styles/checkoutPage.module.scss';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext';

export const CheckOutPage = () => {
    const { selectedTicket } = useTicket();

    if (!selectedTicket) {
        return <p>Du har ikke valgt et bille. Klik <NavLink to="/tickets">her</NavLink> for at se vores billetter</p>;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [postal, setPostal] = useState('');
    const [city, setCity] = useState('');
    const [campId, setCampId] = useState('');
    const [error, setError] = useState();
    const [orderMessage, setOrderMessage] = useState('');

    const { setUserData } = useContext(UserContext);

    function submitData(event) {
        event.preventDefault();

        if (!email || !password || !confirmPassword || !name || !address || !postal || !city || !campId) {
            setError(new Error('Please fill in all fields'));
            return;
        }

        if (password !== confirmPassword) {
            setError(new Error('Passwords do not match'));
            return;
        }

        const body = new URLSearchParams();
        body.append('username', email);
        body.append('password', password);
        body.append('confirmPassword', confirmPassword);
        body.append('name', name);
        body.append('adresse', address);
        body.append('postnummer', postal);
        body.append('bynavn', city);

        const options = {
            method: 'POST',
            body: body,
        };

        fetch('https://api.mediehuset.net/mediesuset/usertickets', options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data);
                    setOrderMessage('Din ordre er nu sendt');
                } else {
                    setOrderMessage('Hov, noget gik galt. Prøv igen');
                }
            })
            .catch((err) => setError(err));
    }

    return (
        <>
            <Hero img="crowd1-foto-colourbox.jpg" imgPosition={'100% 80%'} />
            <SectionTitle title="BILLETER" />
            <MarginContainer>
                <CheckOut
                    ticket={selectedTicket.name}
                    ticketInfo={`${selectedTicket.description}`}
                    unitPrice={`${selectedTicket.price} DKK`}
                    quantity={1}
                    sumPrice={`${selectedTicket.price} DKK`}
                />
                <form onSubmit={submitData}>
                    <GridContainer columns={2} gap={"3rem"}>
                        <section>
                            <label>Vælg Camp: </label>
                            <select name="camp_id" value={campId} onChange={(e) => setCampId(e.target.value)}>
                                <option value="">- - -</option>
                                <option value="Camp Colorit">Camp Colorit</option>
                                <option value="Camp Kultunaut">Camp Kultunaut</option>
                                <option value="Camp De Luxe">Camp De Luxe</option>
                            </select>
                            <div className={style.inputStyle}>
                                <FaAt />
                                <InputField
                                    type="email"
                                    placeholder="Indtast din mail"
                                    name="Email"
                                    id="emailField"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <BiSolidLock />
                                <InputField
                                    type="password"
                                    placeholder={"Indtast dit password"}
                                    name="Password"
                                    id="passwordField"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <BiSolidLock />
                                <InputField
                                    type="password"
                                    placeholder={"Gentag adgangskode"}
                                    name="Password"
                                    id="confirmPasswordField"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <FaUser />
                                <InputField
                                    type="text"
                                    placeholder={"Indtast dit navn"}
                                    name="name"
                                    id="nameField"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <FaRoad />
                                <InputField
                                    type="text"
                                    placeholder={"Indtast din adresse"}
                                    name="address"
                                    id="addressField"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <FaLocationDot />
                                <InputField
                                    type="text"
                                    placeholder={"Indtast dit postnummer"}
                                    name="postal"
                                    id="postalField"
                                    value={postal}
                                    onChange={(e) => setPostal(e.target.value)}
                                />
                            </div>
                            <div className={style.inputStyle}>
                                <FaCity />
                                <InputField
                                    type="text"
                                    placeholder={"Indtast dit bynavn"}
                                    name="city"
                                    id="cityField"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </section>
                        <fieldset>
                            <legend>Vælg forsendelsesmetode</legend>

                            <input type="radio" id="1" name="forsendelsesmetode" value="s" />
                            <label>Jeg ønsker billetterne tilsendt</label><br />

                            <input type="radio" id="2" name="forsendelsesmetode" value="p" />
                            <label>Jeg udskriver billeterne selv</label><br />
                        </fieldset>
                    </GridContainer>
                    {error && <p className={style.errorMessage}>Error: {error.message}</p>}
                    {orderMessage && <p className={style.successMessage}>{orderMessage}</p>}
                    <div className={style.sendBtnContainer}>
                        <button onClick={() => submitData()} className={style.sendBtnStyle}>SEND</button>
                    </div>
                </form>
            </MarginContainer>
        </>
    );
};
