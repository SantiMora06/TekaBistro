import classes from "../styles/home.module.css"
import moto from "../assets/moto.png"
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <h1 className={classes.h1}>Pizzeria Tranzit & Pub </h1>
            <section className={classes.prehead}>
                <p className={classes.head}><b>Orar:</b><br />
                    <b>Lunie-Vineri:</b> 10:00 - 23:30 <br />
                    <b>Sambata-Duminica: </b> 12:00-23:00 <br /> <b>Ultima Comandă: </b>
                    23:30
                </p>

                <p className={classes.head}>
                    <b>Comandă minimă:</b><br />
                    <b>În Târgu Mureș: </b>30 RON <br /> <b>În afara orașului:</b> 70 RON
                </p>
            </section>
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