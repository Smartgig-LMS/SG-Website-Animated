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

    return (
        <div>
            <div className='culturepg'>
                <div className='CultureHeadnig'>
                    <h1>Culture</h1>
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
                        In this constantly evolving landscape of technology, SmartGig is a dynamic IT company that specializes in <br />niche industries. Our team of enthusiastic experts, unlocks the full potential of designing, developing, and <br />testing solutions for our clients and help businesses embrace next-gen technologies to stay future-ready.<br />
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
                            Our mission is our meticulous vision to drive business excellence and<br /> empower customers through our expertise in  smart technology driven<br /> transformations and to embrace the software services with Avant-grade solutions.
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
                            Our prime focus is to deliver absolute hands-free software development along<br />  with other end -to -end software Testing and quality services to our clients to<br /> enhance their experience with efficiency and to build a strong long-term relationship <br />with them to navigate them towards leveraging on the technology landscape.
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
                    <div className='card mt-5'>
                        <div className='d-flex'>
                            <div className='cultureAnimat'>
                                <br />
                                <h4>
                                    Values & Principles
                                </h4>
                                <br />
                                <div className='newcard'>
                                    <p>
                                        At our core, we are driven by trust, honesty, <br />integrity, respect, passion, and a dedicated team <br />that embodies these values in everything we do
                                    </p>
                                    <hr />
                                    <p>
                                        Drive for Excellence:<br />
                                        Dedicated and determined to serve the best for <br />our clients
                                    </p>
                                    <hr />
                                    <p>
                                        Inclusivity and Diversity:<br />
                                        Fostering equality by valuing diverse perspectives <br />ensures all team members feel included
                                    </p>
                                    <hr />
                                    <p>
                                        Client-Centric Approach :<br />
                                        Building strong client connections with unwavering<br /> commitment to delivering value
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className='imageOfCultureNew5'>
                                    <img src='./Images/gobeyond/Trip2.png' />
                                </div>
                                <div className='imageOfCultureNew5'>
                                    <img src='./Images/gobeyond/GroupImg32.png' />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className='imageOfCultureNew5'>
                                    <img src='./Images/gobeyond/MicrosoftTeams-image362.png' />
                                </div>
                                <div className='imageOfCultureNew5'>
                                    <img src='./Images/gobeyond/Group 427321517.png' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <section className="slider">
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
                                            <img src={slider.image} alt="Slider image" className="imageOfCulture" />
                                            <img src={slider.image2} alt="Slider image" className="imageOfCulture" />
                                            <img src={slider.image3} alt="Slider image" className="imageOfCulture" />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </section> */}

                </div>
                <Footer />
            </div>
        </div>
    )
}
