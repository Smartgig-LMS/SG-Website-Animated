import React, { useState } from 'react'
import Footer from '../LandingPage/Footer'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const slideImages = [
    {
        image: './Images/gobeyond/351.png',
        image2: './Images/gobeyond/Annual day 1.png',
        image3: './Images/gobeyond/Team1.png',
    },
    {
        image: './Images/gobeyond/Rectangle 13369.png',
        image2: './Images/gobeyond/Rectangle 13371.png',
        image3: './Images/gobeyond/Rectangle 13370.png',
    },
    // {
    //     image: './Images/gobeyond/351.png',
    //     image2: './Images/gobeyond/Rectangle 13371.png',
    //     image3: './Images/gobeyond/Annual day 1.png',
    // },
];

export default function CulturePage() {

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const spanStyle = {
        padding: '20px',
        backgroundColor: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }

    // const slideImages = [
    //     {
    //         url: '../../../public/Images/gobeyond/Rectangle 13369.png',
    //         caption: 'Slide 1'
    //     },
    //     {
    //         url: '../../../public/Images/gobeyond/Rectangle 13370.png',
    //         caption: 'Slide 2'
    //     },
    //     {
    //         url: '../../../public/Images/gobeyond/Rectangle 13371.png',
    //         caption: 'Slide 3'
    //     },
    // ];

    const [current, setCurrent] = useState(0);
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



    {/* <div className='ImagesTour'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Rectangle 13369.png' />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <div >
                                    <div>
                                        <img src='./Images/gobeyond/Rectangle 13370.png' />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <div >
                                    <div>
                                        <img src='./Images/gobeyond/Rectangle 13371.png' />
                                    </div>
                                </div>
                            </div>
                        </div> */}

    return (
        <div>
            <div className='culturepg'>
                <div className='CultureHeadnig'>
                    <h1>Culture</h1>
                    <img src="./Images/gobeyond/Rectangle 13220.png" alt="" />
                </div>
                <div className='Lastcontainer'>
                    <div>
                        <img src='./Images/gobeyond/Group 427321121 (3).png' width="129" height="50" />
                    </div>
                    <h1>
                        Helping Millions grow<br />
                        better.
                    </h1>
                    <span>
                        In this expeditious outlook of digital era SmartGig is a zestful company in the domain of Information Technology which made its mark <br />
                        in the niche industries. With our bunch of energised and expertise professionals, we unleash the true potential to provide tremendous<br />
                        experience in designing, developing, and testing the solutions that empower our clients to deliver exceptional experiences to their <br />
                        customers. We are paving the way for next-generation technologies and digital services, propelling businesses toward the ultimate <br />
                        evolution and future readiness
                    </span>

                </div>
                <div className='totalMain2'>
                    <div className='Leftcontainer'>
                        <img src="./Images/gobeyond/mission 1.png" alt="image" className='mission' />
                    </div>
                    <div className='rightContainer'>
                        <div className='opLeftSec'>
                            <img src='./Images/gobeyond/Group 427321121 (4).png' width="159" height="48" />
                        </div>
                        <h1 className='col-12 mb-4 mt-0'>
                            Optimise your Business with<br />
                            our Cutting Edge Technology
                        </h1>
                        <span>
                            Leading business excellence and empowering customers through our expeertise <br />
                            in smart technology - driven transformations , unlocking their full potential .
                        </span>
                    </div>
                </div>
                <div className='totalMain2'>
                    <div className='rightContainer'>
                        <div className='opLeftSec'>
                            <img src='./Images/gobeyond/Group 427321121 (5).png' width="139" height="45" />
                        </div>
                        <h1 className='col-12 mb-4 mt-0'>
                            Breaking down Information <br />
                            Silos using Technology
                        </h1>
                        <span>
                            To foster strong and lasting bonds with our clients , serving as<br />
                            their trusted partner in software development and quality<br />
                            services delivered by smart minds .
                        </span>
                    </div>
                    <div className='Leftcontainer'>
                        <img src="./Images/gobeyond/Vision_entrepreneurs_ecosystem 1.png" alt="image" className='vision' />
                    </div>

                </div>
                <div className='Lastcontainer'>
                    <div>
                        <img src='./Images/gobeyond/Group 427321207.png' width="156" height="50" />
                    </div>
                    <h2>
                        Values & Principles
                    </h2>
                    <img src='./Images/gobeyond/Group 427321385.png' className='mt-5' height="74" width="950" />
                    {/* <br />
                    <hr /> */}
                    {/* <div className="slide-container">
                        <Slide>
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                                        <span style={spanStyle}>{slideImage.caption}</span>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div> */}

                    <section className="slider">
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
                                        <>
                                            <img src={slider.image} alt="Slider image" className="image" />
                                            <img src={slider.image2} alt="Slider image" className="image" />
                                            <img src={slider.image3} alt="Slider image" className="image" />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </section>

                    {/* <div className='ImagesTour'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Rectangle 13369.png' />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <div >
                                    <div>
                                        <img src='./Images/gobeyond/Rectangle 13370.png' />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <div >
                                    <div>
                                        <img src='./Images/gobeyond/Rectangle 13371.png' />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
                <Footer />
            </div>
        </div>
    )
}
