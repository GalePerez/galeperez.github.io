import { Link } from "react-router-dom"
import "../style/Navbar.css"

function NavBar() {
    return (
        <>
            <aside>
            <p> Menu </p>
            <a href="#">
                <h3>Profile</h3>
            </a>
            <a href="#">
                <h3>Websites</h3>
            </a>
            <a href="#">
                <h3>Artworks</h3>
            </a>
            <a href="#">
                <h3>Socials</h3>
            </a>
            <a href="#">
                <h3>Contact</h3>
            </a>
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
                                    <i className="fa fa-home"></i><em>Home</em>
                                </a>
                                </li>
                                <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-user"></i><em>My Profile</em>
                                </a>
                                </li>
                                <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Camera</em>
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