
import '../style/AboutMeUI.css'
import '../style/Main.css'
import model from "/model.png"
import profile from "/profile.jpg"
import AnimatedBackground from "../components/AnimatedBackground"
import { Link,  useNavigate} from 'react-router-dom';
import WebsiteContainer from "../components/WebsiteContainer.jsx"

const profileStyle = {
    width: '150px', 
    borderRadius: '50%'
}

const modelStyle = {
    width: '40vw',
    marginLeft: '5vw',
    top: '10vh',
}
function AboutMePage() {
    return (
            <>  
                <WebsiteContainer>
                    <div>
                        <img src={model} style={modelStyle} className="model1"/>
                    </div>
                    <div className="empty-space">
                        <span></span>
                    </div>
                    <div className="main-ui">
                        <h5 className="text-light text-center">Profile</h5>
                        <div className="top-boxes">
                            <div className="left-box">
                                <img src={profile} style={profileStyle}/>
                            </div>
                            <div className="right-box">
                                <h2>Jeimyre Gale Perez</h2>
                                <hr/>
                                <h5>Digital Artist / Front-End Web Developer</h5>
                                <div className="d-flex flex-direction-column">
                                <i className="fa-brands fa-instagram me-2" style={{color: '#ffffff'}}></i>
                                    <h6>akariyuu_san</h6>
                                </div>
                                
                                <div className="d-flex flex-direction-column">
                                    <i className="fa-solid fa-location-dot me-2" style={{color: '#ffffff'}}></i>
                                    <h6>South Cotabato, Philippines</h6>
                                </div>

                            </div>
                        </div>
                        <div className="middle-box">
                            <h6>I'm Gale, a digital artist skilled in front-end coding. 
                                I merge creativity and code to craft captivating
                                digital art and user-friendly websites. Let's
                                bring your vision to life together. Explore
                                my portfolio and connect with me for collaborations 
                                and commissions.
                            </h6>
                        </div>
                        <div className="bottom-box">
                            <div className="bottomleft-box">
                                    <h2>Tech Stacks</h2>
                                    <ul>
                                        <li>HTML</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "90%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div> 
                                        <li>CSS</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "85%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                        <li>Bootstrap</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "75%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                        <li>Javascript</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "60%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                        <li>ReactJS</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "68%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                        <li>PHP</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "50%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                        <li>MySQL</li>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "50%", ariaValuenow:'25', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                                            </div>
                                    </ul>
                            </div>
                            <div className="bottomright-box">
                                <div className="bottomright-top-box">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, velit.
                                </div>
                                <div className="bottomright-bottom-box">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellat.
                                </div>
                            </div>
                        </div>
                    </div>
                <AnimatedBackground />
                </WebsiteContainer>

            </>
        )
}
export default AboutMePage