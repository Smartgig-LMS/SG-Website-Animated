import React, { useRef } from "react";
import Footer from "../LandingPage/Footer";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function ContactUsPage() {
  const formVar = useRef();
  const [flag1, setFlag1] = React.useState(true);
  const [flag2, setFlag2] = React.useState(true);
  const [flag3, setFlag3] = React.useState(true);
  const [flag4, setFlag4] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <IconButton
            edge="right"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={{ marginLeft: "95%" }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            width="940px"
            height="940px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=yGm9mQ7PR0ey76f0YV3EO1u5dVf9_KVDjPCkcvodfsBUOFRDVlhBOTFQQjZZNVRIUjhGUEtXTjc3Vi4u&embed=true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          >
            {" "}
          </iframe>
        </Dialog>

        <Dialog open={open2} onClose={handleClose} fullWidth maxWidth="md">
          <IconButton
            edge="right"
            color="inherit"
            onClick={handleClose}
            // aria-label="close"
            style={{ marginLeft: "95%" }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            width="940px"
            height="940px"
            src="https://forms.office.com/r/z05GMz06md?embed=true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          >
            {" "}
          </iframe>
        </Dialog>
      </div>

      <div className="contactPg">
        <div className="firstContact">
          <h1 className="ContactHeadnig">How can we help you?</h1>
        </div>
        <div className="secondContact">
          <h3>I’m Looking for</h3>
          <p>
            We are happy to assist you in providing comprehensive services,
            backed by a dedicated team of professionals
            <br /> who are committed to going the extra mile for you, around the
            clock, to enhance your experience with unwavering efficiency.
            <br />
          </p>
        </div>
        <div className="thirdContact">
          <div
            className="card shadow"
            style={{ height: "248px", width: "286px", cursor: "pointer" }}
          >
            <div onClick={handleClickOpen}>
              <h5>Request for service</h5>
            </div>
          </div>

          <div
            className="card shadow"
            style={{ height: "248px", width: "286px" }}
          >
            <a
              href="https://infionic.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5>More about Infionic Product</h5>
            </a>
          </div>
          <div
            className="card shadow"
            style={{ height: "248px", width: "286px" }}
          >
            <a
              href="https://Occultcybersecurity.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5>More about Occult Cyber Security</h5>
            </a>
          </div>

          <div
            className="card shadow"
            style={{ height: "248px", width: "286px", cursor: "pointer" }}
          >
            <div onClick={handleClickOpen2}>
              <h5>Career related Queries</h5>
            </div>
          </div>
        </div>
        <div className="forthContact">
          <div className="cardBlue">
            <h2>Locations</h2>
            <h5>Explore our service offerings and subsidiaries</h5>
            <div className="AddressImg">
              <div
                className="AddressText1"
                onMouseEnter={() => setFlag1(false)}
                onMouseLeave={() => setFlag1(true)}
              >
                {flag1 ? (
                  <h4>Tirupati</h4>
                ) : (
                  <div className="real1">
                    <h5>Address:</h5>
                    <p>
                      306, 3rd Floor, Eden ECCO Greens, <br />
                      Karakambadi Rd, Madhav Puram, <br />
                      Tirupati, Andhra Pradesh 517507
                    </p>
                  </div>
                )}
              </div>
              <div
                className="AddressText2"
                onMouseEnter={() => setFlag2(false)}
                onMouseLeave={() => setFlag2(true)}
              >
                {flag2 ? (
                  <h4>Bengaluru</h4>
                ) : (
                  <div className="real2">
                    <h5>Address:</h5>
                    <p>
                      306, Brigade IRV Centre, <br />
                      Nallurhalli, Whitefield, <br />
                      Banglore, Karnataka 560066
                    </p>
                  </div>
                )}
              </div>
              <div
                className="AddressText3"
                onMouseEnter={() => setFlag3(false)}
                onMouseLeave={() => setFlag3(true)}
              >
                {flag3 ? (
                  <h4>Hyderabad</h4>
                ) : (
                  <div className="real3">
                    <h5>Address:</h5>
                    <p>
                      4th floor, Sanali Spazio, Software <br />
                      Units Layout, Madhapur, <br />
                      Hyderabad, TS 500081
                    </p>
                  </div>
                )}
              </div>
              <div
                className="AddressText4"
                onMouseEnter={() => setFlag4(false)}
                onMouseLeave={() => setFlag4(true)}
              >
                {flag4 ? (
                  <h4>Singapore</h4>
                ) : (
                  <div className="real4">
                    <h5>Address:</h5>
                    <p>
                      105 Cecil Street, #13-00, The <br />
                      Octagon, Singapore 069534 <br />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile-------------------------------------------------- */}

      <div className="contactpgMobile">
        <div className="firstContact">
          <h1>How can we help you?</h1>
        </div>
        <div className="col-lg-7" style={{ textAlign: "center" }}>
          <div className="secondContact p-3">
            <h3 style={{ color: "#f18313" }}>I’m Looking for</h3>
            <p className="text-left">
              We are happy to assist you in providing comprehensive services,
              backed by a dedicated team of professionals who are committed to
              going the extra mile for you, around the clock, to enhance your
              experience with unwavering efficiency.
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row cardsforMobile">
            <div
              className="card"
              style={{ width: "160px", height: "120px", cursor: "pointer" }}
            >
              <div onClick={handleClickOpen}>
                <p>Request for service</p>
              </div>
            </div>

            <div className="card" style={{ width: "160px", height: "120px" }}>
              <a
                href="https://infionic.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>More about Infionic Product</p>
              </a>
            </div>
            <div className="card" style={{ width: "160px", height: "120px" }}>
              <a
                href="https://Occultcybersecurity.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>More about Occult Cyber Security</p>
              </a>
            </div>

            <div className="card" style={{ width: "160px", height: "120px" }}>
              <div onClick={handleClickOpen2}>
                <p>Career related Queries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 forthContact">
          <div className="cardBlue">
            <h2>Locations</h2>
            <h5>Explore our service offerings and subsidiaries</h5>
            <div className="img-left">
              <img src="./Images/gobeyond/Tirupati.svg" />
              <img src="./Images/gobeyond/Hyderabad.svg" />
              <img src="./Images/gobeyond/Bangalore.svg" />
              <img src="./Images/gobeyond/Group 427321753.svg" />
            </div>
          </div>
        </div>
        {/* <div className='footerForMobile'>
                    <hr />
                    Copyright © 2023 SmartGig Technology Private Limited. All Rights Reserved.
                </div> */}
      </div>
      <Footer />
    </>
  );
}
