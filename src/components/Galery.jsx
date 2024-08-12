import classes from "../styles/galery.module.css"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"


const Galery = () => {
    return (<>
        <section className={classes.images}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </section>
    </>);
}

export default Galery;