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
                <h1 style={{ color: "#0F0049", fontWeight: "700", marginTop: "1%" }}>
                    Seamless integration with<br />
                    other great tools
                </h1>
                <span className='spanInteg' style={{ fontWeight: "500", marginTop: "20px" }} >
                    SmartGig absolutely works great with tools in your other existing platform
                </span>
            </div>
            <div className='IntegrationLogos py-3 px-2 mt-2'>
                <div className='card shadow IntegrationCard' >
                    <a href="https://www.microsoft.com/en-in/microsoft-teams/log-in" target='_blank'>
                        <img src='./Images/gobeyond/Teams.png' alt='...' height="72px" width="72px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://azure.microsoft.com/en-in" target='_blank' >
                        <img src='./Images/gobeyond/Azure.png' alt='...' height="70px" width="70px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://www.figma.com/" target='_blank' >
                        <img src='./Images/gobeyond/Figma Icon.png' alt='...' height="70px" width="70px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://aws.amazon.com/" target='_blank'>
                        <img src='./Images/gobeyond/aws.png' alt='...' height="54px" width="90px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://www.salesforce.com/in/" target='_blank'>
                        <img src='./Images/gobeyond/salesforce.png' alt='...' height="93px" width="93px" />
                    </a>
                </div>
            </div>
            <div className='IntegrationLogos py-3 px-2 mt-2'>
                <div className='card shadow IntegrationCard' >
                    <a href="https://www.atlassian.com/software/jira" target='_blank'>
                        <img src='./Images/gobeyond/jiraLogo.png' alt='...' height="82px" width="82px" />
                    </a>
                </div>
                <div className='card shadow IntegrationCard' >
                    <a href="https://slack.com/intl/en-in" target='_blank'>
                        <img src='./Images/gobeyond/slack.png' alt='...' height="103px" width="103px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://powerbi.microsoft.com/en-in/" target='_blank' >
                        <img src='./Images/gobeyond/powerBI.png' alt='...' height="103px" width="103px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://www.qlik.com/us/" target='_blank' >
                        <img src='./Images/gobeyond/Qlik.png' alt='...' height="78px" width="78px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://www.splunk.com/" target='_blank'>
                        <img src='./Images/gobeyond/splunk.png' alt='...' height="103px" width="103px" />
                    </a>
                </div>

                <div className='card shadow IntegrationCard' >
                    <a href="https://github.com/" target='_blank'>
                        <img src='./Images/gobeyond/github.png' alt='...' height="82px" width="82px" />
                    </a>
                </div>
            </div>
        </div>
    )
}
