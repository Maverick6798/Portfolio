import React from 'react'
import Profile from '../Images/Maverick.jpg'

const About = () => {
    return(
        <div className="About" id="about">
            <div className="max-width">
                <h2 className="Title">About Me</h2>
                <div className="about-content">
                    <div className="column left">
                    <img src={Profile} alt="Maverick" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Kaustubh and I'm a <span>Web Developer</span></div>
                        <p>I am Kaustubh Tripathi , an Aspiring Data Scientist, I specialize in  various programming languages and concepts of Machine Learning and Artificial Intelligence. I also have a good command on Linux, Ethical hacking, Networking etc.  I am a firm believer that we can learn only by doing hands-on. And my focus remains the same when I teach any concept to students.</p>                        
                        <a href="#">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;