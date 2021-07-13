import React from 'react';

const Contact = () => {
    return(
        <div className="Contact">
            <div className="max-width">
                <h2 className="title">Contact Me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get In Touch</div>
                        <p>I'm constantly currently looking for any new opportunities, my inbox is always open. Whether you have a offer or any question or just want to say hi, I'll try my best to get back to you!</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Kaustubh Tripathi</div>

                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">UP, India</div>
                    
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">kaustubh.tripathi6798@gmail.com</div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <div className="email"><a href={`mailto:${email}${params}`}>{children}</a></div>;
};

export default Contact;