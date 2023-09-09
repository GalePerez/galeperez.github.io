import "../style/Navbar.css"

function NavBar() {
    return (
        <>
            <aside>
            <p> Menu </p>
            <a href="#">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                My drive
            </a>
            <a href="#">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                Computers
            </a>
            <a href="#">
                <i className="fa fa-clone" aria-hidden="true"></i>
                Shared with me
            </a>
            <a href="#">
                <i className="fa fa-star-o" aria-hidden="true"></i>
                Starred
            </a>
            <a href="#">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                Trash
            </a>
            </aside>

            <div className="mobileview">
                <div className="s-layout">
                
                    <div className="s-layout__sidebar">
                        <a className="s-sidebar__trigger" href="#0">
                            <i className="fa fa-bars"></i>
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