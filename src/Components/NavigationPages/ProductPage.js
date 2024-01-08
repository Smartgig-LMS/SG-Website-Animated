import React from "react";
import Footer from "../LandingPage/Footer";

export default function ProductPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="productpg">
        <div className="opHeadnigs">
          <h1>Our Partnerships</h1>
        </div>

        {/* new */}
        <div className="d-fx">
          <div>
            <div className="infiLogo">
              <img src="./Images/gobeyond/Partnership-Icon.svg" />
            </div>
            <p
              className="mt-2 container"
              style={{
                textAlign: "center",
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              At SmartGig, we pride ourselves on fostering a culture of
              collaboration and innovation. Our commitment to excellence is
              reflected in our diverse partnerships with startups, which are
              solving some of the serious problems in B2B ,B2C and P2P space.We
              are truly amazed with what our partners do and are always open to
              partner in solutions helping mankind. 'Come Join us to redefine
              possibilities together
            </p>
          </div>
          {/* <div className='Lastcontainer'>
                        <div className='card mt-5'>
                            <div className='d-flex'>
                                <div className='imageOfCultureNew4'>
                                    <div className="containerNew">
                                        <a href='https://occultcybersecurity.com/' target='_blank'>
                                            <img src='./Images/gobeyond/Group 427321546.png' />
                                            <div className="overlay">
                                                <div className="text">
                                                    <p>
                                                        Assuring digital trust with our secure by design, integrated approach and robust security posture.With robust and AI backed Occult Cyber Security Framework (OCSF) be on the vigil and execute the task of upholding the security posture of the organization. It empowers various teams in the organisations by providing them a secure environment to work, and by disseminating necessary security awareness.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div className='imageOfCultureNew3'>
                                        <div className="containerNew">
                                            <a href='https://infionic.com/' target='_blank'>
                                                <img src='./Images/gobeyond/Group 427321532.png' />
                                                <div className="overlay">
                                                    <div className="text">
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
                                        <div className="containerNew">
                                            <a href='https://www.insurfin.in' target='_blank'>
                                                <img src='./Images/gobeyond/Group42.png' />
                                                <div className="overlay">
                                                    <div className="text">
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
                    </div> */}
          <div className="LastcontainerProductPg">
            <div className="card mt-5">
              <div className="d-flex">
                <div className="imageOfCultureNew3">
                  <div className="containerNew">
                    <a href="https://infionic.com/" target="_blank">
                      <img src="./Images/gobeyond/Infionic3.svg" />
                      <div className="overlay">
                        <div className="text">
                          <h4>Infionic provides best Business Solutions</h4>
                          <p>
                            Infionic was born with an idea of a unified vision
                            and collaborative approach to business operations.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="imageOfCultureNew3">
                  <div className="containerNew">
                    <a href="https://www.insurfin.in" target="_blank">
                      <img src="./Images/gobeyond/InsurFin3.svg" />
                      <div className="overlay">
                        <div className="text">
                          <h4>Enhanced Opportunity with Every Prospect</h4>
                          <p>
                            InsurFin Financing is a practice in which a lender
                            provides funds to an individual to pay for their
                            insurance premiums.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="imageOfCultureNew3">
                  <div className="containerNew">
                    <a href="https://itconnectus.com/" target="_blank">
                      <img src="./Images/gobeyond/Group 4273218653.svg" />
                      <div className="overlay">
                        <div className="text">
                          {/* <h4>
                            We are thrilled to introduce a groundbreaking
                            partnership between SmartGig and ITC Connect US, as
                            we set our sights on a future filled with
                            innovation, growth, and excellence. This
                            collaboration is born from a common goal - to
                            revolutionize the IT industry landscape.
                          </h4> */}
                          <h4>Making Great Things Possible</h4>
                          <p>
                            Nurturing a culture of innovation, delivering
                            products at the forefront of industry standards, and
                            addressing critical challenges that define our
                            industry.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="imageOfCultureNew3">
                  <div className="containerNew">
                    <a href="https://occultcybersecurity.com/" target="_blank">
                      <img src="./Images/gobeyond/Group 4273218633.svg" />
                      <div className="overlay">
                        <div className="text">
                        <h4>Elevate your Cyber Defense with Occult</h4>
                          <p>
                            Assuring digital trust with our secure by design,
                            integrated approach and robust security posture.With
                            robust and AI backed Occult Cyber Security Framework
                            (OCSF) be on the vigil and execute the task of
                            upholding the security posture of the organization.
                            {/* It empowers various teams in the organisations by
                            providing them a secure environment to work, and by
                            disseminating necessary security awareness. */}
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
        <Footer />
      </div>

      <div className="productpgMobile">
        <div className="opHeadnigs">
          <h1>Our Partnerships</h1>
        </div>
        <div className="d-fx" style={{ textAlign: "center" }}>
          <div>
            <div style={{ textAlign: "center" }} className="mt-3">
              <img src="./Images/gobeyond/Partnership-Icon.svg" />
            </div>
            <p className="mt-2 col-lg-7" style={{ textAlign: "left" }}>
              At SmartGig, we pride ourselves on fostering a culture of
              collaboration and innovation. Our commitment to excellence is
              reflected in our diverse partnerships with startups, which are
              solving some of the serious problems in B2B ,B2C and P2P space.We
              are truely amazed with what our partners do and are always open to
              partner in solutions helping mankind. 'Come Join us to redefine
              possibilities together
            </p>
          </div>
          <div className="mt-3 mb-5 img-left">
            <a href="https://infionic.com/" target="_blank">
              <img src="./Images/gobeyond/Group 427321594.svg" />
            </a>
          </div>
          <div className="mt-3 mb-5 img-left">
            <a href="https://www.insurfin.in" target="_blank">
              <img src="./Images/gobeyond/Group 427321593.svg" />
            </a>
          </div>
          <div className="mt-4 mb-5 img-left">
            <a href="https://itconnectus.com/" target="_blank">
              <img src="./Images/gobeyond/Group 427321873.svg" />
            </a>
          </div>
          <div className="mt-4 mb-5 img-left">
            <a href="https://occultcybersecurity.com/" target="_blank">
              <img src="./Images/gobeyond/Group 427321874.svg" />
            </a>
          </div>
        </div>
        <div className="footerForMobile">
          <hr />
          Copyright © 2023 SmartGig. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
