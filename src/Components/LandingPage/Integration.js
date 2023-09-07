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
        <div className='col-12 mt-5 pb-5 fixed'>
            <div className='container text-center'>
                <img src='./Images/gobeyond/Integration Icon.png' width="150" height="50" />
                <h1 style={{ color: "#0F0049", fontWeight: "700", marginTop: "50px" }}>
                    Seamless integration with<br />
                    other great tools
                </h1>
                <span style={{ fontWeight: "500", marginTop: "20px" }} >
                    SmartGig absolutely works great with tools in your other existing platform
                </span>
            </div>
            <div className="container">
                <div className='d-flex py-3 px-2 mt-5' style={{ gap: "20px", marginLeft: "23%" }}>

                    <MDBCard style={{ height: "136px", width: "136px" }}>
                        <MDBCardImage src='./images/gobeyond/Teams.png' className='mt-4 ml-4' alt='...' height="82px" width="82px" />
                    </MDBCard>

                    <MDBCard style={{ height: "136px", width: "136px" }}>
                        <MDBCardImage src='./images/gobeyond/Azure.png' className='mt-4 ml-4' alt='...' height="78px" width="78px" />
                    </MDBCard>

                    <MDBCard style={{ height: "136px", width: "136px" }}>
                        <MDBCardImage src='./images/gobeyond/Figma Icon.png' className='mt-4 ml-4' alt='...' height="78px" width="78px" />
                    </MDBCard>

                    <MDBCard style={{ height: "136px", width: "136px" }}>
                        <MDBCardImage src='./images/gobeyond/aws.png' className='mt-5 ml-4' alt='...' height="54px" width="90px" />
                    </MDBCard>

                </div>
            </div>
        </div>
    )
}
