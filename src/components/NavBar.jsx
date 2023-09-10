import { Link } from "react-router-dom"
import "../style/Navbar.css"

function NavBar() {
    return (
        <>
            <aside>
            <p> Menu </p>
            <Link to="/about-me">
                <h4>Profile</h4>
            </Link>
            <Link to="/website">
                <h4>Websites</h4>
            </Link>
            <Link to="#">
                <h4>Artworks</h4>
            </Link>
            <Link to="#">
                <h4>Socials</h4>
            </Link>
            <Link to="#">
                <h4>Contact</h4>
            </Link>
            </aside>

            <div className="mobileview">
                <div className="s-layout">
                
                    <div className="s-layout__sidebar">
                        <a className="s-sidebar__trigger" href="#0">
                            <i className="fa fa-bars fa-xl"></i>
                        </a>
                    
                        <nav className="s-sidebar__nav">
                            <ul>
                                <li>
                                    <a className="s-sidebar__nav-link" href="#0">
                                        <h1>About</h1>
                                    </a>
                                </li>
                                <li>
                                    <div className="s-sidebar__nav-link" href="#0">
                                        <Link to="/website"><h1>Websites</h1></Link>
                                    </div>
                                </li>
                                <li>
                                    <a className="s-sidebar__nav-link" href="#0">
                                        <h1>Artworks</h1>
                                    </a>
                                </li>
                                <li>
                                    <a className="s-sidebar__nav-link" href="#0">
                                        <h1>Socials</h1>
                                    </a>
                                </li>
                                <li>
                                    <a className="s-sidebar__nav-link" href="#0">
                                        <h1>Contact Me</h1>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar