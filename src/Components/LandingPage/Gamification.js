import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Gamification() {
    return (
        <div className=' col-12 pt-5 vh-100 TestingContainer'>
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
                <span className='GamificationContent'>
                    Are you looking to elevate your business strategies to the next level? <br />
                    Then embrace the power of Gamification, through our meticulous<br />
                    vision to encourage the natural engaging environment for clients to<br />
                    level up the impact in driving forward the increased engagement<br />
                    enhanced learning and increased productivity
                </span>
            </div>
            <div className='Gamification2 img-left'>
                <img className='GameImg' src='./Images/gobeyond/gamification.png' />
            </div>
        </div>
    )
}
