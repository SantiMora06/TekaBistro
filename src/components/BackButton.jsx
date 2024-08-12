import { useLocation, useNavigate } from "react-router-dom";
import classes from "../styles/button.module.css"

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const onClickHome = () => {
        navigate("/")
    }

    const onClickMeniu = () => {
        navigate("/meniu")
    }

    const onClickDespre = () => {
        navigate("/despre-noi")
    }

    const onClickGalerie = () => {
        navigate("/galerie")
    }

    const onClickContact = () => {
        navigate("/contact")
    }

    return (<>
        <section className={classes.container}>
            {currentPath !== "/" && <button className={classes.button} onClick={onClickHome}> Home </button>}
            {currentPath !== "/meniu" && <button className={classes.button} onClick={onClickMeniu} >Meniu</button>}
            {currentPath !== "/despre-noi" && <button className={classes.button} onClick={onClickDespre}> Despre noi</button>}
            {currentPath !== "/galerie" && <button className={classes.button} onClick={onClickGalerie}> Galerie</button>}
            {currentPath !== "/contact" && <button className={classes.button} onClick={onClickContact}>Contact</button>}

        </section>
    </>);
}

export default BackButton;