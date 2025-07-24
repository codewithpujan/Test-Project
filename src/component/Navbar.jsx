import { Link } from "react-router-dom"
import "../nav.css"

const Navbar = () => {


  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <Link to={"/"} className="logo">Everest Hotel</Link>



        <ul className="nav-link">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/room">Room</Link> </li>
          <li> <Link to="/contacts">Contacts</Link></li>


        </ul>

      </div>
    </nav>)
}
export default Navbar