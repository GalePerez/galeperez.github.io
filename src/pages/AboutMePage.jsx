import SideBar from "../components/SideBar"
import '../style/AboutMeUI.css'
import model from "/model.png"
import profile from "/profile.jpg"
import { Link } from 'react-router-dom';

const profileStyle = {
    width: '250px', 
    borderRadius: '50%'
}

function AboutMePage() {
    return (
            <>
                <Link to="#"><button>Back</button></Link>
                <div className="body about-me-ui">
                    <div>
                        <SideBar />
                    </div>
                    <div>
                        <img src={model} />
                    </div>
                    <div className="main-ui">
                        <div className="top-boxes">
                            <div className="left-box">
                                <img src={profile} style={profileStyle}/>
                            </div>
                            <div className="right-box">
                                <h1>Jeimyre Gale Perez</h1>
                                <h3>Digital Artist/Front-End Web Developer</h3>
                            </div>
                        </div>
                        <div className="middle-box">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis porro assumenda eligendi dolorum ratione debitis laudantium tempore perspiciatis amet.
                        </div>
                        <div className="bottom-box">
                            <div className="bottomleft-box">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos.
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
                </div>
            </>
        )
}
export default AboutMePage