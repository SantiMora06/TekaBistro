import BackButton from "../components/BackButton";
import classes from "../styles/desprenoi.module.css";
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpeg"
import p3 from "../assets/p3.jpeg"

const DespreNoi = () => {
    return (<>

        <h1>Despre noi</h1>
        <section className={classes.section}>
            <section className={classes.subsection}>
                <p className={classes.p}>
                    Pizzeria Tranzit Pub este locul preferat de intâlnire a mureșenilor de peste 15 ani de când a fost inființat.
                    Deschis inițial ca și pub în 15 Martie 1996, a devenit locul preferat al clubului Plum Brandy Club din Tîrgu Mureș.
                </p>
                <img className={classes.image} src={p1} alt="Restaurant" />
            </section>
            <section className={classes.subsection}>
                <p className={classes.p}>
                    În din 2004 octombrie datorită cererii crescute am deschis și restaurantul din față. După o creștere și mai mare în anii precedenți am deschis un spațiu nou amenajat în mansardă oferind o atmosferă specială pentru discuții de timp liber sau business.
                </p>

                <img className={classes.image} src={p2} alt="Upper restaurant" />
            </section>
            <section className={classes.subsection}>
                <p className={classes.p}>
                    Comandă pizza cu transport la domiciliu pe raza orașului Tîrgu Mureș. Comanda minimă este de 30 Ron. Comenzile sunt acceptate numai daca sunt comunicate prin telefon pâna la ora 23:30.
                </p>
                <img className={classes.image} src={p3} alt="Way to the upper restaurant" />
            </section>
        </section>
        <BackButton /></>);
}

export default DespreNoi;