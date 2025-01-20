import { Hero } from '../components/Hero/Hero';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { GridContainer } from '../components/GridContainer/GridContainer';
import map from '../assets/images/mediesuset-map.jpg';
import style from '../styles/infoPage.module.scss';

export const InfoPage = () => {
    return (
        <>
            <Hero img="crowd3-foto-colourbox.jpg" imgPosition={'100% 80%'} />
            <SectionTitle title={"PRAKTISK INFO"} />
            <MarginContainer>
                <GridContainer columns={2}>
                    <div className={style.infoText}>
                        <p>
                            Adresse: Øster Uttrupvej 1
                        </p>
                        <p>
                            Aalborg 9000
                        </p>
                    </div>
                    <div className={style.infoImg}>
                    <img src={map} alt="map" />
                    </div>
                </GridContainer>
            </MarginContainer>

        </>
    );
};
