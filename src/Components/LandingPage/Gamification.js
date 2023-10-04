import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Gamification() {
    return (
        <>
            <div className='row vh-100 pl-5 TestingContainer'>
                <div className='col ml-4 pr-0'>
                    <div className='Gamification1'>
                        <div>
                            <img src='./Images/gobeyond/GamificationLogo.svg' width="190" height="50" />
                        </div>
                        <div className='webhead'>
                            <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                                Gamification for
                            </h1>
                            <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='mb-3 cyberSecHead'>
                                Corporate World
                            </h1>
                        </div>
                        <span>
                            Are you looking to elevate your business strategies to the next level?
                            Then embrace the power of Gamification, through our meticulous
                            vision to encourage the natural engaging environment for clients to
                            level up the impact in driving forward the increased engagement
                            enhanced learning and increased productivity
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
