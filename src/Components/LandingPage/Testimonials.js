import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

const slideImages = [
    {
        image: './Images/gobeyond/351.png',
    },
    {
        image: './Images/gobeyond/Rectangle 13369.png',
    },
    {
        image: './Images/gobeyond/351.png',
    },
];

export default function Testimonials() {

    const navigate = useNavigate();

    const navigatetoContact = () => {
        navigate("/contact");
    }

    const [current, setCurrent] = React.useState(0);
    const length = slideImages.length;

    if (!Array.isArray(slideImages) || slideImages.length <= 0) {
        return null;
    }

    console.log(current);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            <div className='testimonials'>
                <img src='./Images/gobeyond/Group 427321194.svg' height="48" width="190" />
                <h2 style={{ fontWeight: "bold" }}>
                    What people are saying
                </h2>

                <div className='testiContain'>
                    <div className='card'>
                        <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                        <br />
                        <h6>
                            AWSome LLC
                        </h6>
                        <p>
                            “With support from the SmartGig team, we utilized scarce talent resources and saved time while optimizing key AWS solutions and Infra,  monitor cluster conditions and automatically fix faults 24 hours a day. Our users were able to complete cluster expansion with one click, ensure that all logs can be collected and analyzed, increase analysis efficiency by 20%, and only pay for the Amazon Web Services resources used"
                        </p>
                        <h6>
                            Sandeep
                        </h6>
                    </div>
                    <div className='card'>
                        <img src='./Images/gobeyond/Item11.png' height="40" width="40" />
                        <br />
                        <h6>
                            Insurfin
                        </h6>
                        <p>
                            "It has been a great experience so far in our engagement with Smartgig Technologies as our Technology Provider. They have been truly professional in their approach and have provided the necessary support and have been flexible and agile to accommodate changing business requirements for our MVP Premium Financing solution which is a crucial need for a startup like Insurfin.

                            Their quality standards have been quite good and they have been able to deliver  results consistently.

                            We definitely recommend Smartgig as a great Technology / Professional Services Provider to the Startup Community or companies due to their flexible delivery approach without compromising on quality"
                        </p>
                        <h6>
                            Sambit
                        </h6>
                    </div>
                    <div className='card'>
                        <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                        <br />
                        <h6>
                            Infionic
                        </h6>
                        <p>
                            "Working with Smartgig Technologies has been an exceptional experience. "They have proven themselves to be a reliable and trustworthy partner, and I look forward to our continued collaboration. Our partnership has not only been productive but also enjoyable, as they have shown themselves to be a friendly and approachable group of professionals"
                        </p>
                        <h6>
                            Subramanyam
                        </h6>
                    </div>
                </div>

                <div className='col-12 text-center tryusbtn'>
                    <button type='button' className='btn btn-primary' onClick={navigatetoContact}>Try us out</button>
                </div>

                {/* <section className="slider col-10">
                <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
                <p>.</p>
                <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
                {slideImages.map((slider, index) => {
                    return (
                        <div
                            className={index === current ? "slide active" : "slide"}
                            key={index}
                        >
                            {index === current && (
                                <div className='testiContain'>
                                    <div className='card shadow'>

                                        <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                                        <br />
                                        <p>
                                            "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                        </p>
                                        <h6>
                                            Subramnyam
                                        </h6>
                                        <p>
                                            Founder
                                        </p>
                                    </div>
                                    <div className='card shadow'>
                                        <img src='./Images/gobeyond/Item11.png' height="40" width="40" />
                                        <br />
                                        <p>
                                            "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                        </p>
                                        <h6>
                                            Sandeep
                                        </h6>
                                        <p>
                                            Product Strategist
                                        </p>
                                    </div>
                                    <div className='card shadow'>
                                        <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                                        <br />
                                        <p>
                                            "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                        </p>
                                        <h6>
                                            Jay
                                        </h6>
                                        <p>
                                            Founder
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                </section> */}
            </div>
            <div style={{ marginTop: "3%", paddingBottom: "1%", backgroundColor: "#F0F0F0" }}>
                <hr />
                <div className='d-flex' style={{ justifyContent: "space-around" }}>
                    <div style={{ fontWeight: "500" }}>
                        Copyright © 2023 SmartGig. All Rights Reserved.
                    </div>
                    <div className='d-flex' style={{ fontWeight: "500" }}>
                        <div>
                            Terms of Service
                        </div>
                        <div className='ml-4'>
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
