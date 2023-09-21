import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function LeadershipTeam() {
    const [flag, setFlag] = useState(false);

    return (
        <div className='col-12 pt-5 vh-100 LeadershipContainer '>

            <div className='LeaderShip1 ml-5'>
                <div className='circle'>
                    <a href='https://www.linkedin.com/in/mahesh-nayani-4a947a1a' target='_blank'>
                        <img className='mahesh' src='./Images/gobeyond/Mahesh.png' data-tooltip-id="my-tooltip-1" />
                    </a>

                    <a href='https://www.linkedin.com/in/ramakrishnavaddi' target='_blank'>
                        <img className='rama' src='./Images/gobeyond/Rama.png' data-tooltip-id="my-tooltip-2" />
                    </a>

                    <a href='https://www.linkedin.com/in/leena-tiganapally-313487214' target='_blank'>
                        <img className='leena' src='./Images/gobeyond/Leena.png' data-tooltip-id="my-tooltip-3" />
                    </a>

                    <a href='https://www.linkedin.com/in/sankar-r-499470210' target='_blank'>
                        <img className='shankar' src='./Images/gobeyond/Shankar.png' data-tooltip-id="my-tooltip-4" />
                    </a>
                </div>
                <ReactTooltip
                    id="my-tooltip-1"
                    place="right"
                    variant="warning"
                >
                    <h6 >
                        Mahesh Nayani
                        <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                    </h6>
                    <small>
                        Chief Executive Officer
                    </small>
                </ReactTooltip>

                <ReactTooltip
                    id="my-tooltip-2"
                    place="right"
                    variant="warning"
                >
                    <h6>
                        Rama Vaddi
                        <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                    </h6>
                    <small>Chief Development Officer</small>
                </ReactTooltip>

                <ReactTooltip
                    id="my-tooltip-3"
                    place="right"
                    variant="warning"
                >
                    <h6>
                        Leena Tiganapalli
                        <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                    </h6>
                    <small>Chief Human Resources Officer</small>
                </ReactTooltip>

                <ReactTooltip
                    id="my-tooltip-4"
                    place="right"
                    variant="warning"
                >
                    <h6>
                        Shankar Reddy
                        <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                    </h6>
                    <small>Cheif Operation Officer</small>
                </ReactTooltip>

            </div>

            <div className='LeaderShip2'>
                <div>
                    <img src='./Images/gobeyond/Group 427321128.png' width="150" height="50" />
                </div>
                <h1 style={{ color: "#5789DB", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    Leadership Team
                </h1>
                <span style={{ fontWeight: "600", fontStyle: "Roboto", fontSize: "18px" }}>
                    Meet our dynamic leadership team who are <br />
                    an epitome of unwavering dedication and <br />
                    determination in driving forward the organization <br />
                    towards excellence with innovation as vision and <br />
                    embarking new digital horizons as a <br />
                    mission.
                </span>
                <hr />
            </div>
        </div >
    )
}
