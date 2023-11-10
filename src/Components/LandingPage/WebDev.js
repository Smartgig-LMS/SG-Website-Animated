import { fontFamily, height, lineHeight } from '@mui/system'
import React from 'react'

export default function WebDev() {
    return (
        <div className="TestingContainer">
            <div className="field-content-left col-lg-7">
                <div>
                    <img src='./Images/gobeyond/Group 427321583.svg' width="180" height="50" />
                </div>
                <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className=" mt-2">
                    We make it
                </h1>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className="webhead mb-3">
                    effortless for users
                </h1>
                <p>
                    Businesses evolve continuously to survive, grow, sustain, and thrive, and we are here to serve you from shaping your initial idea to creating web apps that delight your customers. Collaborating with our domain experts and leveraging cutting-edge technologies, we envision and design futuristic web apps that streamline your complex core systems.
                </p>
                <div className="d-flex mt-5">
                    <div className="mb-2 mr-lg-2 p-3 w-100">
                        <div className='mb-2'>
                            <img src='./Images/gobeyond/Slick websites Icon2.svg' />
                        </div>
                        <h6>Slick Websites</h6>
                        <p>
                            Crafting digital experiences that captivate
                        </p>
                    </div>
                    <div className="mb-2 mr-lg-2 p-3 w-100">
                        <div className='mb-2'>
                            <img src='./Images/gobeyond/Smooth Web Apps Icon.svg' />
                        </div>
                        <h6>
                            Smooth Web Apps
                        </h6>
                        <p>
                            Embark on a flawless user journey with a convergence of speed and usability
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 img-left">
                <img src='./Images/gobeyond/web-development-image.png' />
            </div>
        </div>
    )
}
