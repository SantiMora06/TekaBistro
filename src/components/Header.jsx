import classes from "../styles/home.module.css"

const Header = () => {
    return (<><h1 className={classes.h1}>Pizzeria Tranzit & Pub </h1>
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
        </section></>);
}

export default Header;