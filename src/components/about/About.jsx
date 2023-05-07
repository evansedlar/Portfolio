import './about.css'
import engPic from '../../assets/images/engPic.jpg'
import reactPic from '../../assets/logos/reactjs.svg'
import nodePic from '../../assets/logos/nodejs.svg'
import htmlPic from '../../assets/logos/html.svg'
import cssPic from '../../assets/logos/css.svg'
import jsPic from '../../assets/logos/javascript.svg'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={engPic} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    My name is Evan Sedlar, and I am a junior web developer seeking exciting opportunities in the web development field.
                </p>
                <p className="a-desc">
                    Prior to transitioning to web development, I served as a Combat Engineer Squad Leader in the Marine Corps, where I gained valuable experience in leadership, teamwork, and problem-solving. During my time in the military, I also had the opportunity to work on various construction projects, which sparked my interest in technology and engineering.

                    After completing my service, I pursued a career as a low voltage technician, where I gained experience in networking, cabling, and troubleshooting. However, I soon realized that my passion lies in web development, and I decided to pursue this career path.

                    I have recently completed a web development boot camp, where I learned various front-end and back-end technologies, such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am excited about applying my skills and knowledge to real-world projects and contributing to the growth of a dynamic team.

                    I am a quick learner, adaptable, and detail-oriented, and I thrive in fast-paced environments. I am also passionate about creating user-friendly and aesthetically pleasing websites that are responsive and accessible to a diverse audience.
                </p>
                <div className="a-logos-wrapper">
                    <img src={reactPic} alt="" className="a-logos" />
                    <img src={nodePic} alt="" className="a-logos" />
                    <img src={jsPic} alt="" className="a-logos" />
                    <img src={htmlPic} alt="" className="a-logos" />
                    <img src={cssPic} alt="" className="a-logos" />
                </div>
            </div>
        </div>
    )
}

export default About