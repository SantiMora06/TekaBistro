import classes from "../styles/home.module.css"
import moto from "../assets/moto.png"
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <section className={classes.container}>
                <section className={classes.intro}>
                    <section className={classes.photo}>
                        <img src={moto} alt="Harley Dadivson" className={classes.photo1} />
                        <section className={classes.para}>
                            <Link to="/despre-noi" >  <p className={classes.pg}> Despre noi</p></Link>
                            <Link to="/meniu" ><p className={classes.pg}> Meniu</p></Link>
                            <Link to="/galerie"><p className={classes.pg}> Galerie</p></Link>
                            <Link to="/contact"><p className={classes.pg}> Contact</p></Link>
                        </section>
                    </section>
                </section>


            </section>

        </>
    );
}

export default HomePage;