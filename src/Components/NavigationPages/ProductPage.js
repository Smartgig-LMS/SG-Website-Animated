import React from 'react'
import Footer from '../LandingPage/Footer'

export default function ProductPage() {

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='productpg '>
            <div className='opHeadnigs'>
                <h1>Our Partnerships</h1>
            </div>
            <div className='infiLogo'>
                <img src='./Images/gobeyond/Group 515833.png' />
            </div>
            <div className='totalMain'>
                <div className='LeftProduct'>
                    <h1 >
                        Breaking down Information<br />
                        Silos using Technology
                    </h1>
                    <span>
                        Infionic: Infionic evolved with an idea of a unified vision and collaborative approach towards <br />
                        business and traditional IT solutions. Through its path breaking ERP software it really revolutionized<br />
                        the Enterprise Resource Planning, in which it aligns IT solutions with agility and precision to<br />
                        transform the growth of business .with extensive domain knowledge and Increased Flexibility with<br />
                        the integration of multitude of departments in business.
                    </span>
                    <br />
                    <h2 className='mb-3 mt-4' style={{ color: "#0466c8" }}>
                        Infionic Services
                    </h2>
                    <div className='LeftOccult'>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    ZIP
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/Group 427321328.png' />
                            </div>
                        </div>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    SnapDoc
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/Erp.png' />
                            </div>
                        </div>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    Evolve
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/DMS.png' />
                            </div>
                        </div>
                    </div>
                    <button className='visitbtn'><a href='https://infionic.com/' target='_blank' style={{ textDecoration: "none", color: "#f38313" }}>  Visit Website </a></button>
                </div>
            </div>
            <hr style={{ margin: "50px 50px" }} />
            <img src="./Images/gobeyond/occult-image.png" alt="image" className='occultimg' />
            <div className='MainOccult'>
                <div>
                    <h1 >
                        Threat Intelligence Service<br />
                        Providers, Q3 2023
                    </h1>
                    <span>
                        Occult Cyber is a vitalizing hub for advanced threat surface management with a team of <br />
                        dedicated cyber professionals, who provide in-depth analyses, actionable recommendations, <br />
                        and the latest industry trends to mitigate the cyber threats and to elevate the cyber defenses<br />
                        of business organisations to ensure they stay one step ahead in fortification of their cyber fortress.
                    </span>
                    <br />

                    <h2 className='mb-3 mt-4' style={{ color: "#0466c8" }}>
                        Occult Services
                    </h2>
                    <div className='LeftOccult'>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    CTI
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/Cyber1.png' />
                            </div>
                        </div>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    EDR
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/Cyber2.png' />
                            </div>
                        </div>
                        <div >
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    XDR
                                </h6>
                            </div>
                            <div>
                                <img src='./Images/gobeyond/Cyber3.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='visitbtn'><a href='https://occultcybersecurity.com/' target='_blank' style={{ textDecoration: "none", color: "#f38313" }}>  Visit Website </a></button>
            </div>
            <Footer />
        </div>
    )
}
