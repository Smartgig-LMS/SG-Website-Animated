import React from 'react'

export default function CloudDevops() {

    var headingChange = {
        currentHeader: 0,
        headings: ['Accelerate', 'Transform', 'Innovate'],
        heading: function () {
            //document.getElementById('heading').innerHTML = this.headings[this.currentHeader];
            if (this.currentHeader === this.headings.length - 1) {
                this.currentHeader = 0;
            } else {
                this.currentHeader = this.currentHeader + 1;
            }
        }
    };

    setInterval(function () {
        headingChange.heading();
    }, 2000)

    return (
        <div className='TestingContainer row pt-5 vh-100 pl-5'>
            <div className='col ml-4 pr-0'>
            <div className='CloudDev1'>
                <div>
                    <img src='./Images/gobeyond/Group42.svg' width="180" height="50" />
                </div>
                <h1 id='heading' style={{ color: "#2563AC" }}>
                </h1>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                    Your cloud services<br />
                </h1>
                <span className='mb-3'>
                Enhance your organization's opertional effciency across all stages with our robust cloud
                services ,levarging the power of AWS and Azure to attain exceptional complaince and 
                governance standards , through seamless integration of cloud computing and DevOps 
                methodologies to unlock unmatched operational excellence.
                </span>
                
                <div className='mt-5' style={{ display: "flex", textAlign: "center", gap: "4%", marginTop: "2%", fontSize: "12px", fontWeight: "500" }}>
                    <div>
                        <div>
                            <div>
                                <img src='./Images/gobeyond/Cloud Migration and Modernisation.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Migration<br /> and Modernisation
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src='./Images/gobeyond/DevSecOps.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    DevSecOps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Infrastructure Services.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Infrastructure<br /> Services
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Data and AI.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Data and AI
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Security.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Security
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Economics.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Economics
                                </p>
                            </div>
                        </div>
                    </div>                   
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Operations.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Operations
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Consulting.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Consulting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Industry Cloud.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Industry Cloud
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Business Applications.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Business<br /> Application
                                </p>
                            </div>
                        </div>
                    </div>
                        
                    
                    

                </div>

                {/* <div>
                    <div className='d-flex mt-2'>
                        <h3 style={{ color: "#28B29A" }}>
                            25%
                        </h3>
                        <p className='ml-3 mt-1'>
                            Increase in retentio
                        </p>
                    </div>
                    <div className='d-flex mt-2'>
                        <h3 style={{ color: "#28B29A" }}>
                            1.7X
                        </h3>
                        <p className='ml-3 mt-1'>
                            User Data base growth
                        </p>
                    </div>
                </div> */}
            </div>
            </div>
           <div className='col ml-3'>
            <div className='CloudDev2 img-left'>
                <img src='./Images/gobeyond/Cloud69.png' />
            </div>
            </div>
        </div>
    )
}
