import { Link } from "react-router-dom";
import classes from "../styles/footer.module.css"

const Footer = () => {
    return (<>
        <section className={classes.footersec}>
            <p className={classes.paragraph}>  Telefon:
                0265225578 - 0747020495 </p>
            <p className={classes.paragraph}>
                Adresa: Tîrgu Mureș, Str. Horea Nr.25, jud. Mureș, România
            </p>
            <p className={classes.paragraph}>
                © 2024. All rights reserved - <Link to="https://www.linkedin.com/in/santi-mora/" target="_blank">  Santi Mora </Link></p>
        </section>
    </>);
}

export default Footer;