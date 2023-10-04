import React from 'react'
import Footer from '../LandingPage/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const slideImages = [
    {
        image: './Images/gobeyond/351.png',
    },
    {
        image: './Images/gobeyond/Rectangle 13369.png',
    },
    {
        image: './Images/gobeyond/351.png',
    },
];

export default function ProductPage() {

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const spanStyle = {
        padding: '20px',
        backgroundColor: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }

    const [current, setCurrent] = React.useState(0);
    const length = slideImages.length;

    if (!Array.isArray(slideImages) || slideImages.length <= 0) {
        return null;
    }

    console.log(current);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className='productpg '>
            <div className='opHeadnigs'>
                <h1>Our Partnerships</h1>
            </div>

            {/* new */}
            <div className='d-fx'>
                <div>
                    <div className='infiLogo'>
                        <img src='./Images/gobeyond/Grou.svg' />
                    </div>
                    <p className='mt-2' style={{ textAlign: "center", paddingLeft: "10%", paddingRight: "10%" }}>
                        At SmartGig, we pride ourselves on fostering a culture of collaboration and innovation. Our commitment to excellence is reflected in our diverse partnership programs, which are meticulously designed to meet the distinct requirements of businesses within the industry with access to the world of unparalleled opportunities, through our relentless pursuit of cutting-edge solutions that drive your success .As not just partners but as your innovation catalyst, helping you stay ahead in a rapidly evolving digital landscape. 'Come Join us to redefine possibilities together
                    </p>
                </div>
                <div className='Lastcontainer'>
                    <div className='card mt-5'>
                        <div className='d-flex'>
                            <div className='imageOfCultureNew4'>
                                <div class="container">
                                    <a href='https://occultcybersecurity.com/' target='_blank'>
                                        <img src='./Images/gobeyond/Group 427321546.png' />
                                        <div class="overlay">
                                            <div class="text">
                                                <h1>
                                                    Threat Intelligence Service
                                                    Providers, Q3 2023
                                                </h1>
                                                <p>
                                                    Occult Cyber is a vitalizing hub for advanced threat surface management with a team of dedicated cyber professionals, who provide in-depth analyses, actionable recommendations, and the latest industry trends to mitigate the cyber threats and to elevate the cyber defenses of business organizations to ensure they stay one step ahead in fortification of their cyber fortress.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className='imageOfCultureNew3'>
                                    <div class="container">
                                        <a href='https://infionic.com/' target='_blank'>
                                            <img src='./Images/gobeyond/Group 427321532.png' />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h4>
                                                        Infionic provides best
                                                        Business Solutions
                                                    </h4>
                                                    <p>
                                                        Infionic was born with an idea of a unified vision and collaborative approach to business operations.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='imageOfCultureNew3'>
                                    <div class="container">
                                        <a href='https://www.insurfin.in' target='_blank'>
                                            <img src='./Images/gobeyond/Group42.png' />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h4>
                                                        Enhanced Opportunity
                                                        with Every Prospect
                                                    </h4>
                                                    <p>
                                                        InsurFin Financing is a practice in which a lender provides funds to an individual to pay for their insurance premiums.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='testimonials mt-3'>
                <img src='./Images/gobeyond/Group 427321194.svg' height="48" width="190" />
                <h2 style={{ fontWeight: "bold" }}>
                    What people are saying
                </h2>
                <section className="slider">
                    <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
                    <p>.</p>
                    <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
                    {slideImages.map((slider, index) => {
                        return (
                            <div
                                className={index === current ? "slide active" : "slide"}
                                key={index}
                            >
                                {index === current && (
                                    <div className='testiContain'>
                                        <div className='card shadow'>

                                            <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                                            <br />
                                            <p>
                                                "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                            </p>
                                            <h6>
                                                Subramnyam
                                            </h6>
                                            <p>
                                                Founder
                                            </p>
                                        </div>
                                        <div className='card shadow'>
                                            <img src='./Images/gobeyond/Item11.png' height="40" width="40" />
                                            <br />
                                            <p>
                                                "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                            </p>
                                            <h6>
                                                Sandeep
                                            </h6>
                                            <p>
                                                Product Strategist
                                            </p>
                                        </div>
                                        <div className='card shadow'>
                                            <img src='./Images/gobeyond/Item.png' height="40" width="40" />
                                            <br />
                                            <p>
                                                "Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."
                                            </p>
                                            <h6>
                                                Jay
                                            </h6>
                                            <p>
                                                Founder
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div> */}

            {/* old */}

            {/* <div className='totalMain'>
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
            </div> */}
            <Footer />
        </div>
    )
}
