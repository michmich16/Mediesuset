import style from './Hero.module.scss';

// hero images crowd3-foto-colourbox.jpg, camp2-foto-colourbox.jpg, crowd1-foto-colourbox.jpg

export const Hero = ({ img, imgPosition }) => {
    const baseUrl = "https://api.mediehuset.net/images/mediesuset";
    const inlineStyle = {
        objectPosition : imgPosition,
    }

    return (
        <div className={style.heroContainer}>
            <img
                src={`${baseUrl}/${img}`}
                alt="hero"
                className={style.heroImage}
                style={inlineStyle}
            />
        </div>
    );
};