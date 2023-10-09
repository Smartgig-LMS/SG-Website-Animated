import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Gamification() {
    return (
        <>
            <div className='TestingContainer'>
                <div className='col-lg-7'>
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
                        In the new age of constant changes to user behaviour and interest towards products Gamification techniques are much needed to reward users upon accomplishing desired task.
                        SmartGig's Gamification Platform(SGP) can be easily implemented for any enterprise scenerio which will resonate well by imbibing fun, incentive based
                        engagement.
                        <br />
                        <br />
                        <ul>
                            <li>
                                Push the boundries
                            </li>
                            <li>
                                Its about experience and engagement
                            </li>
                            <li>
                                Amplify business outcomes
                            </li>
                            <li>
                                Build loyality
                            </li>
                        </ul>
                    </span>
                </div>
                <div className='col-lg-5 img-left'>
                    <img className='GameImg' src='./Images/gobeyond/gamification.png' />
                </div>
            </div>
        </>
    )
}
