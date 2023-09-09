import '../style/LandingPageBackground.css';
import '../style/LandingPage.css'
import '../style/Main.css'
import photo from '/Gale.png'
import { Link } from "react-router-dom";


function LandingPage() {
    return (
        <>
            <div className='front'>
                <div className='photo'>
                    <img src={photo} style={{width: '300px'}}/>
                </div>
                <div className='title'>
                    <h1>Gale's Portfolio</h1>
                </div>
                <div className='start text-decoration-none'>
                    <Link to='/about-me'>Press to Start</Link>
                </div>
            </div>
            <div className='ig'>
                @akariyuu_san
            </div>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default LandingPage