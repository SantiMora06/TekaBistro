import { useNavigate } from "react-router-dom";
import classes from "../styles/button.module.css"

const BackButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/")
    }

    return (<>
        <section className={classes.container}>
            <button className={classes.button} onClick={onClick}> Back </button>
        </section>
    </>);
}

export default BackButton;