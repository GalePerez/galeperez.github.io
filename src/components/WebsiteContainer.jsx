import { Link, useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'

function WebsiteContainer(props) {
    return (
        <>
        <div className="back-arrow">
            <Link to={'/landing-page'}><i className="fa-solid fa-arrow-left fa-xl" style={{color: 'ffffff'}}>back</i></Link>
        </div>
        <div className="about-me-ui">
            <NavBar />
            <div className='container d-flex justify-content-center flex-row'>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default WebsiteContainer