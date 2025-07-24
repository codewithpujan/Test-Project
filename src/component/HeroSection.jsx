import "../nav.css"
import { Link } from "react-router-dom"

const HeroSection =()=>{
    return(
        <>
       <section className="hero" id="hero" >
        <div className="hero-overlay">
        <div className="hero-content">
            <h2>Wellcome to Hotel Everest</h2>
            <p>Experience comfort and well built rooms</p>
            <Link to="/room" className="hero-button">Book Now </Link>
        </div>
        </div>
       </section>
        </>
    )
}
export default HeroSection 