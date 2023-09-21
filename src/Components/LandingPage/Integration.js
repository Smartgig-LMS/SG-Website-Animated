import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Integration() {
    return (
        <div className='col-12 pb-5 IntegrationContainer'>
            <div className='text-center'>
                <img src='./Images/gobeyond/Integration Icon.png' width="150" height="50" />
                <h1 style={{ color: "#0F0049", fontWeight: "700", marginTop: "50px" }}>
                    Seamless integration with<br />
                    other great tools
                </h1>
                <span className='spanInteg' style={{ fontWeight: "500", marginTop: "20px" }} >
                    SmartGig absolutely works great with tools in your other existing platform
                </span>
            </div>
            {/* <div className="TestingContainer1"> */}
            <div className='IntegrationLogos py-3 px-2 mt-5'>

                <div className='card IntegrationCard' >
                    <a href="https://www.microsoft.com/en-in/microsoft-teams/log-in" target='_blank'>
                        <img src='./Images/gobeyond/Teams.png' alt='...' height="82px" width="82px" />
                    </a>
                </div>

                <div className='card IntegrationCard' >
                    <a href="https://azure.microsoft.com/en-in" target='_blank' >
                        <img src='./Images/gobeyond/Azure.png' alt='...' height="78px" width="78px" />
                    </a>
                </div>

                <div className='card IntegrationCard' >
                    <a href="https://www.figma.com/" target='_blank' >
                        <img src='./Images/gobeyond/Figma Icon.png' alt='...' height="78px" width="78px" />
                    </a>
                </div>

                <div className='card IntegrationCard' >
                    <a href="https://aws.amazon.com/" target='_blank'>
                        <img src='./Images/gobeyond/aws.png' alt='...' height="54px" width="90px" />
                    </a>
                </div>

            </div>
            {/* </div> */}
        </div>
    )
}
