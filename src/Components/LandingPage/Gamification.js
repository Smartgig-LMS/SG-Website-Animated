import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Gamification() {
    return (
        <>
            <div className='row vh-100 TestingContainer'>
                <div className='col ml-4 pr-0'>
                    <div className='Gamification1'>
                        <div>
                            <img src='./Images/gobeyond/GamificationLogo.svg' width="190" height="50" />
                        </div>
                        <div>
                            <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                                Gamification for
                            </h1>
                            <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 cyberSecHead'>
                                Corporate World
                            </h1>
                        </div>
                        <span>
                            Welcome to SmartGig, a leading provider in leveraging the immense potential of gamification to revolutionize your business operations. Our gamification services are designed to captivate your target audience, boost productivity, and deliver exceptional outcomes. Discover how we can enhance workplace satisfaction, elevate learning experiences, and optimize marketing strategies by strategically incorporating game elements and principles.Our team consists of experienced gamification specialists who possess a profound comprehension of psychology and game design principles. We tailor gamification tactics to correspond with your distinct objectives and target audience.
                        </span>
                    </div>
                </div>
                <div className='col ml-3'>
                    <div className='Gamification2 img-left'>
                        <img className='GameImg' src='./Images/gobeyond/gamification.png' />
                    </div>
                </div>
            </div>
        </>
    )
}
