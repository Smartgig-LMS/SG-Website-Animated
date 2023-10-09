import React, { useState, useEffect } from 'react'
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

const listOfImages = [
    './Images/gobeyond/WhatsApp1.png', './Images/gobeyond/Trip2.png', './Images/gobeyond/GroupImg32.png', './Images/gobeyond/Thumbnail22.png',
    './Images/gobeyond/Group Img 13.png', './Images/gobeyond/Thumbnail23.png', './Images/gobeyond/Group 427321517.png', './Images/gobeyond/Group Img 2 2.png',
    './Images/gobeyond/WhatsA1.png', './Images/gobeyond/WhatsApp1.png', './Images/gobeyond/Mahesh352.png', './Images/gobeyond/MicrosoftTeams-image362.png',
]

export default function CulturePage() {



    const [displayedImages, setDisplayedImages] = useState(listOfImages.slice(0, 4));
    const [currentIndex, setCurrentIndex] = useState(4);

    // image chnages in 10 sec -----------------------------

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    useEffect(() => {
        const displayedImages = () => {
            const nextIndex = currentIndex + 4;
            if (nextIndex <= listOfImages.length) {
                setDisplayedImages(listOfImages.slice(currentIndex, nextIndex));
                setCurrentIndex(nextIndex);
            } else {
                setDisplayedImages(listOfImages.slice(0, 4));
                setCurrentIndex(4);
            }
        };
        const timer = setInterval(displayedImages, 4000);
        return () => clearInterval(timer);
    }, [currentIndex, listOfImages]);


    return (
        <div>
            <div className='culturepg'>
                <div className='CultureHeadnig'>
                    <h1></h1>
                </div>
                <div className='Lastcontainer'>
                    <div>
                        <img src='./Images/gobeyond/Group 427321121.svg' width="129" height="50" />
                    </div>
                    <h1>
                        Client first, Team foremost
                    </h1>
                    <span>
                        In this constantly evolving landscape of technology, SmartGig is a dynamic IT company that specializes in niche industries. Our team of enthusiastic experts, unlocks the full <br />potential of designing, developing, and testing solutions for our clients and help businesses embrace next-gen technologies to stay future-ready.<br />
                    </span>

                </div>
                <div className='totalMain2'>
                    <div className='Leftcontainer'>
                        <img src="./Images/gobeyond/mission 1.png" alt="image" className='mission' />
                    </div>
                    <div className='rightContainer mt-3'>
                        <div className='opLeftSec ml-5'>
                            <img src='./Images/gobeyond/Group 42732112121.svg' width="159" height="48" />
                        </div>
                        {/* <h1 className='col-12 mb-4 mt-0'>
                            Optimise your Business with<br />
                            our Cutting Edge Technology
                        </h1> */}
                        <p className='col-12 mb-4 mt-0'>
                            Our mission is our meticulous vision to drive business<br />
                            excellence and empower customers through our expertise <br />
                            in smart technology driven transformations and to embrace <br />
                            the software services with Avant-grade solutions.
                        </p>
                    </div>
                </div>
                <div className='totalMain3'>
                    <div className='rightContainer mt-5'>
                        <div className='opLeftSec'>
                            <img src='./Images/gobeyond/Group 427321.svg' width="139" height="45" />
                        </div>
                        {/* <h1 className='col-12 mb-4 mt-0'>
                            Breaking down Information <br />
                            Silos using Technology
                        </h1> */}
                        <p className='col-12 mb-4 mt-0'>
                            Our prime focus is to deliver absolute hands-free software <br />
                            development along  with other end -to -end software Testing <br />
                            and quality services to our clients to enhance their experience<br />
                            with efficiency and to build a strong long-term relationship with<br />
                            them to navigate them towards leveraging on the technology <br />
                            landscape.
                        </p>
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
                            {/* <div style={{ display: "flex", flexDirection: "column" }}>
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
                            </div> */}

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className='imageOfCultureNew5'>
                                    <img src={displayedImages[0]} />
                                </div>
                                <div className='imageOfCultureNew5'>
                                    <img src={displayedImages[1]} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className='imageOfCultureNew5'>
                                    <img src={displayedImages[2]} />
                                </div>
                                <div className='imageOfCultureNew5'>
                                    <img src={displayedImages[3]} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
