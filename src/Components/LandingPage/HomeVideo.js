import React from 'react'
import RotateTextAnimate from './RotateTextAnimate'
// import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCardOverlay
} from 'mdb-react-ui-kit';

const Homevideo = ({ pageName }) => {

    return (
        <>

            <div className={`${pageName === 'homeVideo' ? 'active' : ''} homeVideo fixed`}>
                <div className='videoTextContainer d-flex justify-content-center align-items-center'>
                    <video className="w-100" autoPlay loop muted>
                        <source
                            src="https://testt.smartgig.tech/vid.mp4"
                            type="video/mp4"
                            allowFullScreen
                        />
                    </video>

                    {/* <img src='./Images/gobeyond/GoBeyond.png' alt='...' style={{ width: "109%", height: "710px" }} /> */}

                    <div className="col-12 py-5 sliding">
                        <RotateTextAnimate />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homevideo