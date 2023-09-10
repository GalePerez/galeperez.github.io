import { Link, useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'

function WebsiteContainer(props) {
    const navigate = useNavigate();
	const clickHandler = () => {
		navigate(-1, {replace: true});
    }
    return (
        <>
        <div className="back-arrow">
            <Link to={'#'}><i className="fa-solid fa-arrow-left fa-xl" onClick={clickHandler} style={{color: 'ffffff'}}>back</i></Link>
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