import React from 'react';
import Slider from "react-slick";
import Profile from '../Images/people-detected-by-facial-recognition-on-the-stree-S336MUS.jpg'
import Profile1 from '../Images/young-technician-typing-data-for-human-body-neurol-G5F9M73.jpg'
import Profile2 from '../Images/group-of-credit-cards-29QC5Q9.jpg'
import Profile3 from '../Images/doctor-wearing-surgical-gloves-looking-at-lung-x-r-B2JGGQZ.jpg'
import Profile4 from '../Images/office-graphic-designer-concept-business-woman-han-BMDQLHN.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    return(
        <div className="Projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="projects-content">
                    <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={70} autoPlay={true} interval="2000" infiniteLoop={true}>
                    <div className="card">
                        <img className="image" src={Profile}></img> 
                        <h3>Face Recognition</h3>
                        <h6>CNN OpenCV</h6>
                        <div className="after-hover"><p>It’s an image classifier which reads the image either via webcam or accept image manually and tells us the name of the person if it is present in the database.</p>
                            <p>It’s built on Convolutional Neural Network architecture with the last run accuracy of approximately 85%.</p>      
                            <p>Haarcascade Classifier is used to extract the face from the image to predict the name belongs to that face</p>
                            <p>OpenCV is used to work with the cleaning and preprocessing of the image.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src={Profile1}></img> 
                        <h3>Gender/Age Prediction</h3>
                        <h6>Resnet10 OpenCV Caffe Models</h6>
                        <div className="after-hover"><p>It’s an image classifier which reads the image either via webcam or accept image manually and predicts the gender and age of the person or persons in the image or in the video.</p>
                            <p>Pretrained caffe models are used which are based on Resnet 10 Architecture.</p>
                            <p>OpenCV is used to work with the cleaning and preprocessing of the image. It is also used for the access of the caffe models.</p>
                            <p>Blob Detection technique is used to emphasize the face in the image for easy extraction of the face</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src={Profile2}></img> 
                        <h2>Credit Card Fraud Detection</h2>
                        <h6>Machine Learning Ensamble Methods Numpy Pandas</h6>
                        <div className="after-hover"><p>This model predicts whether the transaction made by the credit card is genuine or fraud.</p>
                            <p>Ensemble methods such as Random Forest and XGBoost are used to train this model. This model runs on the accuracy of 99.9%.</p>
                            <p>Under and Oversampling methods are used to preprocess the data.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src={Profile3}></img> 
                        <h3>Covid-19 X-Ray Detector</h3>
                        <h6>Deep Learning CNN OpenCV Flask Docker</h6>
                        <div className="after-hover"><p>It’s an Image classifier which reads the image of an X-Ray and tells whether a person is affected with Covid 19 or not.</p>
                            <p>It is built on Convolutional Neural Network architecture with the last run accuracy of approximately 82%</p>
                            <p>Merged this model with the flask to deploy it on webserver.</p>
                            <p>Created an OS image using Docker and stored it in docker hub for easy access of this model on Linux or Windows.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="image" src={Profile4}></img> 
                        <h3>Machine Learning</h3>
                        <h6>numpy pandas</h6>
                        <div className="after-hover"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus.</p>
                        </div>
                    </div>
                    </Carousel>                    
                </div>
            </div>

        </div>
    )

}

export default Projects;