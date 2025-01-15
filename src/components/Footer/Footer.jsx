import React, { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import HancockLogo from "../../assets/images/hancock logo.png";
import style from "./Footer.module.scss";

export const Footer = () => {
    const [sectionImage, setSectionImage] = useState("");

    useEffect(() => {
        // Fetch the image and set the state
        const fetchImage = async () => {
            try {
                const imageUrl = "https://api.mediehuset.net/images/mediesuset/crowd1-foto-colourbox.jpg";
                setSectionImage(imageUrl);
            } catch (error) {
                console.error("Failed to fetch the image:", error);
            }
        };

        fetchImage();
    }, []);

    return (
        <footer className={style.footerStyle}>
            <section>
                {/* Dynamically set the fetched image */}
                <img className={style.footerImage} src={sectionImage} alt="Crowd" />
                <span></span>
                <div className={style.subscribtionStyle}>
                    <div className={style.sectionSubscription}>
                        <h4>TILMELD NYHEDSBREV</h4>
                        <p>Får den seneste nyheder sendt til din indbakke</p>
                        <div className={style.mailInputStyle}>
                            <IoMailOutline />
                            <input type="text" placeholder="Din email" />
                            <button>TILMELD</button>
                        </div>
                    </div>
                    <img className={style.hancockLogo} src={HancockLogo} alt="Hancock" />
                </div>
            </section>
        </footer>
    );
};
